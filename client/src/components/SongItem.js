/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FontAwesome from 'react-fontawesome'

import {  addToFavThunk, deleteFromFavThunk } from '../redux/actions/songAction'


const SongItem = ({ song }) => {
  const favList = useSelector((state) => state.song.fav)
  const dispatch = useDispatch()
  // destructuring the props value
  const { id, title, artist, images, level } = song

  const [toggleMenu, setToggleMenu] = useState(false)

  // implement the function to change the state
  const menuToggle = () => {
    setToggleMenu((prevTog) => !prevTog)
  }



  const handleAddFav = (id) => {
    const song = {
      songId: id,
    }
    // dispatch song to add to favList
    dispatch(addToFavThunk(song))
  }

  const handleDeleteFav = (id) => {
    // compare the songId with favList store data
    const data = favList.filter((element) => element.songId === id)

    // map the filter data
    let favId = data.map((element) => element.id)
    favId = favId.toString()
    // dispatch the favId to delete
    dispatch(deleteFromFavThunk(favId))
  }


  const numToDeg = (level) => {
    if( level <= 7) {
      return (24 * level) - 90 + 'deg'
    } else {
      return (24 * level) - 270 + 'deg'
    }
  }

  const checkS = (level) => {
    return level <= 7 ? 1 : 0
  }


  const dynamicColor = (level) => {
    let color = ''
    if (level >= 1 && level <= 5) {
      return (color = '#6fc13e')
    }
    if (level >= 6 && level <= 10) {
      return (color = '#ff8e00')
    } else {
      return (color = '#dc001c')
    }
  }

  const Style = {
    '--v' : `${numToDeg(level)}`,
    '--s': `${checkS(level)}`,
    '--c': `${dynamicColor(level)}`
  }

  return (
    <div className="details">
      <div className="card">
        <div>
          <img src={images} alt="song" />
        </div>

        <div className="song-1">
          <p className='title'>{title}</p>
          <p className='artist'>{artist} </p>
        </div>
      </div>

      <div className="song-icon">

        <div className='levelCircle' style={ Style }>
          <p id='level-number'>{level}</p></div>
        <div onClick={menuToggle} className="favbtn">
          { !toggleMenu ? (
            <FontAwesome name='favorite' onClick={() => handleAddFav(id)} className='far fa-heart' id='whiteClass'/>
          ) : (
            <FontAwesome name='favorite' onClick={() => handleDeleteFav(id)} className='far fa-heart' id='redClass'/>
          )}</div>
      </div>

    </div>
  )
}

export default SongItem

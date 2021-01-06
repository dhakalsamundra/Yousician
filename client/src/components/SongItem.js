import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FontAwesome from 'react-fontawesome'

import {  addToFavThunk, deleteFromFavThunk } from '../redux/actions/songAction'


const SongItem = ({ song }) => {
  const favList = useSelector((state) => state.song.fav)
  const dispatch = useDispatch()
  const { id, title, artist, images, level } = song;

  const [toggleMenu, setToggleMenu] = useState(false);
  const menuToggle = () => {
    setToggleMenu((prevTog) => !prevTog);
  };

  const handleAddFav = (id) => {
    const song = {
      songId: id,
    };
    dispatch(addToFavThunk(song))
  };


  const handleDeleteFav = (id) => {
    // use filter to compare the id
      const data = favList.filter((element) => element.songId === id)
    // map the filter data
      let favId = data.map((element) => element.id)

      favId = favId.toString()
      console.log('final id', favId)
      dispatch(deleteFromFavThunk(favId))
  };

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
        <div className='level'><p>{level}</p></div>
        <div onClick={menuToggle} className="favbtn">
        { toggleMenu ? (
        <FontAwesome onClick={() =>handleDeleteFav(id)} className='far fa-heart' id='addFav'/>
        ) : (
        <FontAwesome onClick={() =>handleAddFav(id)} className='far fa-heart' id='removeFav'/>
        )}</div>
      </div>

    </div>
  );
};

export default SongItem;

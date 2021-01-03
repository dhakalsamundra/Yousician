import React from "react";
import { useDispatch } from 'react-redux'

import {  addToFavThunk } from '../redux/actions/songAction'
import FavoriteBorder from '../assets/icons/favorite_border.svg'
import Favorite from '../assets/icons/favorite.svg'


const SongItem = ({ song }) => {

  const dispatch = useDispatch()
  const { id, title, artist, images, level } = song;

  // const onDeleteFromFav = (id) => {
  //   console.log('sam delete it', id)
  // };

  const handleAddFav = (id) => {
    const song = {
      songId: id,
    };
    // document.svgFav.style.fill = 'red'; 
    // console.log('samundra', id)
    // console.log('data', song)
    // dispatch(addToFavThunk(song))
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
        <button
          aria-label="delete book"
          onClick={() => handleAddFav(id)}
        >
          <img src={FavoriteBorder} className='abc' alt='favorite icon'/>
        </button>
      </div>

    </div>
  );
};

export default SongItem;

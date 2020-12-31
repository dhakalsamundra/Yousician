import React from "react";
import axios from "axios";

import FavoriteBorder from '../assets/icons/favorite_border.svg'
import Favorite from '../assets/icons/favorite.svg'

const baseUrl = "http://localhost:3004/favorites";

const SongItem = ({ song }) => {
  const { id, title, artist, images, level } = song;

  const onDeleteFromFav = () => {
    const response = axios.post(baseUrl, song);
    return response.data;
  };

  const handleAddFav = (id) => {
    const song = {
      songId: id,
    };
    console.log('samundra', id)
    console.log('data', song)
    const response = axios.post(baseUrl, song);
    return response.data;
  };

  return (
    <div className="details">
      <div className="card">
        <div>
          <img src={images} alt="song" />
        </div>

        <div className="song-1">
          <p>{title}</p>
          <p className='artist'>{artist} </p>
        </div>
      </div>

      <div className="song-icon">
        <div className='level'><h3>{level}</h3></div>
        <button
          color="secondary"
          aria-label="delete book"
          onClick={() => handleAddFav(id)}
        >
          <img src={Favorite} className='svgFav'/>
        </button>
      </div>
    </div>
  );
};

export default SongItem;

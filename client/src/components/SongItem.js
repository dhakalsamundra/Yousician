import React from "react";
import axios from "axios";
import { IconButton } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

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
          <h4>{title}</h4>
          <h6>{artist} </h6>
        </div>
      </div>

      <div className="song-icon">
        <div className='level'><h3>{level}</h3></div>
        <IconButton
          color="secondary"
          aria-label="delete book"
          onClick={() => handleAddFav(id)}
        >
          <FavoriteBorderIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default SongItem;

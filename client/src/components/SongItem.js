import React, { useContext } from "react";

import { IconButton } from '@material-ui/core'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import SongContext from "../context/songs/context";

const ContactItem = ({ song }) => {
  const songContext = useContext(SongContext);
  const { deleteFromFav, addToFav } = songContext;

  const { _id, title, artist, images, level } = song;

  const onDeleteFromFav = () => {
    deleteFromFav(_id);
  };

  const handleAddFav = () => {
    addToFav(_id);
  };

  return (
    <div className="details">
      <div className="card bg-light song">
        <div>
          <img src={images} alt="song" />
        </div>
        <div className="song-1">
          <h3 className="text-primary text-center">{title} </h3>
          <h3 className="text-primary text-center">{artist} </h3>
        </div>
        </div>

      <div className="song-icon">
        <h3 className="text-primary text-center">{level} </h3>
        <IconButton
                color="secondary"
                aria-label="delete book"
                onClick={() => handleAddFav(_id)}
              >
            <FavoriteBorderIcon />
          </IconButton>
        </div>

    </div>
  );
};

export default ContactItem;

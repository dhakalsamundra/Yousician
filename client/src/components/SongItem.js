import React, { useContext } from "react";
import SongContext from "../context/songs/context";

const ContactItem = ({ song }) => {
  const songContext = useContext(SongContext);
  const { deleteFromFav, AddToFav } = songContext;

  const { _id, title, artist, images, level /*search*/ } = song;

  const onDeleteFromFav = () => {
    deleteFromFav(_id);
  };

  const onAddToFav = () => {
    AddToFav(_id);
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
          <button className="btn btn-dark btn-sm" onClick={onAddToFav}>
            addToFav
          </button>
        </div>

    </div>
  );
};

export default ContactItem;

import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import SongItem from "./SongItem";

const Songs = () => {
  const songs = useSelector((state) => state.song.filteredList);

  return (
    <Fragment>
      <TransitionGroup>
        {songs.map((song, id) => (
          <CSSTransition key={id} timeout={500} classNames="item">
            <SongItem song={song} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Songs;

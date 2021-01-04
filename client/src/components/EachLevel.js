import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterSongByLevel } from "../redux/actions/songAction";
const EachLevel = () => {

  const dispatch = useDispatch();
  const songs = useSelector((state) => state.song.filteredList)

  let level = [ ...new Set(songs.map(song => song.level))]
  level = level.sort((a,b) => a > b ? 1 : -1)

  const filterChange = (each) => {
    console.log('sam', each);
    dispatch(filterSongByLevel(each));
  };

  return (
    <div className="level-container">
      <div className='each-level'>
      { level.map((each, level) => (
        <div className='samundra' key={level}>
        <button onClick={() => filterChange(each)}>
          <p>{each}</p>
        </button></div>
      ))}
      </div>
    </div>
  );
};

export default EachLevel;

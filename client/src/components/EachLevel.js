import React, { useState } from "react";
import { useDispatch } from "react-redux";
 
import { filterSongByLevel } from "../redux/actions/songAction";
 
const EachLevel = () => {
  const [ number, setNumber] = useState([])
  const dispatch = useDispatch();
  const LEVEL = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
 
 
  // const songs = useSelector((state) => state.song.filteredList)
  // let level = [ ...new Set(songs.map(song => song.level))]
  // level = level.sort((a,b) => a > b ? 1 : -1)
 
  const filterChange = (each) => {
    setNumber(...number, each)
    dispatch(filterSongByLevel(number));
  };
 
 
  return (
    <div className="level-container">
      <div className='level1'>
      { LEVEL.map((each, level) => (
        <div className='each-level' id='sam' key={level}>
        <button onClick={() => filterChange(each)}>
          <p>{each}</p>
        </button>
        </div>
      ))}
      </div>
    </div>
  );
};
 
export default EachLevel;
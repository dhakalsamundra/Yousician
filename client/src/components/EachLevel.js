import React, { useState } from "react";
import { useDispatch } from "react-redux";
 
import { filterSongByLevel } from "../redux/actions/songAction";
 
const EachLevel = () => {
  const [ number, setNumber] = useState([])
  const dispatch = useDispatch();

  const LEVEL = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

  console.log('this is component each', number)

 
  const filterChange = (each) => {
    let a = number.push(each)
    setNumber(a)
    // setNumber(prev => [ ...prev, each])
    const newArray = [ ...number, each];

    dispatch(filterSongByLevel(number));
 
  };
 
  return (
    <div className="level-container">
      <div className='level1'>
      { LEVEL.map((each, level) => (
        <div className='each-level' key={level}>
        <button onClick={() => filterChange(each)}>
          <p onClick={() => setNumber([...number, each])}>{each}</p>
        </button>
        </div>
      ))}
      </div>
    </div>
  );
};
 
export default EachLevel;
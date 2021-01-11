import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { filterSongByLevel } from '../redux/actions/songAction'
import EachLevel from './EachLevel'

const LevelMenu = ({ isVisible }) => {
  const [number, setNumber] = useState([])
  const dispatch = useDispatch()

  const filterChange = (level) => {
    const a = [...number, level]
    setNumber(() => {
      dispatch(filterSongByLevel(a))
      return a
    })
  }

  const LEVEL = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

  return (
    <div
      style={{ visibility: isVisible ? 'visible' : 'hidden' }}
      className='level-container'
    >
      {LEVEL.map((level, id) => (
        // Passing the props and function to the child component
        <EachLevel key={id} level={level} filterChange={filterChange} />
      ))}
    </div>
  )
}

export default LevelMenu

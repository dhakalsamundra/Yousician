/* eslint-disable no-unused-vars */
import React from 'react'


const EachLevel = ({  level, filterChange }) => {


  const numToDeg = (level) => {
    if( level <= 7) {
      return (24 * level) - 90 + 'deg'
    } else {
      return (24 * level) - 270 + 'deg'
    }
  }

  const checkS = (level) => {
    return level <= 7 ? 1 : 0
  }


  const dynamicColor = (level) => {
    let color = ''
    if (level >= 1 && level <= 5) {
      return (color = '#6fc13e')
    }
    if (level >= 6 && level <= 10) {
      return (color = '#ff8e00')
    } else {
      return (color = '#dc001c')
    }
  }

  const Style = {
    '--v' : `${numToDeg(level)}`,
    '--s': `${checkS(level)}`,
    '--c': `${dynamicColor(level)}`
  }
  return (
      <div
        className="each-level"
        style={Style}
        id="each-level"
        onClick={() => filterChange(level)}
      >
        <p>{level}</p>
      </div>
  )
}

export default EachLevel

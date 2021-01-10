import React, { useState } from 'react'

import Icon from '../assets/icons/filter.svg'
import EachLevel from './EachLevel'

const Filter = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const LEVEL = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

  // implement the function to change the state
  const menuToggle = () => {
    setToggleMenu((prevTog) => !prevTog)
  }
  return (
    <div className='sort-container' >
      <div className='sort-filter'>
        <div className="sort" onClick={menuToggle}>
          <div className="filter">
            <span>FILTER BY LEVEL</span>

            <div className="filter-icon">
              <p>5 - 10</p>

              <div className="img-filter">
                <img src={Icon} alt="filter icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='levelOne'>
        {/* Map level and pass it as props to compoent */}
        { LEVEL.map((each, id) => (
          <EachLevel key={id} isVisible={toggleMenu} level={each} />
        ))}
      </div>
    </div>
  )
}

export default Filter

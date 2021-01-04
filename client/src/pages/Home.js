import React, { useState } from 'react'

import Songs from '../components/Songs'
import Search from '../components/Search'
import Filter from '../components/Filter'
import Togglable from '../components/Togglable'
import EachLevel from '../components/EachLevel'

const Home = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const menuToggle = () => {
    setToggleMenu((prevTog) => !prevTog);
  };
  return (
    <div className='grid-2'>
      <div>
        <Search />
        <div onClick={menuToggle}>
          <Filter />
          { toggleMenu ? (
            <EachLevel />
          ) : (
            null
          )}
        </div>
        <Songs />
      </div>
    </div>
  )
}

export default Home
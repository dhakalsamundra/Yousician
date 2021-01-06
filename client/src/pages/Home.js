import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Songs from '../components/Songs'
import Search from '../components/Search'
import Filter from '../components/Filter'
import EachLevel from '../components/EachLevel'
import Spinner from '../components/Spinner'

import { fetchSongsThunk } from '../redux/actions/songAction'

const Home = () => {
  const dispatch = useDispatch()
  const [toggleMenu, setToggleMenu] = useState(false);
  const songs = useSelector((state) => state.song.filteredList)

  const menuToggle = () => {
    setToggleMenu((prevTog) => !prevTog);
  }
  if(songs.length === 0){
    dispatch(fetchSongsThunk())
    return <Spinner />
  }
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
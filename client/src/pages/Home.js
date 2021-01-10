import React, {  useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Songs from '../components/Songs'
import Search from '../components/Search'
import Filter from '../components/Filter'
import Spinner from '../components/Spinner'

import { fetchSongsThunk } from '../redux/actions/songAction'

const Home = () => {
  const dispatch = useDispatch()

  // fetch the song
  useEffect(() => {
    dispatch(fetchSongsThunk())
  }, [dispatch])

  // retrive the songs from the store
  const songs = useSelector((state) => state.song.filteredList)

  // If no songs, loader will be implemented
  if (songs.length === 0) {
    return <Spinner />
  }
  return (
    <div className="grid-2">
      <div>
        <Search />
        <Filter />
        <Songs />
      </div>
    </div>
  )
}

export default Home
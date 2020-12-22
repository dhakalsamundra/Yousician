import React from 'react'
import Songs from '../components/Songs'
import SongFilter from '../components/Search'

const Home = () => {
  return (
    <div className='grid-2'>
      <div>
        <SongFilter />
        <Songs />
      </div>
    </div>
  )
}

export default Home
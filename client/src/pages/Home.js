import React from 'react'
import Songs from '../components/Songs'
import Search from '../components/Search'

const Home = () => {
  return (
    <div className='grid-2'>
      <div>
        <Search />
        <Songs />
      </div>
    </div>
  )
}

export default Home
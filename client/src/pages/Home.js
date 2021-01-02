import React from 'react'

import Songs from '../components/Songs'
import Search from '../components/Search'
import Filter from '../components/Filter'

const Home = () => {
  return (
    <div className='grid-2'>
      <div>
        <Search />
        <Filter />
        <Songs />
      </div>
    </div>
  )
}

export default Home
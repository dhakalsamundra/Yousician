import React from 'react'

import Songs from '../components/Songs'
import Search from '../components/Search'
import Filter from '../assets/icons/filter.svg'

const Home = () => {
  return (
    <div className='grid-2'>
      <div>
        <Search />
        <div className='filter'>

          <span>FILTER BY LEVEL</span>

          <div className='filter-icon'>

            <p>5 - 10</p>

            <div className='img-filter'>

            <img src={Filter} alt='filter icon' />
            
            </div>
          </div>
        </div>
        <Songs />
      </div>
    </div>
  )
}

export default Home
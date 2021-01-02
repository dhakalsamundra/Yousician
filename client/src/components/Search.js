import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'

import { searchSong } from '../redux/actions/songAction'
import icon from '../assets/icons/search.svg'

const Search = () => {
  const text = useRef('')
  const dispatch = useDispatch()

  const onChange = e => {
    dispatch(searchSong(e.target.value))
  }

  return (
    <div className='search-Container'>

      <div className='info'>
        <h1>NEW SONGS DELIVERED EVERY WEEKS</h1>
        <p>Here are the most recent additions to the Yousician App. Start playing today!</p>
      </div>

      <div className='search'>
      <form>
        <input
          ref={text}
          type='text'
          className='search-placeholder'
          placeholder='Search for song by artist or title'
          onChange={onChange}
          aria-label='search'
        />
        <img style= {{ width: '12px'}} src={icon} alt='search icon'/>
      </form>
      </div>
    </div>
  )
}

export default Search

import React, { useRef } from 'react'
import icon from '../assets/icons/search.svg'

const Search = () => {
  const text = useRef('')

  const onChange = e => {
    e.target.value()
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
        />
        <img style= {{ width: '12px'}} src={icon} alt='search icon'/>
      </form>
      </div>
    </div>
  )
}

export default Search

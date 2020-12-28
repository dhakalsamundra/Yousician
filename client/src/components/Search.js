import React, { useContext, useRef, useEffect } from 'react'
import SongContext from '../context/songs/context'

const ContactFilter = () => {
  const songContext = useContext(SongContext)
  const text = useRef('')

  const { searchSong, clearSearch, filtered } = songContext

  useEffect(() => {
    if (filtered === null) {
      text.current.value = ''
    }
  })

  const onChange = e => {
    if (text.current.value !== '') {
      searchSong(e.target.value)
    } else {
      clearSearch()
    }
  }

  return (
    <div className='container-1'>
      <div className='info'>
      <h1>NEW SONGS DELIVERED EVERY WEEKS</h1>
      <p>Here are the most recent additions to the Yousician App. Start playing today!</p>
      </div>
    <form>
      <input
        ref={text}
        className='search'
        type='text'
        placeholder='Search for song by artist or title'
        onChange={onChange}
      />
    </form>
    </div>
  )
}

export default ContactFilter

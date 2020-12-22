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
    <form>
      <input
        ref={text}
        className='search'
        type='text'
        placeholder='Search for song by artist or title'
        onChange={onChange}
      />
    </form>
  )
}

export default ContactFilter

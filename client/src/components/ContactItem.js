import React, { useContext } from 'react'
import SongContext from '../context/songs/context'

const ContactItem = ({ song }) => {
  const songContext = useContext(SongContext)
  const { deleteFromFav, setCurrent, clearCurrent } = songContext

  const { _id, title, artist, images, level, /*search*/ } = song

  const onDelete = () => {
    deleteFromFav(_id)
    clearCurrent()
  }

  return (
    <div className='card bg-light'>
      <div>
        <img src={images} alt="song image" /></div>
      <h3 className='text-primary text-center'>
        {title}{' '}
      </h3>
      <ul className='list text-center'>
        <li>
          {artist}
        </li>
        <li>
          {level}
        </li>
      </ul>
      <div className='btn btn-right'>
        <button
          className='btn btn-dark btn-sm'
          onClick={() => setCurrent(song)}
        >
          addToFav
        </button>
        <button className='btn btn-danger btn-sm' onClick={onDelete}>
        deleteFromFav
        </button>
      </div>
    </div>
  )
}

export default ContactItem

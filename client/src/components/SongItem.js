import React, { useContext } from 'react'
import SongContext from '../context/songs/context'

const ContactItem = ({ song }) => {
  const songContext = useContext(SongContext)
  const { deleteFromFav, AddToFav } = songContext

  const { _id, title, artist, images, level, /*search*/ } = song

  const onDeleteFromFav = () => {
    deleteFromFav(_id)
  }

  const onAddToFav = () => {
    AddToFav(_id)
  }

  return (
    <div className='card bg-light'>
      <div>
        <img src={images} alt="song" /></div>
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
      <div>
        <button
          className='btn btn-dark btn-sm'
          onClick={onAddToFav}
        >
          addToFav
        </button>
        <button className='btn btn-danger btn-sm' onClick={onDeleteFromFav}>
        deleteFromFav
        </button>
      </div>
    </div>
  )
}

export default ContactItem

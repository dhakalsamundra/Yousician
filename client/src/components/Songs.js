import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'

import SongItem from './SongItem'

const Songs = () => {
  // retriving the songs from the store
  const songs = useSelector((state) => state.song.filteredList)
  return (
    <Fragment>
      <div>
        {songs.map((song, id) => (
          <div key={id} timeout={500} className="item">
            <SongItem song={song} />
          </div>
        ))}
      </div>
    </Fragment>
  )
}

export default Songs

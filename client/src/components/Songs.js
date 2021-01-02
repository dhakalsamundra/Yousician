import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { fetchSongsThunk } from '../redux/actions/songAction'
import SongItem from './SongItem'
import Spinner from './Spinner'

const Songs = () => {
  const dispatch = useDispatch()
  const songs = useSelector((state) => state.song.filteredList)

  useEffect(() => {
    dispatch(fetchSongsThunk())
  }, [dispatch])

  // if(songs === null){
  //   return <Spinner />
  // }

  return (
    <div>
    <Fragment>
      {songs !== null ? (
        <TransitionGroup>
          {songs.map((song, id) => (
              <CSSTransition
                key={id}
                timeout={500}
                classNames='item'
              >
                <SongItem song={song} />
              </CSSTransition>
            ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
    </div>
  )
}

export default Songs
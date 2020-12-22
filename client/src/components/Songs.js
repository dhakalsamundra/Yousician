import React, { Fragment, useContext, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import SongItem from './SongItem'
import Spinner from './Spinner'
import SongContext from '../context/songs/context'

const Contacts = () => {
  const songContext = useContext(SongContext)

  const { songs, filtered, getSongs, loading } = songContext

  useEffect(() => {
    getSongs()
  // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {songs !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map(song => (
              <CSSTransition
                key={song._id}
                timeout={500}
                classNames='item'
              >
                <SongItem song={song} />
              </CSSTransition>
            ))
            : songs.map((song, id) => (
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
  )
}

export default Contacts

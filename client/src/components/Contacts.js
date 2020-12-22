import React, { Fragment, useContext, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import ContactItem from './ContactItem'
import Spinner from './Spinner'
import ContactContext from '../context/songs/context'

const Contacts = () => {
  const contactContext = useContext(ContactContext)

  const { songs, filtered, getSongs, loading } = contactContext

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
                <ContactItem song={song} />
              </CSSTransition>
            ))
            : songs.map((song, id) => (
              <CSSTransition
                key={id}
                timeout={500}
                classNames='item'
              >
                <ContactItem song={song} />
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

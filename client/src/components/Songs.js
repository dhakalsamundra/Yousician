import React, { Fragment, useState, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import SongItem from './SongItem'
import Spinner from './Spinner'

const Songs = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      return await fetch('http://localhost:3004/songs')
        .then((res) => res.json())
        .then((songs) => setData(songs))
    }
    fetchData()
  }, [])

  return (
    <div>
    <Fragment>
      {data !== null ? (
        <TransitionGroup>
          {data.map((song, id) => (
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
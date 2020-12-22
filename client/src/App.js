import React, { Fragment } from 'react'
import Navbar from './components/Navbar'
import SongState from './context/songs/action'
import Routes from './Routes'
import './App.css'

const App = () => {
  return (
    <SongState>
      <Fragment>
        <Navbar />
        <div className='container'>
          <Routes />
        </div>
      </Fragment>
    </SongState>
  )
}

export default App

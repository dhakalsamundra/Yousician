import React from 'react'
import SongState from './context/songs/action'
import Routes from './Routes'
import './App.css'

const App = () => {
  return (
    <SongState>
        <div className='container'>
          <Routes />
        </div>
    </SongState>
  )
}

export default App

import React, { useReducer } from 'react'
import axios from 'axios'
import songContext from './context'
import songReducer from './reducer'

import {
  GET_SONG,
  ADD_TO_FAV,
  DELETE_FROM_FAV,
  SEARCH_SONG,
  CLEAR_SEARCH,
  SONG_ERROR,
  SET_CURRENT,
  CLEAR_CURRENT
} from '../types'

const SongState = props => {
  const initialState = {
    songs: null,
    filtered: null,
    error: null,
    current: null
  }

  const [state, dispatch] = useReducer(songReducer, initialState)

  // Get Contacts
  const getSongs = async () => {
    try {
      const res = await axios.get('/songs')

      dispatch({
        type: GET_SONG,
        payload: res.data
      })
    } catch (err) {
      dispatch({
        type: SONG_ERROR,
        payload: err.response.msg
      })
    }
  }

  // Add Contact
  const addToFav = async contact => {
    try {
      const res = await axios.post('/favorites', contact)

      dispatch({
        type: ADD_TO_FAV,
        payload: res.data
      })
    } catch (err) {
      dispatch({
        type: SONG_ERROR,
        payload: err.response.msg
      })
    }
  }

  // Delete Contact
  const deleteFromFav = async id => {
    try {
      await axios.delete(`/favorites/${id}`)

      dispatch({
        type: DELETE_FROM_FAV,
        payload: id
      })
    } catch (err) {
      dispatch({
        type: SONG_ERROR,
        payload: err.response.msg
      })
    }
  }

  // Filter Contacts
  const searchSong = text => {
    dispatch({ type: SEARCH_SONG, payload: text })
  }

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_SEARCH })
  }

  // Set Current Contact
  const setCurrent = song => {
    dispatch({ type: SET_CURRENT, payload: song })
  }

  // Clear Current Contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT })
  }

  return (
    <songContext.Provider
      value={{
        songs: state.songs,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        getSongs,
        addToFav,
        deleteFromFav,
        searchSong,
        clearFilter,
        setCurrent,
        clearCurrent
      }}
    >
      {props.children}
    </songContext.Provider>
  )
}

export default SongState

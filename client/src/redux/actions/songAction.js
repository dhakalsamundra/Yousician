import {
  ADD_TO_FAV,
  FETCH_SONG,
  SEARCH_SONG,
  DELETE_FROM_FAV,
  FILTER_BY_LEVEL
} from '../../types'
import SongServices from  '../../services/song'

export function addToFav(songId) {
  return {
    type: ADD_TO_FAV,
    payload: {
      songId,
    },
  }
}

export function getAllSong(fetchedSong){
  return {
    type: FETCH_SONG,
    payload: {
      fetchedSong,
    },
  }
}

export function removeFromFav(id) {
  return {
    type: DELETE_FROM_FAV,
    payload: {
      id,
    },
  }
}

export function searchSong(searchTerm) {
  return {
    type: SEARCH_SONG,
    payload: {
      searchTerm,
    },
  }
}

export function filterSongByLevel(number) {
  return {
    type: FILTER_BY_LEVEL,
    payload: {
      number,
    },
  }
}

// An Example of Async action processed by redux-thunk middleware
export function fetchSongsThunk() {
  return async (dispatch) => {
    const resp = await fetch('http://localhost:3004/songs')
    const countriesData = await resp.json()
    dispatch(getAllSong(countriesData))
  }
}

export function addToFavThunk(song) {
  return async (dispatch) => {
    return SongServices.create(song, dispatch)
  }
}

export function deleteFromFavThunk(id) {
  return async (dispatch) => {
    return SongServices.deleteSong(id,dispatch)
  }
}

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

export function removeFromFav(favId) {
  return {
    type: DELETE_FROM_FAV,
    payload: {
      favId,
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

// Async action processed by redux-thunk middleware
export function fetchSongsThunk() {
  return async (dispatch) => {
    const resp = await fetch('http://localhost:3004/songs')
    const songsData = await resp.json()
    dispatch(getAllSong(songsData))
  }
}

// Async action for adding the song to the fav list
export function addToFavThunk(song) {
  return async (dispatch) => {
    return SongServices.create(song, dispatch)
  }
}

//Async action for deleting the song from fav list
export function deleteFromFavThunk(favId) {
  return async (dispatch) => {
    return SongServices.deleteSong(favId,dispatch)
  }
}

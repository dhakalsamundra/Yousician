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

export default (state, action) => {
  switch (action.type) {
  case GET_SONG:
    return {
      ...state,
      songs: action.payload,
      loading: false
    }
  case ADD_TO_FAV:
    return {
      ...state,
      songs: [action.payload, ...state.songs],
      loading: false
    }
  case DELETE_FROM_FAV:
    return {
      ...state,
      songs: state.songs.filter(
        song => song._id !== action.payload
      ),
      loading: false
    }
  case CLEAR_SEARCH:
    return {
      ...state,
      filtered: null,
    }
  case SET_CURRENT:
    return {
      ...state,
      current: action.payload
    }
  case CLEAR_CURRENT:
    return {
      ...state,
      current: null
    }
  case SEARCH_SONG:
    return {
      ...state,
      filtered: state.songs.filter(song => {
        // gi means global insensitive which help to search the upperCase and LowerCase both.
        const regex = new RegExp(`${action.payload}`, 'gi')
        return song.title.match(regex) || song.artist.match(regex)
      })
    }
  case SONG_ERROR:
    return {
      ...state,
      error: action.payload
    }
  default:
    return state
  }
}

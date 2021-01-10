import {
  FETCH_SONG,
  ADD_TO_FAV,
  SEARCH_SONG,
  DELETE_FROM_FAV,
  FILTER_BY_LEVEL,
} from '../../types'

export default function country(
  state = {
    list: [],
    filteredList: [],
    fav: [],
  },
  action
) {
  switch (action.type) {

  case FETCH_SONG: {
    const { fetchedSong } = action.payload
    return {
      ...state,
      //making a new array of song after adding and using spread.
      list: [...fetchedSong],
      filteredList: [...fetchedSong],
    }
  }
  case ADD_TO_FAV: {
    const { songId } = action.payload
    return {
      ...state,
      // make a new array of songs fav list  after adding and using spread
      fav: [...state.fav, songId],
    }
  }
  case DELETE_FROM_FAV: {
    const { favId } = action.payload
    const index = state.fav.findIndex((p) => p.id === favId)
    if (index >= 0) {
      //removing particular song in that index from fav list
      state.fav.splice(index, 1)
      return {
        ...state,
        // Show the fav list after the removal of the particular song
        fav: [...state.fav] }
    }
    return state
  }

  case SEARCH_SONG: {
    const { searchTerm } = action.payload
    // filtering the song of store with the user input value
    const searchedData = state.list.filter(
      (element) =>
        element.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          element.artist.toLowerCase().includes(searchTerm.toLowerCase())
    )
    return {
      ...state,
      // display the song in the store, a user have input
      filteredList: [...searchedData],
    }
  }

  case FILTER_BY_LEVEL: {
    const { number } = action.payload
    // Filtering the songs by  array of level property
    const levelData = state.list.filter(function (item) {
      return number.indexOf(item.level) !== -1
    })
    return {
      ...state,
      // display the song that matched to the array level
      filteredList: [...levelData],
    }
  }

  default:
    return state
  }
}

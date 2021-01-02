import {
  FETCH_SONG,
  ADD_TO_FAV,
  SEARCH_SONG,
  DELETE_FROM_FAV,
} from '../../types'

export default function country(
  state = {
    list: [],
    filteredList: [],
    fav: []
  },
  action
) {
  switch (action.type) {
  case FETCH_SONG: {
    const { fetchedSong } = action.payload
    return {
      ...state,
      //making a new array of country after adding and using spread.
      list: [...fetchedSong],
      filteredList: [...fetchedSong],
    }
  }
  case ADD_TO_FAV: {
    const { songId } = action.payload
    return {
      ...state,
      fav: [...state.fav, songId],
    }
  }

  case DELETE_FROM_FAV: {
    const { id } = action.payload
    const index = state.fav.findIndex((p) => p.id === id)
    if (index >= 0) {
      //removing the one country in that index
      state.fav.splice(index, 1)
      return { ...state, fav: [...state.fav] }
    }
    return state
  }

  case SEARCH_SONG: {
    const { searchTerm } = action.payload
    const searchedData = state.list.filter((element) =>
      element.title.toLowerCase().includes(searchTerm.toLowerCase()) || element.artist.toLowerCase().includes(searchTerm.toLowerCase())
    )
    return {
      ...state,
      filteredList: [...searchedData],
    }
  }

  default:
    return state
  }
}

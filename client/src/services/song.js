/* eslint-disable no-console */
import axios from 'axios'
import {
  addToFav, getAllSong, removeFromFav
} from '../redux/actions/songAction'

const baseUrl = 'http://localhost:3004'

const getAll = async(dispatch) => {
  try {
    // get the song data from the api end-point
    const response = await axios.get(baseUrl + '/song')
    dispatch(getAllSong(response.data))
  } catch (error) {
    console.log(error)
  }
}

const create = async (song, dispatch) => {
  try {
    // storing the song to the fav api end-point
    const response = await axios ({
      method: 'POST', url: baseUrl + '/favorites', data: song
    })
    dispatch(addToFav(response.data))
  } catch (error) {
    console.log(error)
  }
}

const deleteSong = async (favId, dispatch) => {
  //delete the song from the fav api end-point
  try {
    await axios ({
      method: 'DELETE', url: baseUrl + `/favorites/${favId}`, favId
    })
    dispatch(removeFromFav(favId))
  } catch (error) {
    console.log(error)
  }
}

export default { getAll, create, deleteSong }
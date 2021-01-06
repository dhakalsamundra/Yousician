/* eslint-disable no-console */
import axios from 'axios'
import {
  addToFav, getAllSong, removeFromFav
} from '../redux/actions/songAction'

const baseUrl = 'http://localhost:3004'

const getAll = async(dispatch) => {
  try {
    const response = await axios.get(baseUrl + '/song')
    dispatch(getAllSong(response.data))
  } catch (error) {
    console.log(error)
  }
}

const create = async (song, dispatch) => {
  try {
    const response = await axios ({
      method: 'POST', url: baseUrl + '/favorites', data: song
    })
    dispatch(addToFav(response.data))
  } catch (error) {
    console.log(error)
  }
}

const deleteSong = async (favId, dispatch) => {
  console.log('axios service', favId)
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
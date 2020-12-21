import axios from 'axios';

const baseURL = 'http://localhost:3004'

const getAll = async () => {
    const response = await axios.get(baseURL + '/songs')
    return response.data
}

const remove = async (removeFav) => {
    const response = await axios.delete(baseURL + '/favorites/:id')
    return response.data
}

const getFav = async () => {
    const response = await axios.get(baseURL + '/favorites')
    return response.data
}

const createFav = async (newFav) => {
    const response = await axios.post(baseURL + '/favorites', newFav)
    return response.data
}

const services = {
    getAll, remove, getFav, createFav 
}

export default services
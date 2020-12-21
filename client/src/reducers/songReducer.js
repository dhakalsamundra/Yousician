import songService from '../services'

const reducer = (state= [], action) => {
  switch (action.type) {
  case 'GET_ALL':
    return action.data
  default:
    return state
  }
}

export const getAll = () => {
  return async (dispatch) => {
    const getJackets = await songService.getAll()
    dispatch({
      type: 'GET_ALL',
      data: getJackets
    })
  }
}
export default reducer
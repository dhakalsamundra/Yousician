import { combineReducers } from 'redux'

import song from './songReducer'

const createRootReducer = () =>
  combineReducers({
    song,
  })

export default createRootReducer

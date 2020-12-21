import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import SearchReducer from './reducers/searchReducer';
import songReducer from './reducers/songReducer';

const reducer = combineReducers({
  data: songReducer,
  searchedData: SearchReducer
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;

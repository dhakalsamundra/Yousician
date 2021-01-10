import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import makeStore from './redux/store'
import App from './App'

const store = makeStore()
// wrap the parent component with redux
const Index = () => (
  <Provider store={store}>
    <App />
  </Provider>
)
ReactDOM.render(<Index />, document.getElementById('root'))


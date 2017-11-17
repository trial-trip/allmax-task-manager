// react
import React from 'react'
import { render } from 'react-dom'
import reset from './reset.css'

// compomemts
import App from './components/App'
import initialState from './initialState'

// redux 
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'

const store = createStore(reducers, initialState)

store.subscribe((x) => {
  localStorage.setItem('tm_data', JSON.stringify(store.getState()));
})

const rootElement = document.createElement("div")
document.body.appendChild(rootElement)

render(
    <Provider store={store}>
      <App/>
    </Provider>,
  rootElement
)

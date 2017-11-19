// react
import React from 'react'
import { render } from 'react-dom'

// redux 
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'

// router 
import { HashRouter as Router } from 'react-router-dom';

// compomemts
import App from './components/App'
import initialState from './util/initialState'

// reset styles
import reset from './util/reset.css'

const store = createStore(reducers, initialState)

store.subscribe((x) => {
  localStorage.setItem('tm_data', JSON.stringify(store.getState()));
})

const rootElement = document.createElement("div")
document.body.appendChild(rootElement)

render(
    <Provider store={store}>
      <Router>
        <App/>
      </Router>
    </Provider>,
  rootElement
)

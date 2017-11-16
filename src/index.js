// react
import React from 'react'
import { render } from 'react-dom'
import reset from './reset.css'

// compomemts
import App from './components/App'
import initialState from './initialState'

const rootElement = document.createElement("div")
document.body.appendChild(rootElement)

render(
  <App {...initialState} className={reset}/>,
  rootElement
)

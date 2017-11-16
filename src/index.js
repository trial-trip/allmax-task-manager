// react
import React from 'react'
import { render } from 'react-dom'

// compomemts
import App from './components/App'
import initialState from './initialState'

const rootElement = document.createElement("div")
document.body.appendChild(rootElement)

render(
    <App {...initialState}/>,
  rootElement
)

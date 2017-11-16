// react
import React from 'react'
import { render } from 'react-dom'

// compomemts
import App from './components/App'

const rootElement = document.createElement("div")
document.body.appendChild(rootElement)

render(
    <App/>,
  rootElement
)

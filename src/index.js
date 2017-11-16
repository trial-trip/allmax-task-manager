// react
import React from 'react'
import { render } from 'react-dom'

const rootElement = document.createElement("div")
document.body.appendChild(rootElement)

render(
    <p>hello world</p>,
  rootElement
)

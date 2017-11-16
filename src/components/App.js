import React from 'react'
import PropTypes from 'prop-types'

import Filters from './Filters'
import TaskList from './TaskList'

const App = (state) => (
  <div>
    <h1>Your tasks:</h1>
    <Filters/>
    <TaskList {...state}/>
    <div><p>Allmax Task Manager, Vladimir Logachev</p></div>
  </div>
)

App.propTypes = {}

export default App
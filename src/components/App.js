import React from 'react'

import Filters from './Filters'
import TaskList from './TaskList'

const App = () => (
  <div>
    <h1>Your tasks:</h1>
    <Filters/>
    <TaskList/>
    <div><p>Allmax Task Manager, Vladimir Logachev</p></div>
  </div>
)

App.propTypes = {}

export default App
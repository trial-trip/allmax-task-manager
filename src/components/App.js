import React from 'react'

import TaskList from './TaskList'

const App = () => (
  <div>
    <div>
      <h1>Your tasks:</h1>
      <ul>
        <li>All</li>
        <li>Important</li>
        <li>Very Important</li>
        <li>Search: _</li>
      </ul>
    </div>
    <TaskList/>
    <div><p>Allmax Task Manager, Vladimir Logachev</p></div>
  </div>
)

App.propTypes = {}

export default App
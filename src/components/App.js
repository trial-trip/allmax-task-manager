import React from 'react'

import Task from './Task'

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
    <div>
      <Task/>
      <Task />
      <Task />
      <Task />
    </div>
    <div><p>Allmax Task Manager, Vladimir Logachev</p></div>
  </div>
)

App.propTypes = {};

export default App
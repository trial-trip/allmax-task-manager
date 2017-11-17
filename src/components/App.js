import React from 'react'
import PropTypes from 'prop-types'
import styles from './App.css'

import Filters from './Filters'
import TaskList from './TaskList'

const App = (state) => (
  <div className={styles.app}>
    <h1 className={styles.title}>Tasks</h1>
    <Filters/>
    <TaskList {...state}/>
    <div className={styles.credits}>
      <span className={styles.appName}>Allmax Task Manager</span>
      <span className={styles.author}>by Vladimir Logachev</span>
    </div>
  </div>
)

App.propTypes = {}

export default App
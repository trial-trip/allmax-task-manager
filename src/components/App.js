import React from 'react'
import PropTypes from 'prop-types'
import styles from './App.css'

import Filters from './Filters'
import VisibleTaskList from '../containers/VisibleTaskList'

const App = () => (
  <div className={styles.app}>
    <h1 className={styles.title}>Tasks</h1>
    <Filters/>
    <VisibleTaskList/>
    <div className={styles.credits}>
      <span className={styles.appName}>Allmax Task Manager</span>
      <span className={styles.author}>by Vladimir Logachev</span>
    </div>
  </div>
)

export default App
import React from 'react'
import PropTypes from 'prop-types'
import styles from './App.css'

import FilterList from '../FilterList'
import VisibleTaskList from '../../containers/VisibleTaskList'
import EditorContainer from '../../containers/EditorContainer'

const App = () => (
  <div className={styles.app}>
    <h1 className={styles.title}>Tasks</h1>
    <EditorContainer />
    <FilterList/>
    <VisibleTaskList/>
    <div className={styles.credits}>
      <span className={styles.appName}>Allmax Task Manager</span>
      <span className={styles.author}>by Vladimir Logachev</span>
    </div>
  </div>
)

export default App
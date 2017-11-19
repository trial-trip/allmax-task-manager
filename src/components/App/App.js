import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom';
import styles from './App.css'

import VisibleTaskList from '../../containers/VisibleTaskList'
import EditorContainer from '../../containers/EditorContainer'

const App = () => (
  <div className={styles.app}>
    <h1 className={styles.title}>Tasks</h1>
    
    <Switch>
      <Route path="/add" component={EditorContainer} />
      <Route exact path="/edit" component={EditorContainer} />
      <Route path="/edit/:id" component={EditorContainer} />
      <Route exact path="/" component={VisibleTaskList} />
    </Switch>

    <div className={styles.credits}>
      <span className={styles.appName}>Allmax Task Manager</span>
      <span className={styles.author}>by Vladimir Logachev</span>
    </div>
  </div>
)

export default App
import React from 'react'
import PropTypes from 'prop-types'
import styles from './TaskList.css'

import Task from './Task'

const TaskList = ({tasks}) => (
  <div>
    {(tasks.length) ? tasks.map((x, i) => (<Task key={i} {...x} />)) : (<div className={styles.placeholder}><p>No tasks yet, let's write some!</p><p className={styles.smile}>\ (•◡•) /</p></div>)}
  </div>
)

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      priority: PropTypes.number.isRequired,
      deadline: PropTypes.string,
      completionDate: PropTypes.string,
    })
  ).isRequired
}

export default TaskList
import React from 'react'
import PropTypes from 'prop-types'

import styles from './GroupOfTasks.css'
import Task from '../Task'


const GroupOfTasks = ({ heading, tasks, onTaskClick, onTaskDelete, sortWith }) => (
  <div>
    {(tasks.length) ? (<p className={styles.title}>{heading}</p>) : ''}
    {tasks.sort(sortWith).map((task, i) => (
      <Task key={i} {...task}
        onToggleCompleted={() => onTaskClick(task.id)}
        onDeleteClick={() => onTaskDelete(task.id)}
      />
    ))}
  </div>
)

export default GroupOfTasks
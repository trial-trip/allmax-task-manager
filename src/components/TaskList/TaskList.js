import React from 'react'
import PropTypes from 'prop-types'
import styles from './TaskList.css'

import Task from '../Task'

const TaskList = ({ tasks, onTaskClick, onTaskDelete}) => {

  const placeholder = (
    <div className={styles.placeholder}>
      <p>No tasks yet, let's write some!</p>
      <p className={styles.smile}>\ (•◡•) /</p>
    </div>
  )

  const sortByPriority = (a, b) => {
    const diffPriority = b.priority - a.priority
    const diffId = a.id - b.id
    return diffPriority || diffId
  }

  const listOfTasks = tasks.sort(sortByPriority).map((task, i) => (
    <Task key={i} {...task} 
      onToggleCompleted={() => onTaskClick(task.id)}
      onDeleteClick={() => onTaskDelete(task.id)}
      />
  ))

  return (
  <div>
    { tasks.length ? listOfTasks : placeholder }
  </div>
)}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      priority: PropTypes.number.isRequired,
      deadline: PropTypes.any,
      completionDate: PropTypes.any,
    })
  ).isRequired,
  onTaskClick: PropTypes.func.isRequired,
  onTaskDelete: PropTypes.func.isRequired,
}

export default TaskList

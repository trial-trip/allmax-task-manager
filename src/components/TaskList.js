import React from 'react'
import PropTypes from 'prop-types'
import styles from './TaskList.css'

import Task from './Task'

const TaskList = ({ tasks, onTaskClick, onTaskDelete}) => {
  const placeholder = (
    <div className={styles.placeholder}>
      <p>No tasks yet, let's write some!</p>
      <p className={styles.smile}>\ (•◡•) /</p>
    </div>
  )
  const listOfTasks = tasks.map((task, i) => (
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
      deadline: PropTypes.string,
      completionDate: PropTypes.string,
    })
  ).isRequired,
  onTaskClick: PropTypes.func.isRequired,
  onTaskDelete: PropTypes.func.isRequired,
}

export default TaskList

import React from 'react'
import PropTypes from 'prop-types'
import styles from './Task.css'

const Task = ({ id, title, description, priority, deadline, completionDate}) => (
  <div className={`${styles.task} ${completionDate ? styles.completed : ''}`}>
    <div className={styles.meta}>

      <span className={styles.title}>{title}</span>

      {deadline && (<span className={styles.deadline}>Deadline: {deadline}</span>)}
      {completionDate && (<span className={styles.completionDate}>Completed: {completionDate}</span>)}
      <span className={styles.completionDate}>id: {id}</span>
      <span className={styles.completionDate}>priority: {priority}</span>

      {!completionDate && (<span className={styles.priority}>
        <a className={(priority === 0) ? styles.ordinary : ''}>Ordinary</a>
        <a className={(priority === 1) ? styles.important : ''}>Important</a>
        <a className={(priority === 2) ? styles.veryImportant : ''}>Very important</a>
      </span>)}

    </div>
    {description && (<p className={styles.description}>{description}</p>)}
  </div>
)

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  priority: PropTypes.number.isRequired,
  deadline: PropTypes.string,
  completionDate: PropTypes.string,
}

export default Task
import React from 'react'
import PropTypes from 'prop-types'
import styles from './Task.css'

const Task = ({ id, title, description, priority, deadline, completionDate}) => (
  <div className={`${styles.task} ${completionDate ? styles.completed : ''}`}>
    <div className={styles.meta}>
      <span className={styles.title}>{title} #{id} [{priority}]</span>
      <span className={styles.deadline}>Deadline: {deadline}</span>
      <span className={styles.completionDate}>Completed on:{completionDate}</span>
    </div>
    <p className={styles.description}>{description}</p>
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
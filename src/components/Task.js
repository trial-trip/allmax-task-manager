import React from 'react'
import PropTypes from 'prop-types'
import styles from './Task.css'
import formattedDate from './../util/formattedDate'

const Task = ({ id, title, description, priority, deadline, completionDate}) => {
  const completed = (completionDate) ? true : false
  const failed = (deadline) ? (completed ? (Date.parse(completionDate) > Date.parse(deadline)) : (Date.now() > Date.parse(deadline))) : false

  const completedStyle = completionDate ? styles.completed : ''
  const failedStyle = (!completed && failed) ? styles.failed : ''
  const taskStyle = `${styles.task} ${completedStyle} ${failedStyle}`

  const failedLabel = failed ? <span className={styles.failedLabel}>Deadline failed</span> : ''

  return(
    <div className={taskStyle}>

      <div className={styles.title}>
        <span>{title}</span>
      </div>

      <div className={styles.meta}>
        <span className={styles.priority}>
          {failedLabel}
          <a className={(!completionDate && priority === 2) ? styles.veryImportant : ''}>Very important</a>
          <a className={(!completionDate && priority === 1) ? styles.important : ''}>Important</a>
          <a className={(!completionDate && priority === 0) ? styles.ordinary : ''}>Ordinary</a>
        </span>
      </div>

      <div className={styles.description}>
        {description && description.split('\n').map((line, i) => (<p key={i}>{line}</p>))}
      </div>

      <div className={styles.meta}>
        {deadline && (<span className={styles.deadline}>Deadline: {formattedDate(deadline)} </span>)}
        {completed && (<span className={styles.completionDate}>Completed: {formattedDate(completionDate)}</span>)}
        <span className={styles.completionDate}>id:{id}</span>
      </div>

    </div>
  )
}

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  priority: PropTypes.number.isRequired,
  deadline: PropTypes.string,
  completionDate: PropTypes.string,
}

export default Task
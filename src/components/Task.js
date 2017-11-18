import React from 'react'
import PropTypes from 'prop-types'
import styles from './Task.css'
import formattedDate from './../util/formattedDate'

const Task = ({ onToggleCompleted, onDeleteClick, id, title, description, priority, deadline, completionDate}) => {
  const completed = (completionDate) ? true : false
  const now = (new Date()).getTime()
  const failed = (deadline) ? (completed ? (completionDate > deadline) : (now > deadline)) : false

  const completionStyle = completionDate ? styles.completed : ''
  let priorityStyle
  if (!completed && priority === 1) { priorityStyle = styles.important}
  if (!completed && priority === 2) { priorityStyle = styles.veryImportant}
  if (!completed && failed) {priorityStyle = styles.failed}
  
  const taskStyle = `${styles.task} ${completionStyle} ${priorityStyle}`

  const failedLabel = failed ? <span className={styles.failedLabel}>Violation of the deadline</span> : ''

  return(
    <div className={taskStyle}>
      <div className={styles.title} >
        <span>{title} - {id}</span>
        {failedLabel}
      </div>

      <div className={styles.description}>
        {description && description.split('\n').map((line, i) => (<p key={i}>{line}</p>))}
      </div>

      <div className={styles.meta}>
        {deadline && (<span className={styles.deadline}>Deadline: {formattedDate(deadline)}</span>)}
        {completed && (<span className={styles.completionDate}>Completed: {formattedDate(completionDate)}</span>)}
      </div>

      <div className={styles.meta}>
        <span className={styles.buttons}>
          <a className={styles.ordinary} onClick={onToggleCompleted}>{completed ? 'Work some more' : 'Done'}</a>
          {!completed ? (<a className={styles.ordinary}>Edit</a>) : ''}
          <a className={styles.ordinary} onClick={onDeleteClick}>Delete</a>
        </span>
      </div> 

    </div>
  )
}

Task.propTypes = {
  onToggleCompleted: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  priority: PropTypes.number.isRequired,
  deadline: PropTypes.any,
  completionDate: PropTypes.any,
}

export default Task
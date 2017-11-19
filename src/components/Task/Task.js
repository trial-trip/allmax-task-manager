import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

import styles from './Task.css'
import btn from '../../util/btn.css'
import format_dd_mm_yyyy from '../../util/format_dd_mm_yyyy'

const Task = ({ onToggleCompleted, onDeleteClick, id, title, description, priority, deadline, completionDate}) => {
  const completed = (completionDate !== 'DATE_UNSET') ? true : false
  const now = (new Date()).getTime()
  const failed = (deadline !== 'DATE_UNSET') ? (completed ? (completionDate > deadline) : (now > deadline)) : false

  const completionStyle = completed ? styles.completed : ''
  let priorityStyle
  if (!completed && priority === 1) { priorityStyle = styles.important}
  if (!completed && priority === 2) { priorityStyle = styles.veryImportant}
  if (!completed && failed) {priorityStyle = styles.failed}
  
  const taskStyle = `${styles.task} ${completionStyle} ${priorityStyle}`

  const failedLabel = failed ? <span className={styles.failedLabel}>Violation of the deadline</span> : ''

  return(
    <div className={taskStyle}>
      <div className={styles.title} >
        <span>{title}</span>
        {failedLabel}
      </div>

      <div className={styles.description}>
        {description && description.split('\n').map((line, i) => (<p key={i}>{line}</p>))}
      </div>

      <div className={styles.meta}>
        {(deadline !== 'DATE_UNSET') && (<span className={styles.deadline}>Deadline: {format_dd_mm_yyyy(deadline)}</span>)}
        {completed && (<span className={styles.completionDate}>Completed: {format_dd_mm_yyyy(completionDate)}</span>)}
      </div>
      
      <div>
        <a className={btn.btn} onClick={onToggleCompleted}>{completed ? 'Work some more' : 'Done'}</a>
        {!completed ? (<Link className={btn.btn}to={`/edit/${id}`}>Edit</Link>) : ''}
        <a className={btn.btn}  onClick={onDeleteClick}>Delete</a>
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
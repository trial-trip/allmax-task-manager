import React from 'react'
import PropTypes from 'prop-types'

const Task = ({ id, title, description, priority, deadline, completionDate}) => (
  <div className="task task-not-completed">
    <h3 className="task-title">{title} (task #{id})</h3>
    <p className="task-description">{description}</p>
    <p className="task-priority">{priority}</p>
    <p className="task-deadline">{deadline}</p>
    <p className="task-completion-date">{completionDate}</p>
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
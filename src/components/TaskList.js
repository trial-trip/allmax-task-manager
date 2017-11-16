import React from 'react'
import PropTypes from 'prop-types'

import Task from './Task'

const TaskList = ({tasks}) => (
  <div>
    {tasks.map((x, i) => (<Task key={i} {...x} />))}
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
    }).isRequired
  ).isRequired
}

export default TaskList
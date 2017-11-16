import React from 'react'

const Task = () => (
  <div className="task task-not-completed">
    <h3 className="task-title">sample task</h3>
    <p className="task-description">do something</p>
    <p className="task-priority">1</p>
    <p className="task-deadline">14.11.2017</p>
    <p className="task-completion-date">12.11.2017</p>
  </div>
)

Task.propTypes = {};

export default Task
import React from 'react'
import { withRouter } from 'react-router-dom'

class TaskEditor extends React.Component {
  constructor(props) {
    super(props)
    const task = props.tasks.find(t => t.id === +props.match.params.id)

    if (task) {
      this.state = {
        id: task.id,
        title: task.title,
        description: task.description,
        priority: task.priority,
        deadline: task.deadline,
      }
    } else {
      this.state = {
        id: props.newTaskId,
        title: '',
        description: '',
        priority: 0,
        deadline: 'DATE_UNSET',
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const target = event.target
    this.setState({
      status: '',
      [target.name]: target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.onSubmitClick(this.state)
    this.props.history.push('/')
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <div>
          <input 
            type="text" 
            name="title" 
            placeholder="title" 
            value={this.state.title} 
            onChange={this.handleChange} />
        </div>
        <div>
          <textarea 
            name="description" 
            placeholder="description" 
            value={this.state.description} 
            onChange={this.handleChange} />
        </div>
        <div>
          <input 
            type="text" 
            name="priority" 
            placeholder="priority" 
            value={this.state.priority} 
            onChange={this.handleChange} />
        </div>
        <div>
          <input 
            type="date" 
            name="deadline" 
            placeholder="deadline" 
            value={this.state.deadline} 
            onChange={this.handleChange} />
        </div>
        <div>
          <input 
            type="submit" 
            value="Save" />
        </div>
      </form>
    )
  }
}

export default withRouter(TaskEditor)
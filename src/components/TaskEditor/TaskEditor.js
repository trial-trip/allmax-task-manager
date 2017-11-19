import React from 'react'
import DatePicker from 'react-datepicker'

class TaskEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.id || props.newTaskId,
      title: props.title || '',
      description: props.description || '',
      priority: props.priority || 0,
      deadline: props.deadline || 'DATE_UNSET',
    }
    console.log('props:')
    console.log(props)
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
    console.log('state:')
    console.log(this.state)
    this.props.onSubmitClick(this.state)
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

export default TaskEditor
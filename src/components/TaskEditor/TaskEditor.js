import React from 'react'
import { withRouter } from 'react-router-dom'
import styles from './TaskEditor.css'
import btn from '../../util/btn.css'
import format_yyyy_mm_dd from '../../util/format_yyyy_mm_dd'

class TaskEditor extends React.Component {
  constructor(props) {
    super(props)

    const task = props.tasks.find(t => t.id === +props.match.params.id)

    if (task) {
      this.state = {
        type: 'EDIT_TASK',
        id: task.id,
        title: task.title,
        description: task.description,
        priority: `${task.priority}`,
        deadline: format_yyyy_mm_dd(+task.deadline) || undefined,
      }
    } else {
      this.state = {
        type: 'ADD_TASK',
        id: props.newTaskId,
        title: '',
        description: '',
        priority: "0",
        deadline: undefined,
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const target = event.target
    this.setState({
      [target.name]: target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.onSubmitClick({
      ...this.state,
      deadline: Date.parse(this.state.deadline)
    })
    this.props.history.push('/')
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <div className={styles.block}>
          <input 
            required
            type="text" 
            name="title" 
            placeholder="Task title*" 
            value={this.state.title} 
            className={styles.in}
            onChange={this.handleChange} />
        </div>
        <div className={styles.block}>
          <textarea 
            name="description" 
            placeholder="Detailed description" 
            value={this.state.description} 
            className={styles.in}
            onChange={this.handleChange} />
        </div>
        <div className={styles.block}>
          <label >
            <input type="checkbox" name="priority" value="0" checked={this.state.priority === "0"} onChange={this.handleChange} />
            <span>Ordinary</span>
          </label>
          <label>
            <input type="checkbox" name="priority" value="1" checked={this.state.priority === "1"} onChange={this.handleChange} />
            <span className={styles.important}>Important</span>
          </label>
          <label>
            <input type="checkbox" name="priority" value="2" checked={this.state.priority === "2"} onChange={this.handleChange} />
            <span className={styles.veryImportant}>Very important</span>
          </label>
        </div>
        <div className={styles.block}>
          <input 
            type="date" 
            name="deadline" 
            placeholder="deadline" 
            value={this.state.deadline} 
            className={styles.in}
            onChange={this.handleChange} />
        </div>
        <div className={styles.block}>
          <input 
            type="submit" 
            className={btn.btn}
            value="Save" />
        </div>
      </form>
    )
  }
}

export default withRouter(TaskEditor)
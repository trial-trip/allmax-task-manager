import React from 'react'
import { connect } from 'react-redux'
import { addTask } from '../actions'
import TaskEditor from '../components/TaskEditor'

const mapStateToProps = state => {
  return {
    tasks: state.tasks,
    newTaskId: state.newTaskId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmitClick: answer => {
      dispatch(addTask(answer))
    }
  }
}

const EditorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskEditor)

export default EditorContainer

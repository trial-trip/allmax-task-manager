import { connect } from 'react-redux';
import { addTask } from '../actions';
import { TaskEditor } from '../components/TaskEditor/TaskEditor';

const mapStateToProps = state => ({
  tasks: state.tasks,
  newTaskId: state.newTaskId
});

const mapDispatchToProps = dispatch => ({
  onSubmitClick: answer => {
    dispatch(addTask(answer));
  }
});

export const EditorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskEditor);

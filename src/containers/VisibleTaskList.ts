import { connect } from 'react-redux';
import { toggleTask, deleteTask } from '../actions';
import { TaskList } from '../components/TaskList/TaskList';

const getVisibleTasks = (tasks, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return tasks;
    case 'SHOW_ORDINARY':
      return tasks.filter(t => t.priority === 0);
    case 'SHOW_IMPORTANT':
      return tasks.filter(t => t.priority === 1);
    case 'SHOW_VERY_IMPORTANT':
      return tasks.filter(t => t.priority === 2);
  }
};

const mapStateToProps = state => {
  return {
    tasks: getVisibleTasks(state.tasks, state.priorityFilter)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTaskClick: id => {
      dispatch(toggleTask(id));
    },
    onTaskDelete: id => {
      dispatch(deleteTask(id));
    }
  };
};

export const VisibleTaskList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);

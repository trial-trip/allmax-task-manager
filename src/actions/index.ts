import { TaskPayload } from '../reducers/tasks';

export const toggleTask = id => ({
  type: 'TOGGLE_TASK',
  id,
  completionDate: new Date().getTime()
});

export const deleteTask = id => ({
  type: 'DELETE_TASK',
  id
});

export const setPriorityFilter = filter => ({
  type: 'SET_PRIORITY_FILTER',
  filter
});

export const addTask = ({
  type,
  id,
  title,
  description,
  priority,
  deadline
}): TaskPayload & { type: string } => ({
  type: type || 'ADD_TASK',
  id: id,
  title: title,
  description: description,
  priority: +priority || 0,
  deadline: deadline || 'DATE_UNSET',
  completionDate: 'DATE_UNSET'
});

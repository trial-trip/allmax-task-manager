export const toggleTask = id => {
  const now = (new Date()).getTime()
  return {
    type: 'TOGGLE_TASK',
    id,
    completionDate: now
  }
}

export const deleteTask = id => {

  return {
    type: 'DELETE_TASK',
    id
  }
}

export const setPriorityFilter = filter => {
  return {
    type: 'SET_PRIORITY_FILTER',
    filter
  }
}

export const addTask = ({ type, id, title, description, priority, deadline}) => {
  return {
    type: type || 'ADD_TASK',
    id: id,
    title: title,
    description: description,
    priority: +priority || 0,
    deadline: deadline || 'DATE_UNSET',
    completionDate: 'DATE_UNSET',
  }
}

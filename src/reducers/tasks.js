const tasks = (state = [], action) => {
  console.log(action.type, action)
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          description: action.description,
          deadline: action.deadline,
          completionDate: 'DATE_UNSET',
          priority: action.priority,
        }
      ]
    case 'EDIT_TASK':
      return state.map(task =>
        (task.id === action.id)
          ? {
            ...task,
            ...action
          }
          : task
      )
    case 'TOGGLE_TASK':
      return state.map(task =>
        (task.id === action.id)
          ? { 
            ...task, 
            completionDate: (task.completionDate !== 'DATE_UNSET') ? 'DATE_UNSET' : action.completionDate
          }
          : task
      )
    case 'DELETE_TASK':
      return state.filter(task =>(task.id !== action.id))
    default:
      return state
  }
}

export default tasks

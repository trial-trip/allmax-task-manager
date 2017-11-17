const tasks = (state = [], action) => {
  console.log(state, action.type, action.id)
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          description: action.description,
          deadline: action.deadline,
          completionDate: '',
          priority: 0,
        }
      ]
    case 'TOGGLE_TASK':
      return state.map(task =>
        (task.id === action.id)
          ? { 
            ...task, 
            completionDate: (task.completionDate) ? '' : action.completionDate
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
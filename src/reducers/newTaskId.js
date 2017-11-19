const newTaskId = (state = 0, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return (state + 1)
    default:
      return state
  }
}

export default newTaskId
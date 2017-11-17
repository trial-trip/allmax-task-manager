const priorityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_PRIORITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default priorityFilter
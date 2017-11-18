export const toggleTask = id => {
  const now = (new Date()).getTime()
  return {
    type: 'TOGGLE_TASK',
    id,
    completionDate: now
  }
}

export const deleteTask = id => {
  console.log('DELETE_TASK', id)
  return {
    type: 'DELETE_TASK',
    id
  }
}


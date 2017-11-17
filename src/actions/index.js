export const toggleTask = id => {
  const d = new Date()
  return {
    type: 'TOGGLE_TASK',
    id,
    completionDate: d.toISOString()
  }
}

export const deleteTask = id => {
  console.log('DELETE_TASK', id)
  return {
    type: 'DELETE_TASK',
    id
  }
}


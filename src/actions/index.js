export const toggleTask = id => {
  const d = new Date()
  return {
    type: 'TOGGLE_TASK',
    id,
    completionDate: d.toISOString()
  }
}
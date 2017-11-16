let stateOption

try {
  const str = localStorage.getItem('tm_data');
  stateOption = JSON.parse(str);
} catch (err) {
  console.error(err);
}

const randomBool = () => Math.random() < .5
const randomPriority = () => Math.floor(Math.random() * 3)

const stateDemo = {
  priorityFilter: 'SHOW_ALL',
  tasks: Array(15)
    .fill({
      id: 0,
      title: 'Run 10 km',
      description: 'That will make you glad...\n\nMaybe.',
      priority: 1,
      deadline: '14.11.2017',
      completionDate: '12.11.2017'
    })
    .map((item, i) => ({ ...item, id: i }))
    .map((item, i) => ((randomBool()) ? { ...item, completionDate: '' } : item))
    .map((item, i) => ((randomBool()) ? { ...item, deadline: '' } : item))
    .map((item, i) => ({ ...item, priority: randomPriority() }))
    
}

const initialState = stateOption || stateDemo

export default initialState

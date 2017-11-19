// Try to read state from local storage
let stateOption
try {
  const str = localStorage.getItem('tm_data');
  stateOption = JSON.parse(str);
} catch (err) {
  console.error(err);
}

// Alternative solution to have state is to populate state with demo data.
const randomBool = () => Math.random() < .5
const randomPriority = () => Math.floor(Math.random() * 3)

const yearDuration = (365 * 24 * 3600 * 1000)
const startingDate = Date.parse('2017.09.01')
const randomDate = () => Math.floor(Math.random() * yearDuration) + startingDate  

const stateDemoTemplate = {
  priorityFilter: 'SHOW_ALL',
  tasks: Array(17)
    .fill({
      id: 0,
      title: 'Run 10 km',
      description: 'That will make you glad...\n\nMaybe.',
      priority: 1,
      deadline: 'DATE_UNSET',
      completionDate: 'DATE_UNSET'
    })
    .map((item, i) => ({ ...item, id: i }))
    .map((item, i) => ({ ...item, completionDate: randomBool() ? randomDate() : 'DATE_UNSET' }))
    .map((item, i) => ({ ...item, deadline: randomBool() ? randomDate() : 'DATE_UNSET' }))
    .map((item, i) => ((randomBool()) ? { ...item, description: '' } : item))
    .map((item, i) => ({ ...item, priority: randomPriority() }))
}
const stateDemo = { ...stateDemoTemplate, newTaskId: stateDemoTemplate.tasks.length }

// So, state will be populated with demo 
// if there were no exceptions during reading Local Storage
const initialState = stateOption || stateDemo

export default initialState

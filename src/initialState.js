let stateOption

try {
  const str = localStorage.getItem('tm_data');
  stateOption = JSON.parse(str);
} catch (err) {
  console.error(err);
}

const stateDemo = {
  priorityFilter: 'SHOW_ALL',
  tasks: Array(15)
    .fill({
      id: 0,
      title: 'Run 10 km',
      description: 'That will make you glad\n\n...\nMaybe))',
      priority: 1,
      deadline: '14.11.2017',
      completionDate: '12.11.2017'
    })
    .map((item, i) => ({ ...item, id: i }))
}

const initialState = stateOption || stateDemo

export default initialState

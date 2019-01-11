import { DateTime, Duration } from 'luxon';

// Try to read state from local storage
let maybeState;
try {
  const str = localStorage.getItem('tm_data') || '';
  maybeState = JSON.parse(str);
} catch (e) {}

// Alternative solution to have state is to populate state with demo data.
const randomBool = () => Math.random() < 0.5;
const randomPriority = () => Math.floor(Math.random() * 3);

const startingDate = DateTime.local().minus(Duration.fromObject({ years: 1 }));
const randomDate = () =>
  startingDate.plus(Duration.fromObject({ days: Math.floor(Math.random() * 365) })).toMillis();

const stateDemoTemplate = {
  priorityFilter: 'SHOW_ALL',
  tasks: Array.from({ length: 17 }, (_, id) => ({
    id,
    title: 'Do some work',
    description: randomBool() ? 'That will make you glad...\n\nMaybe.' : '',
    priority: randomPriority(),
    deadline: randomBool() ? randomDate() : 'DATE_UNSET',
    completionDate: randomBool() ? randomDate() : 'DATE_UNSET'
  }))
};
const stateDemo = { ...stateDemoTemplate, newTaskId: stateDemoTemplate.tasks.length };

// So, state will be populated with demo
// if there were no exceptions during reading Local Storage
export const initialState = maybeState || stateDemo;

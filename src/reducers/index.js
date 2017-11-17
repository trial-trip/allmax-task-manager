import { combineReducers } from 'redux'
import tasks from './tasks'
import priorityFilter from './priorityFilter'

const reducers = combineReducers({
  tasks,
  priorityFilter
})

export default reducers

import React from 'react'
import PropTypes from 'prop-types'
import styles from './TaskList.css'

import FilterList from '../FilterList'

import GroupOfTasks from '../GroupOfTasks'


const TaskList = ({ tasks, onTaskClick, onTaskDelete}) => {

  const placeholder = (
    <div className={styles.placeholder}>
      <p>No tasks here, let's write some!</p>
      <p className={styles.smile}>\ (•◡•) /</p>
    </div>
  )

  const now = (new Date()).getTime()

  const sortByPriority = (a, b) => {
    const diffPriority = b.priority - a.priority
    const diffId = a.id - b.id
    return diffPriority || diffId
  }

  const sortByCompletionDate = (a, b) => {
    const diffPriority = b.completionDate - a.completionDate
    const diffId = a.id - b.id
    return diffPriority || diffId
  }

  const isTaskComplete = (t) => {
    const complete = (t.completionDate !== 'DATE_UNSET') ? true : false
    return complete
  }

  const hasDeadline = (t) => (t.deadline !== 'DATE_UNSET') 
  
  const isTaskFailed = (t) => {
    const complete = isTaskComplete(t)
    const isFailed = hasDeadline(t)
                    ? (complete
                      ? (t.completionDate > t.deadline) 
                      : (now > t.deadline)) 
                    : false
    return isFailed
  }

  const isTaskForToday = (t) => (now >= t.deadline)

  const groupTasksByDeadline = (acc, t) => {
    if (t.deadline in acc) {
      return {...acc, [t.deadline]: [...acc[t.deadline], t]}
    } else return { ...acc, [t.deadline]: [t] }
  }

  const completeTasks = tasks.filter(isTaskComplete)

  const incompleteTasks = tasks.filter(t => (!isTaskComplete(t)))
  const failedIncompleteTasks = incompleteTasks.filter(isTaskFailed)

  const nonFailedIncompleteTasks = incompleteTasks.filter(t => (!isTaskFailed(t)))

  const openTasksWithDeadline = nonFailedIncompleteTasks.filter(hasDeadline)
  const openTasksWithoutDeadline = nonFailedIncompleteTasks.filter(t => (!hasDeadline(t)))

  const tasksForToday = openTasksWithDeadline.filter(isTaskForToday)
  const tasksForOtherDays = openTasksWithDeadline.filter(t => (!isTaskForToday(t)))

  const set = tasksForOtherDays.reduce(groupTasksByDeadline, {})
  console.log(set)


  return (
  <div>
    <FilterList/>
    {(!tasks.length) ? placeholder : ''}
    <GroupOfTasks 
      heading="Tasks with failed deadline"
      tasks={failedIncompleteTasks} 
      onTaskClick={onTaskClick} 
      onTaskDelete={onTaskDelete}
      sortWith={sortByPriority}/>
    <GroupOfTasks
      heading="Today"
      tasks={tasksForToday}
      onTaskClick={onTaskClick}
      onTaskDelete={onTaskDelete}
      sortWith={sortByPriority} />
    <GroupOfTasks
      heading="Tasks without deadline"
      tasks={openTasksWithoutDeadline}
      onTaskClick={onTaskClick}
      onTaskDelete={onTaskDelete}
      sortWith={sortByPriority} />
    <GroupOfTasks
      heading="Other days"
        tasks={tasksForOtherDays}
      onTaskClick={onTaskClick}
      onTaskDelete={onTaskDelete}
      sortWith={sortByPriority} />
    <GroupOfTasks
      heading="Completed tasks"
      tasks={completeTasks}
      onTaskClick={onTaskClick}
      onTaskDelete={onTaskDelete}
      sortWith={sortByCompletionDate} />
  </div>
)}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      priority: PropTypes.number.isRequired,
      deadline: PropTypes.any,
      completionDate: PropTypes.any,
    })
  ).isRequired,
  onTaskClick: PropTypes.func.isRequired,
  onTaskDelete: PropTypes.func.isRequired,
}

export default TaskList

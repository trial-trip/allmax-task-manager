import * as React from 'react';
import { Task } from '../Task/Task';
import './GroupOfTasks.css';

export const GroupOfTasks = ({ heading = '', tasks, onTaskClick, onTaskDelete, sortWith }) => (
  <div>
    {tasks.length ? <p className="group-title">{heading}</p> : ''}
    {tasks.sort(sortWith).map((task, i) => (
      <Task
        key={i}
        {...task}
        onToggleCompleted={() => onTaskClick(task.id)}
        onDeleteClick={() => onTaskDelete(task.id)}
      />
    ))}
  </div>
);

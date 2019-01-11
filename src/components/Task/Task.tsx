import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Task.css';
import '../../util/btn.css';
import { format_dd_mm_yyyy } from '../../util/format_dd_mm_yyyy';

export const Task = ({
  onToggleCompleted,
  onDeleteClick,
  id,
  title,
  description,
  priority,
  deadline,
  completionDate
}) => {
  const completed = completionDate !== 'DATE_UNSET' ? true : false;
  const now = new Date().getTime();
  const failed = deadline !== 'DATE_UNSET' ? (completed ? completionDate > deadline : now > deadline) : false;

  const completionStyle = completed ? 'completed' : '';
  let priorityStyle;
  if (!completed && priority === 1) {
    priorityStyle = 'important';
  }
  if (!completed && priority === 2) {
    priorityStyle = 'very-important';
  }
  if (!completed && failed) {
    priorityStyle = 'failed';
  }

  const taskStyle = `task ${completionStyle} ${priorityStyle}`;

  const failedLabel = failed ? <span className="failed-label">Violation of the deadline</span> : '';

  return (
    <div className={taskStyle}>
      <div className="task-title">
        <span>{title}</span>
        {failedLabel}
      </div>

      <div className="description">
        {description && description.split('\n').map((line, i) => <p key={i}>{line}</p>)}
      </div>

      <div className="meta">
        {deadline !== 'DATE_UNSET' && (
          <span className="deadline">Deadline: {format_dd_mm_yyyy(deadline)}</span>
        )}
        {completed && <span className="completion-date">Completed: {format_dd_mm_yyyy(completionDate)}</span>}
      </div>

      <div>
        <a className="btn" onClick={onToggleCompleted}>
          {completed ? 'Work some more' : 'Done'}
        </a>
        {!completed ? (
          <Link className="btn" to={`/edit/${id}`}>
            Edit
          </Link>
        ) : (
          ''
        )}
        <a className="btn" onClick={onDeleteClick}>
          Delete
        </a>
      </div>
    </div>
  );
};

Task.propTypes = {
  onToggleCompleted: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  priority: PropTypes.number.isRequired,
  deadline: PropTypes.any,
  completionDate: PropTypes.any
};

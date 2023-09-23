import React from 'react';

function TaskList({ tasks, onDelete, onComplete }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Task List</h5>
        <ul className="list-group">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`list-group-item ${task.completed ? 'completed' : ''}`}
            >
              <div>
                <span
                  className={`task-text ${task.completed ? 'completed-text' : ''}`}
                  onClick={() => onComplete(index)}
                  style={{ cursor: 'pointer' }}
                >
                  {task.text}
                </span>
                <button
                  className="btn btn-success btn-sm ml-2"
                  onClick={() => onComplete(index)}
                >
                  Complete
                </button>
              </div>
              <div className="btn-group float-right">
                <button
                  className="btn btn-danger btn-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete(index);
                  }}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskList;
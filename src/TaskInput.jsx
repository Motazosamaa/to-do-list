import React, { useState } from 'react';

function TaskInput({ addTask }) {
  const [task, setTask] = useState('');

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = () => {
    if (task.trim() !== '') {
      addTask(task);
      setTask('');
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">To-Do List</h5>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Add a task..."
            value={task}
            onChange={handleInputChange}
          />
          
          <div className="input-group-append">
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleSubmit}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskInput;

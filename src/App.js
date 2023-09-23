import React, { useState } from "react";
import "./App.css";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    const newTask = { text: taskText, completed: false };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const completeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <TaskInput addTask={addTask} />
        </div>
        <div className="col-md-6">
          <TaskList
            tasks={tasks}
            onDelete={deleteTask}
            onComplete={completeTask}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

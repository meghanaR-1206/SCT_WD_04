import React, { useState } from 'react';
import './Academics.css';

const Academics = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleAddTask = () => {
    if (taskInput && dueDate) {
      setTasks([...tasks, { text: taskInput, date: dueDate }]);
      setTaskInput('');
      setDueDate('');
    }
  };

  const handleCompleteTask = (index) => {
    const task = tasks[index];
    setCompletedTasks([...completedTasks, task]);
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleDeleteTask = (index) => {
    setCompletedTasks(completedTasks.filter((_, i) => i !== index));
  };

  return (
    <div className="academics-container">
      <h2>Academics Tasks</h2>
      <div className="task-input">
        <input
          type="text"
          placeholder="Task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div className="task-boxes">
        <div className="to-do-box">
          <h3>To Do</h3>
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                {task.text} (Due: {task.date})
                <button onClick={() => handleCompleteTask(index)}>Done</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="completed-box">
          <h3>Completed</h3>
          <ul>
            {completedTasks.map((task, index) => (
              <li key={index}>
                {task.text} (Due: {task.date})
                <button onClick={() => handleDeleteTask(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Academics;

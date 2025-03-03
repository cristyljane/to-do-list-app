import React from 'react';

const TaskItem = ({ task, toggleTaskCompletion, deleteTask }) => {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span>{task.text}</span>
      <div>
        <button
          onClick={() => toggleTaskCompletion(task.id)}
          className="complete-button"
        >
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="delete-button"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTrash } from "@fortawesome/free-solid-svg-icons";

const TodoList = ({ tasks, toggleTaskCompletion, deleteTask }) => {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`task-item ${task.completed ? "completed" : "pending"}`}
        >
          <span className={`task-text ${task.completed ? "completed-text" : ""}`}>
            {task.text}
          </span>
          
          <div className="task-actions">
            <button
              onClick={() => toggleTaskCompletion(task.id)}
              className={`icon-button complete ${task.completed ? "done" : ""}`}
            >
              <FontAwesomeIcon icon={faCheckCircle} />
            </button>

            <button onClick={() => deleteTask(task.id)} className="icon-button delete">
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

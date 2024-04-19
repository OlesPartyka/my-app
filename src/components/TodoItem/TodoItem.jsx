import React from "react";
import './TodoItem.css';

export function TodoItem({ task, toggleComplete, deleteTodo, editTodo}) {
  return (
    <li className="TodoItem d-flex justify-content-between">
      <p
        className={task.completed ? 'TodoItem__task text-decoration-line-through' 
        : 'TodoItem__task'}
        onClick={() => {toggleComplete(task.id)}}
      >
        {task.task}
      </p>

      <div className="d-flex justify-content-center align-items-center">
        <button 
          type="button"
          className="btn-pencil btn-sm"
          onClick={() => {editTodo(task.id)}}
        >
          <i className="fas fa-pencil"></i>
        </button>

        <button 
          type="button"
          className="btn-trash btn-sm"
          onClick={() => deleteTodo(task.id)}
        >
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </li>
  );
}

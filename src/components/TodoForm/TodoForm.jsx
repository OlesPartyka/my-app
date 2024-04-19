import React, {useState} from "react";
import './TodoForm.css';

export function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value.length === 0) return;
    addTodo(value);
    setValue('');
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="add-form d-flex">
      <input 
        type="text"
        placeholder="New task"
        onChange={handleChange}
        value={value}
        className="form-control new-post-label"
      />
      <button 
        type="submit" 
        className="btn btn-outline-light"
      >
        Add new task
      </button>
    </form>
  );
}

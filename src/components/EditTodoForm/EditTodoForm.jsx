import React, {useState} from "react";
import './EditTodoForm.css';

export function EditTodoForm({ editTask, task }) {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value.length === 0) return;
    editTask(value, task.id);
    setValue('');
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="update-form d-flex">
      <input 
        type="text"
        placeholder="Update task"
        onChange={handleChange}
        value={value}
        className="form-control new-post-label"
      />
      <button type="submit" className="btn btn-outline-light">Update task</button>
    </form>
  );
}

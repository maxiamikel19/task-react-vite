import React from "react";
import "./TaskForm.css";

function TaskForm() {
  return (
    <div className="task-form">
      <h2>Create new task</h2>
      <form>
        <div className="form-input">
          <input
            type="text"
            name="name"
            placeholder="Category name"
            id="name"
          />
        </div>
        <div className="form-input">
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            placeholder="Task description"
          ></textarea>
        </div>
        <div className="form-input">
          <select name="category" id="category">
            <option value="">Select a category</option>
            <option value="Personal">Personal</option>
            <option value="School">School</option>
            <option value="Work">Work</option>
            <option value="Shopping">Shopping</option>
          </select>
        </div>
        <div className="form-input">
          <button>Create</button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;

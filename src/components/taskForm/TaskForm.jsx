import { useState } from "react";
import "./TaskForm.css";
import { FaRegSave } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
function TaskForm({ addNewTask }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  // const newTask = {
  //   name: name,
  //   description: description,
  //   category: category,
  //   isCompleted: false,
  // };

  const handleResetForm = () => {
    setName("");
    setDescription("");
    setCategory("");
  };

  const handleValidarForm = () => {
    if (!name || !description || !category) return;
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    handleValidarForm();
    //console.log(newTask);
    addNewTask(name, description, category);
    handleResetForm();
  };
  return (
    <div className="task-form">
      <h2>Create new task</h2>
      <form autoComplete="off" onSubmit={handleSubmitForm}>
        <div className="form-input">
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            placeholder="Category name"
            id="name"
          />
        </div>
        <div className="form-input">
          <textarea
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            name="description"
            id="description"
            cols="30"
            rows="10"
            placeholder="Task description"
          ></textarea>
        </div>
        <div className="form-input">
          <select
            required
            name="category"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select a category</option>
            <option value="Personal">Personal</option>
            <option value="School">School</option>
            <option value="Work">Work</option>
            <option value="Shopping">Shopping</option>
          </select>
        </div>
        <div className="form-input">
          <button className="btn" type="submit">
            <FaRegSave className="icon" /> Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;

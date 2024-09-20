import React from "react";

function Task({ task }) {
  const { id, name, description, category, isCompleted } = task;

  return (
    <div className="task">
      <div className="task-content">
        <p>{name}</p>
        <p>{description}</p>
        <p>{category}</p>
      </div>
      <div className="actions">
        <button>Finalize</button>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default Task;

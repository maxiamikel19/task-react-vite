import { FaCheck } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import "./Task.css";

function Task({ task, removeTask, completeTask }) {
  const { id, name, description, category, isCompleted } = task;

  return (
    <div className="task">
      <div className="task-content">
        <div className="task-header">
          <p className="task-content-name">{name}</p>
          <p className="task-metadata">
            <span>Status</span>
            <span
              className={`${!isCompleted ? "task-pending" : "task-complete"}`}
            >
              {!isCompleted ? "Pending" : "Finish"}
            </span>
          </p>
        </div>
        <p>{description}</p>
        <p>{category}</p>
        <p>{isCompleted}</p>
      </div>
      <div className="actions">
        <button
          className="action-complete action"
          onClick={() => completeTask(id)}
        >
          <FaCheck />
        </button>
        <button className="action-delete action" onClick={() => removeTask(id)}>
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
}

export default Task;

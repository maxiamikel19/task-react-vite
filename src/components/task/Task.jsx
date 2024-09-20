import { FaCheck } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import "./Task.css";

function Task({ task }) {
  const { id, name, description, category, isCompleted } = task;

  return (
    <div className="task">
      <div className="task-content">
        <p className="task-content-name">{name}</p>
        <p>{description}</p>
        <p>{category}</p>
      </div>
      <div className="actions">
        <button className="action-complete action">
          <FaCheck />
        </button>
        <button className="action-delete action">
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
}

export default Task;

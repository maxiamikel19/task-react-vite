import { useState } from "react";
import "./App.css";
import Task from "./components/task/Task";
import TaskForm from "./components/taskForm/TaskForm";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Task 001",
      description: "Iniciar a task",
      category: "Personal",
      isCompleted: false,
    },
    {
      id: 2,
      name: "Task 002",
      description: "Iniciar a task 002",
      category: "Work",
      isCompleted: true,
    },
  ]);
  return (
    <div className="app">
      <h1>Tasks list</h1>
      <div className="task-list">
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
      <TaskForm />
    </div>
  );
}

export default App;

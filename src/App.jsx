import { useState } from "react";
import "./App.css";
import Task from "./components/task/Task";
import TaskForm from "./components/taskForm/TaskForm";
import Search from "./components/search/Search";
import Filter from "./components/filter/Filter";

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
      isCompleted: false,
    },
  ]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");
  const addNewTask = (name, description, category) => {
    const newTask = [
      ...tasks,
      {
        id: Math.floor(Math.random() * 1000),
        name,
        description,
        category,
        isCompleted: false,
      },
    ];
    setTasks(newTask);
  };
  const removeTask = (id) => {
    const arrTasks = [...tasks];
    const filterArrTasks = arrTasks.filter((task) =>
      task.id !== id ? task : null
    );
    setTasks(filterArrTasks);
  };

  const completeTask = (id) => {
    const arrTasks = [...tasks];
    arrTasks.map((task) =>
      task.id === id ? (task.isCompleted = !tasks.isCompleted) : tasks
    );
    setTasks(arrTasks);
  };
  return (
    <div className="app">
      <h1>
        Tasks list<span className="task-number">({tasks.length})</span>
      </h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className="task-list">
        {tasks.length > 0 ? (
          tasks
            .filter((task) =>
              filter === "All"
                ? true
                : filter === "Finish"
                ? task.isCompleted
                : !task.isCompleted
            )
            .filter((task) =>
              task.name.toLowerCase().includes(search.toLowerCase())
            )
            .sort((a, b) =>
              sort === "Asc"
                ? a.name.localeCompare(b.name)
                : b.name.localeCompare(a.name)
            )
            .map((task) => (
              <Task
                key={task.id}
                task={task}
                removeTask={removeTask}
                completeTask={completeTask}
              />
            ))
        ) : (
          <div className="no-task">
            <h1>No tasks to show</h1>
          </div>
        )}
      </div>
      <TaskForm addNewTask={addNewTask} />
    </div>
  );
}

export default App;

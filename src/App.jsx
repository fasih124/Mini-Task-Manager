import { use, useState, useEffect } from "react";
import { ThemeContext } from "./store/ThemeContext";
import Header from "./component/Header";
import TaskList from "./component/TaskList";
import ThemeToggleBtn from "./component/ThemeToggleBtn";
import ThemeContextProvider from "./store/ThemeContext";
import TaskModel from "./component/AddTaskModal";

function AppThemeContect() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  function addTask(task) {
    setTasks([...tasks, task]); // add new task
  }

  const appThemeCtx = use(ThemeContext);
  return (
    <div
      className={`min-h-screen ${
        appThemeCtx.theme === "light"
          ? "bg-white text-black "
          : "bg-gray-900 text-white"
      } transition-colors duration-300`}
    >
      <Header />
      <TaskList taskList={tasks} />
      <TaskModel AddTaskFn={addTask} />
    </div>
  );
}

function App() {
  return (
    <ThemeContextProvider>
      <AppThemeContect />
    </ThemeContextProvider>
  );
}

export default App;

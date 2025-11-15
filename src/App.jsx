import { use, useState, useEffect, useRef } from "react";
import { ThemeContext } from "./store/ThemeContext";
import Header from "./component/Header";
import TaskList from "./component/TaskList";
import ThemeToggleBtn from "./component/ThemeToggleBtn";
import ThemeContextProvider from "./store/ThemeContext";
import TaskModel from "./component/AddTaskModal";
import AddTaskBtn from "./component/AddTeakBtn";

function AppThemeContext() {
  const appThemeCtx = use(ThemeContext);
  const [tasks, setTasks] = useState([]);
  const taskDialog = useRef();
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(task) {
    setTasks([...tasks, task]);
  }

  function removeTask(taskToRemove) {
    setTasks(tasks.filter((task) => task !== taskToRemove));
  }

  function openModel() {
    taskDialog.current.showModal();
  }

  return (
    <>
      <TaskModel AddTaskFn={addTask} className="p-4" ref={taskDialog} />
      <div
        className={`min-h-screen ${
          appThemeCtx.theme === "light"
            ? "bg-slate-200 text-black "
            : "bg-slate-700 text-white"
        } transition-colors duration-300`}
      >
        <Header />
        <TaskList taskList={tasks} removetask={removeTask} className="p-4" />
        <AddTaskBtn handleclick={openModel} />
      </div>
    </>
  );
}

function App() {
  return (
    <ThemeContextProvider>
      <AppThemeContext />
    </ThemeContextProvider>
  );
}

export default App;

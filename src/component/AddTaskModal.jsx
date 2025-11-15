import { useState, useEffect } from "react";

export default function TaskModel({ AddTaskFn }) {
  const [task, setTask] = useState("");

  function handletask(event) {
    setTask(event.target.value);
  }

  function addTask() {
    if (task.trim() === "") return; // prevent empty tasks
    AddTaskFn(task);
    setTask(""); // clear input
  }

  return (
    <div>
      <input
        className="border rounded-br"
        type="text"
        value={task}
        onChange={handletask}
      />
      <button onClick={addTask}>Add</button>
    </div>
  );
}

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function TaskModel({ AddTaskFn, ref }) {
  const [task, setTask] = useState("");

  function handletask(event) {
    setTask(event.target.value);
  }

  function addTask() {
    if (task.trim() === "") return; // prevent empty tasks
    AddTaskFn(task);
    setTask(""); // clear input
  }

  return createPortal(
    <dialog ref={ref}>
      <input
        className="border rounded-br"
        type="text"
        value={task}
        onChange={handletask}
      />
      <form method="dialog">
        <button onClick={addTask}>Add</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
}

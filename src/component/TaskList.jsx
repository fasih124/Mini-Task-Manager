import TaskItem from "./TaskItem";
import { useState, useEffect } from "react";

export default function TaskList({ taskList }) {
  return (
    <>
      <TaskItem>Get Milk from Store</TaskItem>
      <TaskItem>Buy shoes for Trip</TaskItem>
      <TaskItem>Fix room's wall</TaskItem>
      <ul className="mt-4 space-y-2">
        {taskList.map((t, index) => (
          <TaskItem key={index} className="bg-gray-100 p-2 rounded">
            {t}
          </TaskItem>
        ))}
      </ul>
    </>
  );
}

import TaskItem from "./TaskItem";

export default function TaskList({ taskList, removetask }) {
  return (
    <>
      <ul className="mt-4 space-y-2">
        {taskList.map((t, index) => (
          <TaskItem
            itemIndex={index}
            key={index}
            className="bg-gray-100 p-2 rounded"
            handleRemove={removetask}
          >
            {t}
          </TaskItem>
        ))}
      </ul>
    </>
  );
}

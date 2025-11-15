export default function TaskItem({ children, itemIndex, handleRemove }) {
  return (
    <div className="mt-4 space-y-2 flex">
      <p className="bg-gray-100 p-2 flex-1">
        {itemIndex + 1}. {children}
      </p>
      <button onClick={() => handleRemove(children)} className=" bg-red-300">
        Delete
      </button>
    </div>
  );
}

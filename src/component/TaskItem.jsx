export default function TaskItem({ children }) {
  return (
    <div>
      <p>{children}</p>
      <button>Delete</button>
    </div>
  );
}

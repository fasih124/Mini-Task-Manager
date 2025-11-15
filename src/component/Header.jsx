import ThemeToggleBtn from "./ThemeToggleBtn";
export default function Header() {
  return (
    <header className="flex bg-sky-300 p-2  rounded-l">
      <h1 className="flex-1">Tasks Box</h1>
      <ThemeToggleBtn className="bg-amber-600" />
    </header>
  );
}

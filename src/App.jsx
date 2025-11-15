import { use } from "react";
import { ThemeContext } from "./store/ThemeContext";
import Header from "./component/Header";
import TaskList from "./component/TaskList";
import ThemeToggleBtn from "./component/ThemeToggleBtn";
import ThemeContextProvider from "./store/ThemeContext";

function AppThemeContect() {
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
      <TaskList />
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

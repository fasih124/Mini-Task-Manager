import { use } from "react";
import { ThemeContext } from "../store/ThemeContext";

export default function ThemeToggleBtn() {
  const { theme, changeAppTheme } = use(ThemeContext);

  return (
    <button
      onClick={changeAppTheme}
      className="bg-blue-500 text-white  dark:bg-red-700 dark:text-gray-100"
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}

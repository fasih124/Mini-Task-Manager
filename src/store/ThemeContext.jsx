import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext({
  theme: "light",
  changeAppTheme: () => {},
});

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("light");

  function changeTheme() {
    setTheme((prevalue) => (prevalue === "light" ? "dark" : "light"));
  }

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark"); // html gets dark
    } else {
      document.body.classList.remove("dark"); // remove for light
    }
  }, [theme]);

  const ctxValue = { theme: theme, changeAppTheme: changeTheme };
  return (
    <ThemeContext.Provider value={ctxValue}>{children}</ThemeContext.Provider>
  );
}

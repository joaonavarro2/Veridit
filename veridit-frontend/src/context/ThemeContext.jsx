import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {

  const [darkMode, setDarkMode] =
    useState(false);

  useEffect(() => {

    const storedTheme =
      localStorage.getItem("veridit-theme");

    if (storedTheme === "dark") {
      setDarkMode(true);

      document.documentElement.classList.add(
        "dark"
      );
    }

  }, []);

  function toggleTheme() {

    const newTheme = !darkMode;

    setDarkMode(newTheme);

    if (newTheme) {

      document.documentElement.classList.add(
        "dark"
      );

      localStorage.setItem(
        "veridit-theme",
        "dark"
      );

    } else {

      document.documentElement.classList.remove(
        "dark"
      );

      localStorage.setItem(
        "veridit-theme",
        "light"
      );
    }
  }

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
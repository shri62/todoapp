
import { createContext, useContext, useState, useEffect } from "react";

// Create Toggle Context
const ToggleContext = createContext();

// Create Provider
export function ToggleProvider({ children }) {
  // Load saved theme from localStorage
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // Save theme whenever it changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Switch between light and dark
  function toggleTheme() {
    setTheme((oldTheme) =>
      oldTheme === "light" ? "dark" : "light"
    );
  }

  return (
    <ToggleContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ToggleContext.Provider>
  );
}

// Use Toggle Context in other components
export function useToggle() {
  return useContext(ToggleContext);
}

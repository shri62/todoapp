
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";

// Create Toggle Context
const ToggleContext = createContext();

export function ToggleProvider({ children }) {
  // Load saved theme
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // Save theme whenever it changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Switch between light and dark
  const toggleTheme = useCallback(() => {
    setTheme((oldTheme) =>
      oldTheme === "light" ? "dark" : "light"
    );
  }, []);

  // Share theme values
  const value = useMemo(() => ({
    theme,
    toggleTheme,
  }), [theme, toggleTheme]);

  return (
    <ToggleContext.Provider value={value}>
      {children}
    </ToggleContext.Provider>
  );
}

// Use Toggle Context
export function useToggle() {
  return useContext(ToggleContext);
}

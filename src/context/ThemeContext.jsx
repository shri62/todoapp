
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";

// Create Theme Context
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
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
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// Use Theme Context
export function useTheme() {
  return useContext(ThemeContext);
}

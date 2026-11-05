
import { TodoProvider } from "./context/TodoContext";
import { FilterProvider } from "./context/FilterContext";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";
import ThemeToggleButton from "./components/ThemeToggleButton";

import "./App.css";

function TodoApp() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <div className="todo-container">

        <header className="app-header">
          <h1>My Todo App</h1>
          <ThemeToggleButton />
        </header>

        <TodoInput />

        <FilterButtons />

        <TodoList />

      </div>
    </div>
  );
}

function App() {
  return (
    <TodoProvider>
      <FilterProvider>
        <ThemeProvider>
          <TodoApp />
        </ThemeProvider>
      </FilterProvider>
    </TodoProvider>
  );
}

export default App;

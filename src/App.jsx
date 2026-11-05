
import { TodoProvider } from "./context/TodoContext";
import { FilterProvider } from "./context/FilterContext";
import { ToggleProvider, useToggle } from "./context/ToggleContext";

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";
import ToggleButton from "./components/ToggleButton";
import "./App.css";

// Main Todo App
function TodoApp() {
  const { theme } = useToggle();

  return (
    <div className={theme === "dark" ? "app dark" : "app light"}>
      <h1>My Todo App</h1>

      <ToggleButton />

      <TodoInput />

      <FilterButtons />

      <TodoList />
    </div>
  );
}

// Connect all three Providers
function App() {
  return (
    <TodoProvider>
      <FilterProvider>
        <ToggleProvider>
          <TodoApp />
        </ToggleProvider>
      </FilterProvider>
    </TodoProvider>
  );
}

export default App;

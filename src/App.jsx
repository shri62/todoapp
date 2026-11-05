
import { TodoProvider } from "./context/TodoContext";
import { FilterProvider } from "./context/FilterContext";
import { ToggleProvider, useToggle } from "./context/ToggleContext";

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";
import ToggleButton from "./components/ToggleButton";

import "./App.css";

function TodoApp() {
  const { theme } = useToggle();

  return (
    <div className={`app ${theme}`}>
      <div className="todo-container">

        <header className="app-header">
          <h1>My Todo App</h1>
          <ToggleButton />
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
        <ToggleProvider>
          <TodoApp />
        </ToggleProvider>
      </FilterProvider>
    </TodoProvider>
  );
}

export default App;

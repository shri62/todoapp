
import { createContext, useContext, useState, useEffect } from "react";

const TodoContext = createContext();

export function TodoProvider({ children }) {
  // Get saved todos from the browser
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // Save todos whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Add a new todo
  function addTodo(text) {
    if (text.trim() === "") return;

    const newTodo = {
      id: crypto.randomUUID(),
      text: text,
      completed: false,
    };

    setTodos((oldTodos) => [...oldTodos, newTodo]);
  }

  // Mark a todo complete or active
  function toggleTodo(id) {
    setTodos((oldTodos) =>
      oldTodos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }

  // Delete a todo
  function deleteTodo(id) {
    setTodos((oldTodos) =>
      oldTodos.filter((todo) => todo.id !== id)
    );
  }

  // Edit a todo
  function editTodo(id, newText) {
    if (newText.trim() === "") return;

    setTodos((oldTodos) =>
      oldTodos.map((todo) =>
        todo.id === id
          ? { ...todo, text: newText }
          : todo
      )
    );
  }

  // Delete all completed todos
  function clearCompleted() {
    setTodos((oldTodos) =>
      oldTodos.filter((todo) => !todo.completed)
    );
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        toggleTodo,
        deleteTodo,
        editTodo,
        clearCompleted,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

// Use Todo Context in other components
export function useTodos() {
  return useContext(TodoContext);
}

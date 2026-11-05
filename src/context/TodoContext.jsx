
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";

const TodoContext = createContext();

export function TodoProvider({ children }) {
  // Load saved todos
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // Save todos whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Add a todo
  const addTodo = useCallback((text) => {
    if (text.trim() === "") return;

    const newTodo = {
      id: crypto.randomUUID(),
      text: text,
      completed: false,
    };

    setTodos((oldTodos) => [...oldTodos, newTodo]);
  }, []);

  // Complete or uncomplete a todo
  const toggleTodo = useCallback((id) => {
    setTodos((oldTodos) =>
      oldTodos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }, []);

  // Delete a todo
  const deleteTodo = useCallback((id) => {
    setTodos((oldTodos) =>
      oldTodos.filter((todo) => todo.id !== id)
    );
  }, []);

  // Edit a todo
  const editTodo = useCallback((id, newText) => {
    if (newText.trim() === "") return;

    setTodos((oldTodos) =>
      oldTodos.map((todo) =>
        todo.id === id
          ? { ...todo, text: newText }
          : todo
      )
    );
  }, []);

  // Clear completed todos
  const clearCompleted = useCallback(() => {
    setTodos((oldTodos) =>
      oldTodos.filter((todo) => !todo.completed)
    );
  }, []);

  // Share values with other components
  const value = useMemo(() => ({
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    clearCompleted,
  }), [
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    clearCompleted,
  ]);

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodoContext);
}

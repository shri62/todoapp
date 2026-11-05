
import { useTodos } from "../context/TodoContext";
import { useFilter } from "../context/FilterContext";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todos, clearCompleted } = useTodos();
  const { filter } = useFilter();

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.completed;
    }

    if (filter === "completed") {
      return todo.completed;
    }

    return true;
  });

  return (
    <div>
      <h2>My Todos</h2>

      {filteredTodos.length === 0 ? (
        <p>No todos found! Add one above.</p>
      ) : (
        filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))
      )}

      <button onClick={clearCompleted}>
        Clear Completed
      </button>
    </div>
  );
}

export default TodoList;

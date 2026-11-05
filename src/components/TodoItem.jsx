
import { useState } from "react";
import { useTodos } from "../context/TodoContext";

function TodoItem({ todo }) {
  const { toggleTodo, deleteTodo, editTodo } = useTodos();

  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  function handleEdit() {
    if (newText.trim() === "") return;

    editTodo(todo.id, newText);
    setIsEditing(false);
  }

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />

      {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />

          <button onClick={handleEdit}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.text}
          </span>

          <button onClick={() => setIsEditing(true)}>Edit</button>

          <button onClick={() => deleteTodo(todo.id)}>
            Delete
          </button>
        </>
      )}
    </div>
  );
}

export default TodoItem;

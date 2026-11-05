
import { useState } from "react";
import { useTodos } from "../context/TodoContext";

function TodoInput() {
  const [text, setText] = useState("");
  const { addTodo } = useTodos();

  function handleSubmit(e) {
    e.preventDefault();

    if (text.trim() === "") return;

    addTodo(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoInput;

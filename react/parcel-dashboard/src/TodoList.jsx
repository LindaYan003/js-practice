import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Read react.dev - Your First Component", completed: true, active: true },
    { id: 2, text: "Read react.dev - Rendering Lists", completed: true, active: true },
    { id: 3, text: "Build the todo list JSX", completed: false, active: true },
    { id: 4, text: "Build the login form JSX", completed: false, active: true },
  ]);
  const [filter, setFilter] = useState("all");
  const [name, setName] = useState("");

  function toggleTodo(id) {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function inactive(id) {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, active: !todo.active } : todo
      )
    );
  }

  function showAll() {
    setFilter("all");
  }

  function showCompleted() {
    setFilter("completed");
  }

  function showInactive() {
    setFilter("inactive");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) return; // ignore empty submissions
    setTodos(prev => [
      ...prev,
      { id: Date.now(), text: name, completed: false, active: true },
    ]);
    setName(""); // clear the input
  }

  const visibleTodos = todos.filter(todo => {
    if (filter === "completed") return todo.active && todo.completed;
    if (filter === "inactive") return !todo.active;
    return todo.active;
  });

  return (
    <>
      <h1>Todo list</h1>

      <form onSubmit={handleSubmit}>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Add a todo" />
        <button type="submit">Add</button>
      </form>

      <button onClick={showAll}>All</button>
      <button onClick={showCompleted}>Completed</button>
      <button onClick={showInactive}>Inactive</button>
      <ul style={{ listStyle: "none", padding: 0, margin: "0 auto", maxWidth: "400px" }}>
        {visibleTodos.map(todo => (
          <li key={todo.id}>
            <label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                {todo.text}
              </span>
              <button onClick={() => inactive(todo.id)} style={{ color: "red" }}>X</button>
            </label>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
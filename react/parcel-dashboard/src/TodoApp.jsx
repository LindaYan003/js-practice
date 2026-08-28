import { useState } from "react";
import FilterBar from "./FilterBar";
import TodoList from "./TodoList";

function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Read react.dev - Your First Component", completed: true, active: true },
    { id: 2, text: "Read react.dev - Rendering Lists", completed: true, active: true },
    { id: 3, text: "Build the todo list JSX", completed: false, active: true },
    { id: 4, text: "Build the login form JSX", completed: false, active: true },
  ]);
  const [filter, setFilter] = useState("all");
  const [name, setName] = useState("");

  function handleToggle(id) {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function handleDelete(id) {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, active: !todo.active } : todo
      )
    );
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

      <FilterBar filter={filter} onFilterChange={setFilter} />
      <TodoList todos={visibleTodos} onToggle={handleToggle} onDelete={handleDelete} />
    </>
  );
}

export default TodoApp;

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li>
      <label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
          {todo.text}
        </span>
        <button onClick={() => onDelete(todo.id)} style={{ color: "red" }}>X</button>
      </label>
    </li>
  );
}

export default TodoItem;

import TodoItem from "./TodoItem";

function TodoList({ todos, onToggle, onDelete }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: "0 auto", maxWidth: "400px" }}>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default TodoList;

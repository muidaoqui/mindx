const TodoList = ({ todos, toggleTodo }) => {
  return (
    <ul className="text-left">
      {todos.map(todo => (
        <li key={todo.id} className="flex items-center gap-2 mb-2">
          <input
            type="checkbox"
            checked={todo.done}
            onChange={() => toggleTodo(todo.id)}
          />
          <span className={`${todo.done ? "line-through text-gray-500" : ""}`}>
            {todo.text}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

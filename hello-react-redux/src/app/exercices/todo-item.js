function TodoItem({ todo = {} }) {
  return (
    <div className="TodoItem">
      <input type="checkbox" defaultChecked={todo.completed} />
      <span>{todo.title}</span>
      <button>-</button>
    </div>
  );
}

export default TodoItem;
import TodoItem from "./todo-item";

function TodosList({ todos = [] }) {
  return (
    <div className="TodosList">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodosList;
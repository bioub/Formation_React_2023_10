import { useState } from "react";
import TodoForm from "./todo-form";
import TodosList from "./todos-list";

function Todos() {
  const [todos, setTodos] = useState([
    { id: Math.random(), title: 'DEF', completed: false },
    { id: Math.random(), title: 'XYZ', completed: true },
    { id: Math.random(), title: 'GHI', completed: false },
  ]);
  const [newTodo, setNewTodo] = useState('ABC');

  function handleValueChange(value) {
    setNewTodo(value);
  }

  function handleAdd() {
    setTodos([
      ...todos,
      { id: Math.random(), title: newTodo, completed: false },
    ])
  }

  return (
    <div className="Todos">
      <TodoForm newTodo={newTodo} onValueChange={handleValueChange} onAdd={handleAdd} />
      <TodosList todos={todos} />
    </div>
  );
}

export default Todos;
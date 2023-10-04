import { useEffect, useState } from "react";
import TodoForm from "./todo-form";
import TodosList from "./todos-list";
import { useDispatch, useSelector } from "react-redux";
import { todosSelector } from "../store/selectors";
import { addTodo, requestTodos, setNewTodo } from "../store/actions";

function Todos() {
  // const [todos, setTodos] = useState([
  //   { id: Math.random(), title: 'DEF', completed: false },
  //   { id: Math.random(), title: 'XYZ', completed: true },
  //   { id: Math.random(), title: 'GHI', completed: false },
  // ]);
  // const [newTodo, setNewTodo] = useState('ABC');
  const { items, newTodo } = useSelector(todosSelector);  
  const dispatch = useDispatch();

  function handleValueChange(value) {
    dispatch(setNewTodo(value));
  }

  function handleAdd() {
    dispatch(addTodo(newTodo));
  }

  useEffect(() => {
    dispatch(requestTodos());
  }, []);

  return (
    <div className="Todos">
      <TodoForm newTodo={newTodo} onValueChange={handleValueChange} onAdd={handleAdd} />
      <TodosList todos={items} />
    </div>
  );
}

export default Todos;
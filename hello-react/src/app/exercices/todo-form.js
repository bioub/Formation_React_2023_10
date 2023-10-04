function TodoForm({ newTodo = '', onValueChange = () => {}, onAdd = () => {}}) {

  function handleChange(event) {
    onValueChange(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onAdd();
    // onValueChange('');
  }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input type="text" value={newTodo} onChange={handleChange} />
      <button>+</button>
    </form>
  );
}

export default TodoForm;
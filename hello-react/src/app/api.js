export async function fetchTodos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos = res.json();
  return todos;
}
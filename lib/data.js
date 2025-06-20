let todos = [];

export function getTodos() {
  return todos;
}

export function addTodo(text) {
  const newTodo = { id: Date.now(), text };
  todos.push(newTodo);
}

export function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
}

export function updateTodo(id, newText) {
  const todo = todos.find(t => t.id === id);
  if (todo) todo.text = newText;
}

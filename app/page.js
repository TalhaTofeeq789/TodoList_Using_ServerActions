import { getTodos } from '../lib/data';
import { createTodo } from './actions';
import TodoForm from '../components/TodoForm';
import TodoItem from '../components/TodoItem';

export default function Home() {
  const todos = getTodos();

  return (
    <main>
      <h1>Server Actions Todo App</h1>

      <TodoForm action={createTodo} />

      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </main>
  );
}

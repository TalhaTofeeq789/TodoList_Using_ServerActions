import { removeTodo, editTodo } from '../app/actions';
import TodoForm from './TodoForm';

export default function TodoItem({ todo }) {
  return (
    <li>
      <form action={removeTodo}>
        <input type="hidden" name="id" value={todo.id} />
        <button type="submit">Delete</button>
      </form>

      <span>{todo.text}</span>

      <details>
        <summary>Edit</summary>
        <TodoForm action={editTodo} todo={todo} />
      </details>
    </li>
  );
}

'use client';

import { useState } from 'react';

export default function TodoForm({ action, todo = {} }) {
  const [text, setText] = useState(todo.text || '');

  return (
    <form action={action}>
      {todo.id && <input type="hidden" name="id" value={todo.id} />}
      <input
        name="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Enter todo"
      />
      <button type="submit">{todo.id ? 'Update' : 'Add'}</button>
    </form>
  );
}

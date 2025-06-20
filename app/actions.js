'use server';

import { addTodo, deleteTodo, updateTodo } from '../lib/data';
import { revalidatePath } from 'next/cache';

export async function createTodo(formData) {
  const text = formData.get('text');
  if (!text) return;
  addTodo(text);
  revalidatePath('/');
}

export async function removeTodo(formData) {
  const id = parseInt(formData.get('id'));
  deleteTodo(id);
  revalidatePath('/');
}

export async function editTodo(formData) {
  const id = parseInt(formData.get('id'));
  const newText = formData.get('text');
  updateTodo(id, newText);
  revalidatePath('/');
}

import { Todo } from '../types/todo';
import { User } from '../types/user';

const API_URL = 'https://mate.academy/students-api';

function get<T>(url: string): Promise<T> {
  return fetch(API_URL + url)
    .then(response => response.json());
}

export function getTodos() {
  return get<Todo[]>('/todos');
}

export function deleteTodo(todoId: number) {
  return fetch(`${API_URL}/todos/${todoId}`, {
    method: 'DELETE',
  });
}

export function addTodo(
  title: string,
  userId: number,
  completed = false,
): Promise<Todo> {
  return fetch(`${API_URL}/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify({ title, completed, userId }),
  })
    .then(response => response.json());
}

export function getUserById(userId: number) {
  return get<User>(`/users/${userId}`);
}

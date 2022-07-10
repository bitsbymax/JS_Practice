
const API_URL = 'https://mate.academy/students-api';

function get(url) {
  return fetch(API_URL + url)
    .then(response => response.json());
}

export function getTodos() {
  return get('/todos');
}
export function getTodo(todoId) {
  return get(`/todos/${todoId}`);
}

export function deleteTodo(todoId) {
  return fetch(`${API_URL}/todos/${todoId}`, {
    method: 'DELETE',
  });
}

export function addTodo(
  title,
  userId,
  completed = false,
) {
  return fetch(`${API_URL}/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify({ title, completed, userId }),
  })
    .then(response => response.json());
}

export function getUserById(userId) {
  return get(`/users/${userId}`);
}

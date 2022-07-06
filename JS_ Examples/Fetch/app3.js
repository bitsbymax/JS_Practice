// const BASE_URL = 'https://jsonplaceholder.typicode.com';
const BASE_URL = 'https://mate-api.herokuapp.com';

const request = (url) => {
  return fetch(`${BASE_URL}${url}`)
    .then(response => {
      if (!response.ok) {
        throw `${response.status} - ${response.statusText}`;
      }
      return response.json();
    })
//    .then(result => result.data);
}

const getTodos = () => request('/todos');
const getTodo = (todoId) => request(`/todos/${todoId}`);

const createTodo = (title) => {
  return fetch(`${BASE_URL}/todos`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify({
      userId: 1,
      completed: false,
      title,
    }),
  })
    .then(response => response.json())
}

//createTodo('test')
getTodo(1105)
  .then(print)
  .catch(logError);

function print(value) {
  console.log(value);
}

function logError(error) {
  console.warn('Error occurred', error);
}

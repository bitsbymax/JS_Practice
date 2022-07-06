const BASE_URL = 'https://jsonplaceholder.typicode.com';
// const BASE_URL = 'https://mate-api.herokuapp.com';

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
const getUsers = () => request('/users');
const getUser = (userId) => request(`/users/${userId}`);

getUser(1)
  .then(print)
  .catch(logError);

function print(value) {
  console.log(value);
}

function logError(error) {
  console.warn('Error occurred', error);
}

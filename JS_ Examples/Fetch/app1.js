const BASE_URL = 'https://mate-api.herokuapp.com';
const url = `${BASE_URL}/todos`;

const getTodos = () => {
  return fetch(url)//робимо завантаження даних
    .then(response => {
      if (!response.ok) { //перевіряємо статус
        return Promise.reject(`Can't load todos`);
      }

      return response.json(); //якщо все ок, запускаємо перетворення в json
    })
    .then(result => result.data);// і дістаємо з об'єкта властивість data
}
getTodos()
  .then(todos => {
    console.log(todos);
  })
  .catch(error => {
    console.warn('Error:', error);
  });

getTodos()
  .then(todos => {
    console.log(todos.length);
  })
  .catch(error => {
    console.warn('Error:', error);
  });

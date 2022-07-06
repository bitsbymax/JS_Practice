const BASE_URL = 'https://mate-api.herokuapp.com';
const url = `${BASE_URL}/goods`;

fetch(url)
  .then(response => {
    if (!response.ok) { //перевірка на те, чи завершився запит успішно
      return Promise.reject(
        `${response.status} - ${response.statusText}`
      );
    }

    if (!response.headers.get('content-type').includes('application/json')) {
      return Promise.reject('Content-type is not supported')
    } //чи було передано правильний контент-тайп

    return response.json(); //і тільки після цього запускаємо перетворення в json
  })
  .then(result => {
    console.log('Success', result);
  })
  .catch(error => {
    console.warn('Error:', error);
  });

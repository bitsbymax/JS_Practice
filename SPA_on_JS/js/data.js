import state from './state.js';

function fetchData() {
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((data) => {
      state.data = data;
      renderData();
    })
    .catch((error) => {
      console.error(error);
      document.getElementById('dataContent').innerHTML = 'Failed to load data';
    });
}

export function renderData() {
  document.getElementById(
    'dataContent',
  ).innerHTML = `<h3>Post title: ${state.data.title}</h3><p>${state.data.body}</p>`;
}

export default fetchData;

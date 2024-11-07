import { renderRoute } from './routing.js';
import { navigate } from './routing.js';

function init() {
  const path = window.location.pathname;
  renderRoute(path);
}

document.getElementById('home').addEventListener('click', function (event) {
  event.preventDefault();
  navigate('/');
});

document.getElementById('about').addEventListener('click', function (event) {
  event.preventDefault();
  navigate('/about');
});

document.getElementById('data').addEventListener('click', function (event) {
  event.preventDefault();
  navigate('/data');
});

window.addEventListener('popstate', function () {
  navigate(window.location.pathname);
});

window.addEventListener('load', init);

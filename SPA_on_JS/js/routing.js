import routes from './routes.js';
import fetchData, { renderData } from './data.js';
import state from './state.js';

export function navigate(path) {
  window.history.pushState({}, path, window.location.origin + path);
  renderRoute(path);
}

export function renderRoute(path) {
  const route = routes[path];
  if (route) {
    const content = document.getElementById('content');
    content.innerHTML = route;
    if (path === '/data') {
      if (state.data) {
        renderData();
      } else fetchData();
    }
  } else if (path === '/about') {
    lazyLoadAbout();
  } else {
    console.error(`Unknown route: ${path}`);
    document.getElementById('content').innerHTML = 'Unknown route';
  }
}

async function lazyLoadAbout() {
  if (!routes['/about']) {
    const module = await import('./about.js');
    routes['/about'] = module.default;
    document.getElementById('content').innerHTML = routes['/about'];
  }
}
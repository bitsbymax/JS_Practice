let currentTodos = [
  {id: 1, title: "HTML", completed: true},
  {id: 2, title: "CSS", completed: false},
  {id: 3, title: "JavaScript", completed: false},
]

let filterType = 'all';
const root = document.querySelector('.todoapp'); // кореневий елемент
render();

function render() {
  const activeTodos = currentTodos.filter(todo => !todo.completed);
  const completedTodos = currentTodos.filter(todo => todo.completed);
  
  const todos = {
    all: currentTodos,
    active: activeTodos,
    completed: completedTodos,
  }
  
  const visibleTodos = todos[filterType];
  
  const header = `
    <header class="header">
      <h1>my todos</h1>
      <input
        class="new-todo"
        placeholder="What needs to be done?"
        onkeydown="handleAddTodo(event)"
      >
    </header>
  `;
  const main = `
    <section class="main">
    
      <span class="toggle-all-container">
        <input
          class="toggle-all"
          id="toggle-all"
          type="checkbox"
          ${activeTodos.length === 0 ? 'checked' : ''}
          onchange="toggleAll(event.target.checked)"
        >
        <label for="toggle-all">Mark all as completed</label>
      </span>
  
      <ul class="todo-list">
        ${visibleTodos.map(todo => `
          <li
            class="todo-item ${todo.completed ? 'completed' : ""}"
            data-todo-id="${todo.id}"
          >
            <input
              class="toggle"
              id="todo-${todo.id}"
              type="checkbox"
              ${todo.completed ? 'checked' : ""}
              onchange="toggleTodo(${todo.id}, event.target.checked)"
            >
            <label for="todo-${todo.id}">${todo.title}</label>
            <button class="destroy" onclick="removeTodo(${todo.id})"></button>
          </li>
        `).join('')}
      </ul>
  
    </section>
  `;
  const footer = `
    <footer class="footer">
      <span class="todo-count">
        ${activeTodos.length} item left
      </span>
  
      <ul class="filters">
        <li>
          <a
            class=${filterType === 'all' ? 'selected' : ''}
            data-filter="all"
            href="#/"
            onclick="setFilterType('all')"
          >
            All
          </a>
        </li>
        <li>
          <a
            class=${filterType === 'active' ? 'selected' : ''}
            data-filter="active"
            href="#/active"
            onclick="setFilterType('active')"
          >
            Active
          </a>
        </li>
        <li>
          <a
            class=${filterType === 'completed' ? 'selected' : ''}
            data-filter="completed"
            href="#/completed"
            onclick="setFilterType('completed')"
          >
            Completed
          </a>
        </li>
      </ul>
      
      ${completedTodos.length > 0 ? `
        <button class="clear-completed" onclick="clearCompleted()">
          Clear completed
        </button>
      ` : ''}
    </footer>
  `;
  root.innerHTML = `
    ${header}
    ${currentTodos.length > 0 ? `
      ${main}
      ${footer}
    ` : ''}
  `;
}

// Add todos ---->
function handleAddTodo(event) { // слухач для поля введення нових тудушок
  if (event.key !== 'Enter') { // перевірка на те, чи натиснуто клавішу Ентер
    return;
  }
  if (!event.target.value) { // перевірка на те, чи інпут порожній
    return;
  }
  
  const id = +new Date(); // айді для нових тудушок
  currentTodos.push({ // при створенні нової тудушки додаємо її в масив з поточними тудушками
    id,
    title: event.target.value,
    completed: false,
  });
  
  render();
}

// Remove todos ---->
function removeTodo(todoId) {
  currentTodos = currentTodos.filter(todo => todo.id !== todoId); // фільтруємо поточний масив з тудушками
  render();
}

// Toggle todos status ---->
function toggleTodo(todoId, completed) {
  const selectedTodo = currentTodos.find(todo => todo.id === todoId);//шукаємо тудушку, яку зараз модифікуємо
  selectedTodo.completed = completed; // встановлюємо їй у власт. completed значення, яке залежить від того,
  // чи у тудушки є атрибут checked
  render();
}

// Clear completed ---->
function clearCompleted() {
  currentTodos = currentTodos.filter(todo => !todo.completed); // залишаємо лише невиконані тудушки
  render();
}

// Toggle all ---->
function toggleAll(completed) {
  currentTodos.forEach(todo => {
    todo.completed = completed;
  }); // робимо перебір і всім тудушкам в completed записуємо значення, яке залежатиме від того, чи є атр. checked
  // у інпута allToggler
  render();
}

// Filter todos ---->
function setFilterType(type) {
  filterType = type;
  render();
}

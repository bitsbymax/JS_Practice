import React, { useEffect, useState } from 'react';

import './App.scss';
import './styles/general.scss';

import { CurrentUser } from './components/CurrentUser';
import { TodoList } from './components/TodoList';
import * as api from './api/api';
import { Todo } from './types/todo';

const App: React.FC = () => {
  const [selectedUserId, setUserId] = useState(0);
  const [todos, setTodos] = useState<Todo[]>([]);

  const loadTodos = () => {
    api.getTodos()
      .then(setTodos);
  };

  useEffect(loadTodos, []);

  return (
    <div className="App">
      <div className="App__sidebar">
        <button
          type="button"
          className="button"
          onClick={() => {
            const title = `Todo ${new Date().toLocaleTimeString()}`;

            api.addTodo(title, 3, Math.random() > 0.5)
              .then(loadTodos);
          }}
        >
          Add
        </button>

        <TodoList
          todos={[...todos].reverse()}
          setUserId={setUserId}
          deleteTodo={(todoId: number) => {
            api.deleteTodo(todoId)
              .then(loadTodos);
          }}
        />
      </div>

      <div className="App__content">
        <div className="App__content-container">
          {selectedUserId ? (
            <CurrentUser
              userId={selectedUserId}
            />
          ) : 'No user selected'}
        </div>
      </div>
    </div>
  );
};

export default App;

import React from 'react';
import classNames from 'classnames';

import { Todo } from '../../types/todo';

import './TodoList.scss';

type Props = {
  todos: Todo[];
  setUserId: (userId: number) => void;
  deleteTodo: (todoId: number) => void;
};

export const TodoList: React.FC<Props> = ({
  todos,
  setUserId,
  deleteTodo,
}) => (
  <div className="TodoList">
    <h2>Todos:</h2>

    <div className="TodoList__list-container">
      <ul className="TodoList__list">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={classNames({
              TodoList__item: true,
              'TodoList__item--checked': todo.completed,
              'TodoList__item--unchecked': !todo.completed,
            })}
          >
            <button
              className="button"
              type="button"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>

            <label htmlFor={`Todo-${todo.id}`}>
              <input
                id={`Todo-${todo.id}`}
                type="checkbox"
                readOnly
                checked={todo.completed}
              />

              <p>{todo.title}</p>
            </label>

            <button
              className="
                TodoList__user-button
                TodoList__user-button--selected
                button
              "
              type="button"
              onClick={() => setUserId(todo.userId)}
            >
              User&nbsp;#
              {todo.userId}
            </button>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

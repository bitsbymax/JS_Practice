import React from 'react';

export const TodoInfo = ({ todo }) => (
  <div className="card">
    <div className="card-content">
      <div className="media">
        <div className="media-content">
          <p className="title is-4">
            Todo #{todo.id}
          </p>
          <p className="subtitle is-6">
            User #{todo.userId}
          </p>
        </div>
      </div>

      <div className="content">
        <p className="title is-5">Details:</p>
        <ul>
          <li>
            <label className="checkbox">
              <input type="checkbox" checked={todo.completed} readOnly />
              {' '}
              {todo.title}
            </label>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default TodoInfo;

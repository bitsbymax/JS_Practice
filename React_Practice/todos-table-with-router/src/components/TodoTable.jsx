import {Link} from 'react-router-dom';

export const TodoTable = ({todos, selectedTodoId, onTodoSelected}) => {
  return (
    <table className="table is-narrow">
      <thead>
      <tr>
        <th>#</th>
        <th>Title</th>
        <th>Done</th>
        <th/>
      </tr>
      </thead>

      <tbody>
      {todos.map(todo => (
        <tr key={todo.id}>
          <td>{todo.id}</td>
          <td>{todo.title}</td>
          <td>{todo.completed ? (
            <span className="icon">
              <i className="far fa-check-circle"/>
            </span>
          ) : (
            <span className="icon">
              <i className="far fa-times-circle"/>
            </span>
          )}</td>

          <td>
            {selectedTodoId === todo.id ? (
              <button className="button is-link">
                <span className="icon">
                  <i className="far fa-eye-slash"/>
                </span>
              </button>
            ) : (
              <Link
                className="button"
                to={`/todos/${todo.id}`}
              >
            <span className="icon">
              <i className="far fa-eye"/>
            </span>
              </Link>
            )}
          </td>
        </tr>
      ))}
      </tbody>
    </table>
  );
}

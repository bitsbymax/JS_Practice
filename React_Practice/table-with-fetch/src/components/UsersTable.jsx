export const UsersTable = ({users, selectUser, selectedUserId}) => (
  <table className="table is-narrow">
    <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Email</th>
      <th></th>
    </tr>
    </thead>

    <tbody>
    {users.map(user => (
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>
          {selectedUserId === user.id ? (
            <button
              className="button is-link"
              onClick={() => {
                selectUser(0);
              }}
            >
            <span className="icon">
              <i className="far fa-eye-slash"></i>
            </span>
            </button>
          ) : (
            <button
              className="button"
              onClick={() => {
                selectUser(user.id);
              }}
            >
            <span className="icon">
              <i className="far fa-eye"></i>
            </span>
            </button>
          )}
        </td>
      </tr>
    ))}
    </tbody>
  </table>
)

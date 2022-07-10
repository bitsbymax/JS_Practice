import {User} from "./User";

export const UsersList = ({users, onDelete, onRename}) => (
  <ul>
    {users.map(user => (
      <li key={user.id}>
        <User
          user={user}
          onDelete={() => onDelete(user.id)}
          onRename={onRename}
        />
      </li>
    ))}
  </ul>
);

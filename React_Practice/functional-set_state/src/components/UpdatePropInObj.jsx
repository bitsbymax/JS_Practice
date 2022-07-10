import React from "react";

export const UpdatePropInObj = React.memo(
  ({ friends2 }) => {
    return (
      <ul>
        {friends2.map(friend => (
          <li key={friend.id}>
            {friend.name} ({friend.age})
          </li>
        ))}
      </ul>
    );
  }
);

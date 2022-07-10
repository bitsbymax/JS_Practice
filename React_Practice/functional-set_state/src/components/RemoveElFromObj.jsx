import React from "react";

export const RemoveElFromObj = React.memo(
  ({ friends2 }) => {
    return (
      <ul>
        {friends2.map(friend => (
          <li key={friend.id}>
            {friend.name}
          </li>
        ))}
      </ul>
    );
  }
);

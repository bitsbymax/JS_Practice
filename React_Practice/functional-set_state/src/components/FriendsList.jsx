import React from "react";

export const FriendsList = React.memo(
  ({ friends }) => {
    return (
      <ul>
        {friends.map(friend => (
          <li key={friend}>
            {friend}
          </li>
        ))}
      </ul>
    );
  }
);

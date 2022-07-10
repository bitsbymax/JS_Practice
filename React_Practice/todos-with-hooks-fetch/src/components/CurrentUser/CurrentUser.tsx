import React, { useEffect, useState } from 'react';
import './CurrentUser.scss';
import { User } from '../../types/user';
import { getUserById } from '../../api/api';

type Props = {
  userId: number;
};

export const CurrentUser: React.FC<Props> = ({ userId }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getUserById(userId)
      .then(userFromServer => {
        setUser(userFromServer);
        setLoading(false);
      });
  }, [userId]);

  return (
    <div className="CurrentUser">
      <h2 className="CurrentUser__title">
        <span>
          Selected user:
          &nbsp;
          {userId}
        </span>
      </h2>

      {loading ? 'Loading...' : (
        <>
          <h3 className="CurrentUser__name">{user?.name}</h3>
          <p className="CurrentUser__email">{user?.email}</p>
          <p className="CurrentUser__phone">{user?.phone}</p>
        </>
      )}
    </div>
  );
};

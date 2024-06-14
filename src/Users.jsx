import React, { useEffect, useState } from 'react';
import { useLoading } from './Load';

const Users = () => {
  const [users, setUsers] = useState([]);
  const { setLoading } = useLoading();

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      
  }, [setLoading]);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <a href={`/user/${user.id}`}>{user.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;

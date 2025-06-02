import React, { useEffect, useState } from 'react';

function UserList({ searchTerm }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect with dependency on searchTerm
//syntax for useEffect
// useEffect(() => {
//   // side effect code here
// }, [dependencies]);


  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        // filter users by name matching searchTerm
        const filtered = data.filter((user) =>
            //start with searchTerm
          user.name.toLowerCase().startsWith(searchTerm.toLowerCase())
        );
        setUsers(filtered);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        setLoading(false);
      });
  }, [searchTerm]); // Runs every time searchTerm changes

  return (
    <div>
      {loading ? (
        <p>Loading users...</p>
      ) : users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul className="space-y-2">
          {users.map((user) => (
            <li key={user.id} className="p-3 border rounded">
              <strong>{user.name}</strong><br />
              <span className="text-sm text-gray-600">{user.email}</span><br />
              <span className="text-sm text-gray-600">{user.address.city}</span>

            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;
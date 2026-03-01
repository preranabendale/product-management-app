import React, { useState, useEffect } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);

  // Load users from LocalStorage on page load
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  // Add or update user when product viewed
  const addOrUpdateUser = (user) => {
    let updatedUsers = [...users];
    const index = updatedUsers.findIndex(u => u.id === user.id);

    if(index !== -1){
      // User already exists, update lastViewed
      updatedUsers[index] = { ...updatedUsers[index], lastViewed: new Date().toLocaleString() };
    } else {
      // New user
      updatedUsers.push({ ...user, lastViewed: new Date().toLocaleString() });
    }

    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  // Delete user from the list
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Kya aap sure ho delete karna chahte ho?");
    if(confirmDelete){
      const updatedUsers = users.filter(u => u.id !== id);
      setUsers(updatedUsers);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
    }
  };

  return (
    <div>
      <h3>Users Section</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Last Viewed</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 && <tr><td colSpan="4">No users yet</td></tr>}
          {users.map(u => (
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.lastViewed}</td>
              <td>
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(u.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
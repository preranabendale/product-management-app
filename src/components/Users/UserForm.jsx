import React, { useState, useEffect } from "react";

const UserForm = ({ onSave, user }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("user");

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setRole(user.role);
    } else {
      setName("");
      setEmail("");
      setRole("user");
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: user ? user.id : Date.now(),
      name,
      email,
      role,
      lastViewed: user?.lastViewed || "-"
    };

    onSave(newUser);
  };

  return (
    <form onSubmit={handleSubmit} className="card p-3 shadow mb-4">
      <h5>{user ? "Edit User" : "Add User"}</h5>

      <input
        type="text"
        className="form-control mb-2"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="email"
        className="form-control mb-2"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <select
        className="form-control mb-2"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>

      <button type="submit" className="btn btn-success">
        {user ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default UserForm;
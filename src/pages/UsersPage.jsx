import React, { useState, useEffect } from "react";
import Navbar from "../components/Layout/Navbar";
import Sidebar from "../components/Layout/Sidebar";
import Footer from "../components/Layout/Footer";

const UsersPage = () => {
  const role = localStorage.getItem("role"); 
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);

 
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setUsers(storedUsers);
    setOrders(storedOrders);
  }, []);

  if (role !== "admin") {
    return (
      <h2 className="text-center mt-5 text-danger">
        Access Denied - Admin Only
      </h2>
    );
  }

  
  const getProductsOrdered = (userId) => {
    const userOrders = orders.filter(o => String(o.userId) === String(userId));
    if (userOrders.length === 0) return "No Orders";
    return userOrders.map(o => o.productName).join(", ");
  };

  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      <Navbar />
      <div className="d-flex flex-grow-1">
    
        <div style={{ width: "240px", position: "fixed", height: "100vh", zIndex: 100 }}>
          <Sidebar role={role} />
        </div>

    
        <div style={{ marginLeft: "240px", padding: "30px", width: "100%" }}>
          <h2 className="fw-bold mb-4 text-center text-primary">Users & Their Orders</h2>

          <div className="card shadow-lg p-4 rounded-4 bg-white">
            <div className="table-responsive">
              <table className="table table-striped table-hover align-middle">
                <thead className="table-dark">
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Total Orders</th>
                    <th>Products Ordered</th>
                    <th>Last Viewed</th>
                  </tr>
                </thead>
                <tbody>
                  {users.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="text-center">No users found</td>
                    </tr>
                  ) : (
                    users.map(user => {
                      const userOrders = orders.filter(o => String(o.userId) === String(user.id));
                      return (
                        <tr key={user.id} className={loggedInUser?.id === user.id ? "table-info" : ""}>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>{userOrders.length}</td>
                          <td>{getProductsOrdered(user.id)}</td>
                          <td>{user.lastViewed || "-"}</td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UsersPage;
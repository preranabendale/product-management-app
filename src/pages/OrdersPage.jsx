import React, { useState, useEffect } from "react";
import Navbar from "../components/Layout/Navbar";
import Sidebar from "../components/Layout/Sidebar";
import Footer from "../components/Layout/Footer"; 

const OrdersPage = ({ role }) => {
  const [view, setView] = useState("table");
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  const updateOrderStatus = (orderId, newStatus) => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  const filteredOrders = orders.filter((order) => {
    const matchSearch =
      order.name?.toLowerCase().includes(search.toLowerCase()) ||
      order.productName?.toLowerCase().includes(search.toLowerCase());
    const matchStatus = status === "All" || order.status === status;
    return matchSearch && matchStatus;
  });

  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
     
      <Navbar />

      <div className="d-flex flex-grow-1">
        
        <div
          className="bg-light border-end"
          style={{
            width: "240px",
            position: "fixed",
            top: "70px",
            height: "calc(100vh - 70px)",
            zIndex: 100,
            overflowY: "auto",
          }}
        >
          <Sidebar role={role} />
        </div>

       
        <div
          className="container-fluid flex-grow-1"
          style={{
            marginLeft: "240px",
            marginTop: "80px",
            padding: "2rem",
          }}
        >
          <h2 className="fw-bold mb-4 text-center">My Orders</h2>

          
          <div className="row mb-4 g-2">
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Search by Name or Product"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="col-md-3">
              <select
                className="form-select"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="All">All Status</option>
                <option value="Pending">Pending</option>
                <option value="Delivered">Delivered</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>

            <div className="col-md-3">
              <button
                className="btn btn-outline-secondary"
                onClick={() => setView(view === "table" ? "card" : "table")}
              >
                Switch to {view === "table" ? "Card View" : "Table View"}
              </button>
            </div>
          </div>

          
          {view === "table" ? (
            <div className="table-responsive shadow-sm rounded">
              <table className="table table-hover table-bordered align-middle mb-0">
                <thead className="table-dark">
                  <tr>
                    <th>ID</th>
                    <th>Product</th>
                    <th>Name</th>
                    <th>City</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.map((order) => (
                    <tr key={order.id}>
                      <td>{order.id}</td>
                      <td>{order.productName}</td>
                      <td>{order.name}</td>
                      <td>{order.city}</td>
                      <td>{order.quantity}</td>
                      <td>₹ {order.total}</td>
                      <td>
                        {role === "admin" ? (
                          <select
                            className="form-select form-select-sm"
                            value={order.status}
                            onChange={(e) =>
                              updateOrderStatus(order.id, e.target.value)
                            }
                          >
                            <option value="Pending">Pending</option>
                            <option value="Delivered">Delivered</option>
                            <option value="Cancelled">Cancelled</option>
                          </select>
                        ) : (
                          <span
                            className={`badge px-2 py-1 text-uppercase ${
                              order.status === "Pending"
                                ? "bg-warning text-dark"
                                : order.status === "Delivered"
                                ? "bg-success"
                                : "bg-danger"
                            }`}
                          >
                            {order.status}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="row g-4">
              {filteredOrders.map((order) => (
                <div className="col-md-6 col-lg-4" key={order.id}>
                  <div className="card shadow-sm h-100 rounded-4 border-0 p-3">
                    <h5 className="fw-bold text-primary">{order.productName}</h5>
                    <p className="mb-1">
                      <strong>Name:</strong> {order.name}
                    </p>
                    <p className="mb-1">
                      <strong>City:</strong> {order.city}
                    </p>
                    <p className="mb-1">
                      <strong>Quantity:</strong> {order.quantity}
                    </p>
                    <p className="mb-1">
                      <strong>Total:</strong> ₹ {order.total}
                    </p>

                    {role === "admin" ? (
                      <select
                        className="form-select form-select-sm mt-2"
                        value={order.status}
                        onChange={(e) =>
                          updateOrderStatus(order.id, e.target.value)
                        }
                      >
                        <option value="Pending">Pending</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    ) : (
                      <span
                        className={`badge mt-2 px-2 py-1 text-uppercase ${
                          order.status === "Pending"
                            ? "bg-warning text-dark"
                            : order.status === "Delivered"
                            ? "bg-success"
                            : "bg-danger"
                        }`}
                      >
                        {order.status}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

 
      <Footer />
    </div>
  );
};

export default OrdersPage;
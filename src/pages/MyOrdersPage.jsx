import React, { useEffect, useState } from "react";
import Navbar from "../components/Layout/Navbar";
import Sidebar from "../components/Layout/Sidebar";
import Footer from "../components/Layout/Footer";

const MyOrdersPage = ({ role }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      
      <Navbar />

      <div className="d-flex">
        
        <div
          style={{
            width: "240px",
            position: "fixed",
            top: "70px", 
            height: "calc(100vh - 70px)",
            zIndex: 100,
            overflowY: "auto",
            backgroundColor: "#fff",
            borderRight: "1px solid #dee2e6",
          }}
        >
          <Sidebar role={role} />
        </div>

       
        <div
          className="container-fluid"
          style={{
            marginLeft: "240px",
            marginTop: "80px",
            padding: "30px",
            minHeight: "100vh",
          }}
        >
          <h2 className="fw-bold text-center mb-4">My Orders</h2>

          {orders.length === 0 ? (
            <h5 className="text-muted text-center mt-5">No Orders Yet</h5>
          ) : (
            <div className="row g-4">
              {orders.map((order) => (
                <div className="col-md-6" key={order.id}>
                  <div
                    className="card shadow-sm rounded-4 h-100"
                    style={{
                      transition: "all 0.3s",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "translateY(-5px)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "translateY(0)")
                    }
                  >
                    {/* Product Image */}
                    {order.image && (
                      <img
                        src={order.image}
                        alt={order.productName}
                        className="card-img-top rounded-top"
                        style={{ height: "200px", objectFit: "cover" }}
                      />
                    )}

                    <div className="card-body">
                      <h5 className="fw-bold text-primary">
                        {order.productName}
                      </h5>

                      <p className="mb-1">Price: ₹ {order.price}</p>
                      <p className="mb-1">Quantity: {order.quantity}</p>
                      <p className="mb-1">Total: ₹ {order.total}</p>

                      <hr className="my-2" />

                      <h6 className="fw-bold">Shipping Details</h6>
                      <p className="mb-1">Name: {order.name}</p>
                      <p className="mb-1">Mobile: {order.mobile}</p>
                      <p className="mb-1">City: {order.city}</p>
                      <p className="mb-1">Address: {order.address}</p>

                      <span
                        className={`badge mt-2 ${
                          order.status === "Delivered"
                            ? "bg-success"
                            : order.status === "Pending"
                            ? "bg-warning text-dark"
                            : "bg-danger"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
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

export default MyOrdersPage;
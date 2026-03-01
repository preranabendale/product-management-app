import React from "react";
import Footer from "../../components/Layout/Footer";

export default function OurFeatures() {
  return (
    <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
      
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: "#6f42c1" }}>Our Key Features</h2>
          <p className="text-muted" style={{ maxWidth: "700px", margin: "0 auto" }}>
            Enterprise-ready and scalable solutions for modern businesses.
          </p>
        </div>

       
        <div className="row g-4">
          
          <div className="col-md-4">
        <div
              className="card shadow-sm border-0 text-center p-4 h-100 hover-shadow"
              style={{
                borderRadius: "15px",
                transition: "transform 0.3s",
                background: "linear-gradient(145deg, #ffffff, #e7f1ff)"
              }}
            >
              <div
                className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle"
                style={{ width: "80px", height: "80px", backgroundColor: "#0d6efd1a", fontSize: "2rem" }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  alt="Product Management"
                  style={{ width: "40px" }}
                />
              </div>
              <h5 className="fw-bold mt-3">Product Management</h5>
              <p className="text-muted">
                Easily add, update and manage your stock products efficiently.
              </p>
            </div>
          </div>

        
          <div className="col-md-4">
            <div
              className="card shadow-sm border-0 text-center p-4 h-100 hover-shadow"
              style={{
                borderRadius: "15px",
                transition: "transform 0.3s",
                background: "linear-gradient(145deg, #ffffff, #e6f4ea)"
              }}
            >
              <div
                className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle"
                style={{ width: "80px", height: "80px", backgroundColor: "#28a7451a", fontSize: "2rem" }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1828/1828804.png"
                  alt="Order Tracking"
                  style={{ width: "40px" }}
                />
              </div>
              <h5 className="fw-bold mt-3">Order Tracking</h5>
              <p className="text-muted">
                Track customer orders and update status in real-time.
              </p>
            </div>
          </div>

        
          <div className="col-md-4">
            <div
              className="card shadow-sm border-0 text-center p-4 h-100 hover-shadow"
              style={{
                borderRadius: "15px",
                transition: "transform 0.3s",
                background: "linear-gradient(145deg, #ffffff, #fff3cd)"
              }}
            >
              <div
                className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle"
                style={{ width: "80px", height: "80px", backgroundColor: "#ffc1071a", fontSize: "2rem" }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
                  alt="User Management"
                  style={{ width: "40px" }}
                />
              </div>
              <h5 className="fw-bold mt-3">User Management</h5>
              <p className="text-muted">
                Role-based login system for Admin and Users.
              </p>
            </div>
          </div>
        </div>
      </div>

     
      <style>
        {`
          .hover-shadow:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
          }
        `}
      </style>
      <Footer></Footer>
    </section>
  );
}
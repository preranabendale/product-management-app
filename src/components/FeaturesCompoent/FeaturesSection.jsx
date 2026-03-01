import React from "react";
import Footer from "../../components/Layout/Footer";

export default function FeaturesSection() {
  const features = [
    { icon: "\u{1F4E6}", title: "Product Management", description: "Add, update, delete, and track products in your inventory.", color: "#0d6efd" },
    { icon: "\u{1F4CA}", title: "Stock Monitoring", description: "Keep track of stock levels, low stock alerts, and availability.", color: "#198754" },
    { icon:  "\u{1F465}", title: "User & Role Management", description: "Admin can add users, assign roles, and control system access.", color: "#dc3545" },
    { icon: "\u{1F6D2}", title: "Order Management", description: "Process, manage, and track all customer orders efficiently.", color: "#ffc107" },
    { icon: "\u{1F4C8}", title: "Reports & Analytics", description: "View sales reports, stock history, and dashboard statistics.", color: "#0dcaf0" },
    { icon: "\u{1F514}", title: "Alerts & Notifications", description: "Get notifications for low stock, new orders, and critical updates.", color: "#6c757d" },
  ];

  return (
    <section className="py-5" style={{ backgroundColor: "#c8e0f993" }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: "#6f42c1" }}>Project Features</h2>
          <p className="text-muted">Our Stock Management System provides these powerful tools to streamline your workflow.</p>
        </div>

        <div className="row g-4">
          {features.map((feature, idx) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={idx}>
              <div
                className="card h-100 shadow-sm border-0 text-center p-4 feature-card"
                style={{
                  borderRadius: "15px",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  background: "#fff",
                }}
              >
                
                <div
                  className="d-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${feature.color}33, ${feature.color}99)`,
                    fontSize: "2rem",
                    margin: "0 auto",
                    color: "#fff",
                    boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
                    transition: "transform 0.3s",
                  }}
                >
                  {feature.icon}
                </div>

                
                <h5 className="fw-bold mt-3">{feature.title}</h5>
                <p className="text-muted">{feature.description}</p>

               
                <style>
                  {`
                    .feature-card:hover {
                      transform: translateY(-10px);
                      box-shadow: 0 15px 25px rgba(0,0,0,0.25);
                    }
                    .feature-card:hover .d-flex {
                      transform: scale(1.1);
                    }
                  `}
                </style>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
}
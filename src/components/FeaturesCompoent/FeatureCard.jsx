import React from "react";

export default function FeatureCard({ icon, title, description, color }) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
      <div className="card h-100 shadow-sm border-0 feature-card text-center p-4" style={{ borderRadius: "12px", transition: "transform 0.3s, box-shadow 0.3s" }}>
        
        
        <div
          className="icon-circle d-flex align-items-center justify-content-center mb-3"
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background: color,
            color: "white",
            fontSize: "2rem",
            margin: "0 auto",
            boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
            transition: "transform 0.3s",
          }}
        >
          {icon}
        </div>

        <h5 className="fw-bold">{title}</h5>
        <p className="text-muted">{description}</p>
      </div>
    </div>
  );
}
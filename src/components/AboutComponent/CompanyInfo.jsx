import React from "react";

export default function CompanyInfo() {
  return (
    <section className="py-5" style={{ backgroundColor: "#add0f353" }}>
      <div className="container">
        
        <h2 className="text-center fw-bold mb-4" style={{ color: "#6f42c1" }}>
          Why Choose Our System?
        </h2>
        <p className="text-center text-muted mb-5" style={{ maxWidth: "700px", margin: "0 auto" }}>
          Our Stock Management System is designed to make your inventory process fast, accurate, and hassle-free.
        </p>

    
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card shadow-sm border-0 text-center p-4 h-100 hover-shadow" style={{ borderRadius: "15px", transition: "transform 0.3s" }}>
              <div className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle" style={{ width: "80px", height: "80px", backgroundColor: "#e7f1ff", fontSize: "2rem" }}>
                ⏱️
              </div>
              <h5 className="fw-bold mt-3">Saves Time</h5>
              <p className="text-muted">
                Quickly manage products and orders without manual hassle.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm border-0 text-center p-4 h-100 hover-shadow" style={{ borderRadius: "15px", transition: "transform 0.3s" }}>
              <div className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle" style={{ width: "80px", height: "80px", backgroundColor: "#e6f4ea", fontSize: "2rem" }}>
                ✅
              </div>
              <h5 className="fw-bold mt-3">Reduces Errors</h5>
              <p className="text-muted">
                Automatic updates keep your inventory accurate and error-free.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm border-0 text-center p-4 h-100 hover-shadow" style={{ borderRadius: "15px", transition: "transform 0.3s" }}>
              <div className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle" style={{ width: "80px", height: "80px", backgroundColor: "#fff3cd", fontSize: "2rem" }}>
                📈
              </div>
              <h5 className="fw-bold mt-3">Improves Decisions</h5>
              <p className="text-muted">
                Real-time reports and insights help you make smarter business choices.
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
    </section>
  );
}
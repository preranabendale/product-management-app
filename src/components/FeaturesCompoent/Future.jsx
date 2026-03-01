import React from "react";

export default function Future() {
  const futureFeatures = [
    {
      icon: "\u{1F3F7}", 
      title: "Barcode / QR Integration",
      description: "Scan products quickly for easy stock management.",
      gradient: "linear-gradient(135deg, #6f42c1, #0d6efd)"
    },
    {
      icon: "\u{1F4F1}", 
      title: "Mobile App Integration",
      description: "Manage stock anytime, anywhere on mobile devices.",
      gradient: "linear-gradient(135deg, #20c997, #0dcaf0)"
    },
    {
      icon: "\u{1F916}", 
      title: "AI-Powered Predictions",
      description: "Predict stock shortages or high-demand items automatically.",
      gradient: "linear-gradient(135deg, #ffc107, #fd7e14)"
    }
  ];

  return (
    <section className="py-5" style={{ backgroundColor: "#b5d4f398" }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Future Features</h2>
          <p className="text-muted">Exciting upcoming updates to make the system smarter and faster</p>
        </div>

        <div className="row g-4">
          {futureFeatures.map((feature, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="card h-100 shadow-sm text-center p-4"
                style={{
                  borderRadius: "12px",
                  transition: "transform 0.3s, box-shadow 0.3s",
                }}
              >
               
                <div
                  className="d-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background: feature.gradient,
                    color: "#fff",
                    fontSize: "2rem",
                    margin: "0 auto",
                    boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
                    transition: "transform 0.3s",
                  }}
                >
                  {feature.icon}
                </div>

                <h5 className="fw-bold">{feature.title}</h5>
                <p className="text-muted">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <style>
          {`
            .card:hover {
              transform: translateY(-10px);
              box-shadow: 0 12px 25px rgba(0,0,0,0.25);
            }
          `}
        </style>
      </div>
    </section>
  );
}
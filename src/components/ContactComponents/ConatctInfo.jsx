import React, { useState } from "react";

const ContactInfo = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const infoData = [
    {
      icon: "\u{1F4CD}",
      title: "Our Location",
      description: "SSBT College, Jalgaon, Maharashtra, India",
      color: "linear-gradient(135deg, #0d6efd, #6f42c1)",
    },
    {
      icon: "\u2709\uFE0F",
      title: "Email Us",
      description: "support@yourproject.com",
      color: "linear-gradient(135deg, #20c997, #0dcaf0)",
    },
    {
      icon: "\u{1F4DE}",
      title: "Call Us",
      description: "+91 98765 43210",
      color: "linear-gradient(135deg, #ffc107, #fd7e14)",
    },
  ];

  return (
    <section
      className="py-5"
      style={{ backgroundColor: "#f8f9fa", marginTop: "80px" }} 
    >
      <div className="container">
        <div className="row text-center g-4">
          {infoData.map((item, index) => (
            <div key={index} className="col-md-4">
              <div
                className="card shadow border-0 p-4 h-100"
                style={{
                  borderRadius: "12px",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  transform:
                    hoverIndex === index ? "translateY(-8px)" : "translateY(0)",
                  boxShadow:
                    hoverIndex === index
                      ? "0 12px 25px rgba(0,0,0,0.25)"
                      : "0 4px 12px rgba(0,0,0,0.1)",
                  cursor: "pointer",
                }}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
               
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    margin: "0 auto",
                    borderRadius: "50%",
                    background: item.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "2rem",
                    boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
                  }}
                >
                  {item.icon}
                </div>

                <h5 className="fw-bold mt-3">{item.title}</h5>
                <p className="text-muted">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
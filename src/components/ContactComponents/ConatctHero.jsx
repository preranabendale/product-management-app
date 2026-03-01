import React, { useState } from "react";

const ContactHero = () => {
  // State for button hover effect
  const [hover, setHover] = useState(false);

  return (
    <section
      className="text-white py-5"
      style={{
        background: "linear-gradient(135deg, #0d6efd, #6f42c1)", // gradient bg
      }}
    >
      <div className="container text-center">
        {/* Title */}
        <h1 className="fw-bold display-5">Get In Touch With Us</h1>

        {/* Subtitle */}
        <p className="lead mt-3 mb-4">
          Have questions, feedback, or project inquiries? 
          We would love to hear from you.
        </p>

        {/* Button with inline hover effect */}
        <a
          href="#contactForm"
          className="btn btn-light fw-bold rounded-pill px-5 shadow"
          style={{
            transition: "all 0.3s ease",
            transform: hover ? "translateY(-4px)" : "translateY(0)",
            boxShadow: hover
              ? "0 8px 20px rgba(0,0,0,0.3)"
              : "0 4px 12px rgba(0,0,0,0.2)",
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Contact Now
        </a>
      </div>
    </section>
  );
};

export default ContactHero;
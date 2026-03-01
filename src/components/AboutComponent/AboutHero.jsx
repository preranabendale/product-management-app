import React from "react";

import { FcAbout } from "react-icons/fc";

export default function AboutHero() {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="row align-items-center">
          
       
          <div className="col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
            <h1 className="fw-bold display-5 mb-3">
              About Our <span className="text-primary">Stock Management System</span>
            </h1>
            <p className="lead text-muted mb-4">
              A powerful and user-friendly platform designed to manage products,
              orders, users, and inventory efficiently with real-time tracking.
            </p>
            <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
              
           <a href="#contact" className="btn btn-outline-dark px-4">
  Contact Us
</a>
            </div>
          </div>

          <div className="col-lg-6 text-center">
            <img
              src="about.jpg"
              alt="About Illustration"
              className="img-fluid rounded shadow"
              style={{ maxHeight: "350px" }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
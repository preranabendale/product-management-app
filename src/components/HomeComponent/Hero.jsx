import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";
import hero1 from "../../assets/image/hero1.jpg";
import hero2 from "../../assets/image/hero2.jpg";
import hero3 from "../../assets/image/hero3.jpg";
import Footer from "../../components/Layout/Footer";

export default function Hero() {
  const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current) {
      new bootstrap.Carousel(carouselRef.current, {
        interval: 2000, 
        ride: "carousel",
        pause: false,
      });
    }
  }, []);

  return (
    <div style={{ backgroundColor: "#6e42c1c4" }}> 
      <div
        ref={carouselRef}
        className="carousel slide py-5"
        id="carouselExampleSlidesOnly"
        style={{ borderRadius: "15px" }}
      >
        <div className="carousel-inner" style={{ borderRadius: "15px" }}>
          <div className="carousel-item active" style={{ backgroundColor: "#6f42c1" }}>
            <img
              src={hero1}
              className="d-block w-100"
              alt="Slide 1"
              style={{ height: "500px", objectFit: "cover", borderRadius: "15px" }}
            />
          </div>
          <div className="carousel-item" style={{ backgroundColor: "#6f42c1" }}>
            <img
              src={hero2}
              className="d-block w-100"
              alt="Slide 2"
              style={{ height: "500px", objectFit: "cover", borderRadius: "15px" }}
            />
          </div>
          <div className="carousel-item" style={{ backgroundColor: "#6f42c1" }}>
            <img
              src={hero3}
              className="d-block w-100"
              alt="Slide 3"
              style={{ height: "500px", objectFit: "cover", borderRadius: "15px" }}
            />
          </div>
        </div>
      </div>

      
      <div style={{ backgroundColor: "#ffffff" }} className="py-5">
        <div className="container text-center">
          <h1 className="display-3 fw-bold text-primary">Stock Management System</h1>
          <p className="lead text-secondary mt-3">
            Manage products, orders, and users easily in one powerful dashboard. Fast, secure, and user-friendly.
          </p>
          <div className="mt-4">
            <NavLink
              to="/login"
              className="btn btn-lg me-3 shadow"
              style={{ 
                background: "linear-gradient(45deg, #0d6efd, #1e90ff)", 
                color: "#fff", 
                border: "none", 
                transition: "all 0.3s"
              }}
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="btn btn-lg shadow"
              style={{ 
                border: "2px solid #0d6efd", 
                color: "#0d6efd", 
                background: "#fff",
                transition: "all 0.3s"
              }}
            >
              Register
            </NavLink>
          </div>
        </div>
      </div>

      <Footer></Footer>

    </div>
  );
}
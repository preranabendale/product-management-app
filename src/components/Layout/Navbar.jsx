import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark shadow py-3 fixed-top"
      style={{
        background: "linear-gradient(135deg, #0d6efd, #6f42c1)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
      }}
    >
      <div className="container-fluid px-5">

      
        <NavLink
          className="navbar-brand d-flex align-items-center fw-bold fs-4"
          to="/"
          style={{
            color: "white",
            padding: "5px 15px",
            borderRadius: "12px",
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
            alt="logo"
            width="45"
            height="45"
            className="me-3 rounded-circle border border-light"
            style={{ objectFit: "cover" }}
          />
          Stock Management System
        </NavLink>

     
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">

            {["/", "/about", "/feature", "/contact", "/Login_Page"].map((path, idx) => {
              const names = ["Home", "About", "Features", "Contact", "Login"];
              return (
                <li className="nav-item" key={idx}>
                  <NavLink
                    className="nav-link mx-2"
                    to={path}
                    style={({ isActive }) => ({
                      color: isActive ? "#ffd700" : "white",
                      fontWeight: isActive ? "600" : "500",
                      transition: "all 0.3s",
                    })}
                  >
                    {names[idx]}
                  </NavLink>
                </li>
              );
            })}

            <li className="nav-item">
              <NavLink
                className="btn btn-light text-primary fw-semibold ms-3 px-4 rounded-pill"
                to="/Registration"
                style={{ transition: "all 0.3s" }}
              >
                Register
              </NavLink>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}
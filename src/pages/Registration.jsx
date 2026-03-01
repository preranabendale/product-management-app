import React from "react";
import Navbar from "../components/Layout/Navbar";
import { useNavigate } from "react-router-dom";
import bgImage from "/bg.jpg";

function Registration() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.fullname.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    let existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    if (existingUsers.find((u) => u.email === email)) {
      alert("This email is already registered. Try login.");
      return;
    }

    const newUser = { id: Date.now(), name, email, password, role: "user" };
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    alert("Registration Successful! You can now login.");

    navigate("/login");
  };

  return (
    <div>
      {/* Navbar added here */}
      <Navbar />

      {/* Registration Form */}
      <div
        className="vh-100 d-flex justify-content-center align-items-center position-relative"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="position-absolute w-100 h-100"
          style={{
            backgroundColor: "rgba(255,255,255,0.6)",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        ></div>

        <div
          className="card shadow-lg p-4 border-0 rounded-4"
          style={{ maxWidth: "450px", width: "100%", zIndex: 2, backgroundColor: "white" }}
        >
          <div className="text-center mb-4">
            <h3 className="fw-bold text-primary">Create Account</h3>
            <p className="text-muted">Register for Stock Management System</p>
          </div>

          <form onSubmit={handleRegister}>
            <div className="form-floating mb-3">
              <input
                type="text"
                name="fullname"
                className="form-control"
                id="floatingName"
                placeholder="Full Name"
                required
              />
              <label htmlFor="floatingName">Full Name</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="email"
                name="email"
                className="form-control"
                id="floatingEmail"
                placeholder="name@example.com"
                required
              />
              <label htmlFor="floatingEmail">Email address</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="password"
                name="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                required
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="password"
                name="confirmPassword"
                className="form-control"
                id="floatingConfirmPassword"
                placeholder="Confirm Password"
                required
              />
              <label htmlFor="floatingConfirmPassword">Confirm Password</label>
            </div>

            <div className="d-grid mb-3">
              <button type="submit" className="btn btn-success btn-lg fw-bold">
                Register
              </button>
            </div>

            <div className="text-center">
              <small>
                Already have an account?{" "}
                <span
                  className="text-primary fw-bold"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/login")}
                >
                  Login
                </span>
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;
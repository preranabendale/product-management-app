import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Layout/Navbar";
import bgImage from "/hero3.jpg";

function Login_Page({ setRole }) {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

   
    if (email === "admin@gmail.com" && password === "admin123") {
      const adminUser = {
        id: "admin",
        name: "Admin",
        email: email,
        role: "admin",
      };

      localStorage.setItem("loggedInUser", JSON.stringify(adminUser));
      localStorage.setItem("role", "admin");

      setRole("admin");
      navigate("/dashboard");
      return;
    }

    let existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    const user = existingUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      localStorage.setItem("role", "user");

      setRole("user");
      navigate("/dashboard");
    } else {
      alert("Invalid email or password. Please register or check your credentials.");
    }
  };

  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
     
      <Navbar />

      
      <div
        className="d-flex justify-content-center align-items-center position-relative"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "calc(100vh - 70px)", 
          paddingTop: "70px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(255,255,255,0.6)",
            zIndex: 0,
          }}
        ></div>

        
        <div
          className="card p-5 shadow-sm rounded-4"
          style={{
            width: "380px",
            backgroundColor: "white",
            zIndex: 2,
            position: "relative",
          }}
        >
          <h3 className="text-center mb-4 fw-bold text-primary">Login</h3>

          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <input
                name="email"
                type="email"
                className="form-control form-control-lg rounded-3"
                placeholder="Enter Email"
                required
              />
            </div>

            <div className="mb-4">
              <input
                name="password"
                type="password"
                className="form-control form-control-lg rounded-3"
                placeholder="Enter Password"
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100 btn-lg fw-bold shadow-sm"
            >
              Login
            </button>
          </form>

          <p className="text-center mt-3 text-muted">
            Don't have an account?{" "}
            <span
              className="text-primary fw-bold"
              style={{ cursor: "pointer" }}
              onClick={goToRegister}
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login_Page;
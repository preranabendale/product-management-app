import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FaTachometerAlt, 
  FaBox, 
  FaShoppingCart, 
  FaUsers, 
  FaChartLine,
  FaSignOutAlt
} from 'react-icons/fa';

const Sidebar = ({ role }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("role");
    navigate("/login");
    window.location.reload();
  };

  return (
    <div 
      className="bg-dark text-white vh-100 p-3"
      style={{
        width: '220px',
        position: 'fixed',
        top: '70px',          
        left: 0,
        overflowY: 'auto',    
      }}
    >
      
      <h5 className="text-center mb-4">
        {role === "admin" ? "Admin Panel" : "User Panel"}
      </h5>

      <ul className="nav flex-column">

        <li className="nav-item mb-3">
          <Link to="/dashboard" className="nav-link text-white">
            <FaTachometerAlt className="me-2" />
            Dashboard
          </Link>
        </li>

        <li className="nav-item mb-3">
          <Link to="/products" className="nav-link text-white">
            <FaBox className="me-2" />
            Products
          </Link>
        </li>

        {role === "admin" && (
          <li className="nav-item mb-3">
            <Link to="/orders" className="nav-link text-white">
              <FaShoppingCart className="me-2" />
              Orders
            </Link>
          </li>
        )}

        {role === "user" && (
          <li className="nav-item mb-3">
            <Link to="/my-orders" className="nav-link text-white">
              <FaShoppingCart className="me-2" />
              My Orders
            </Link>
          </li>
        )}

        {role === "admin" && (
          <>
            <li className="nav-item mb-3">
              <Link to="/users" className="nav-link text-white">
                <FaUsers className="me-2" />
                Users
              </Link>
            </li>

            <li className="nav-item mb-3">
              <Link to="/reports" className="nav-link text-white">
                <FaChartLine className="me-2" />
                Reports
              </Link>
            </li>
          </>
        )}

        <li className="nav-item mt-4">
          <button 
            className="btn btn-danger w-100"
            onClick={handleLogout}
          >
            <FaSignOutAlt className="me-2" />
            Logout
          </button>
        </li>

      </ul>
    </div>
  );
};

export default Sidebar;
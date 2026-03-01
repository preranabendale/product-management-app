import React, { useEffect, useState } from 'react';
import DashboardCard from '../components/Dashboard/DashboardCard';
import DashboardChart from '../components/Dashboard/DashboardChart';
import Sidebar from '../components/Layout/Sidebar';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import { FaBox, FaShoppingCart, FaUsers } from 'react-icons/fa';

const DashboardPage = ({ role }) => {
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);

  const loadCounts = () => {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    const users = JSON.parse(localStorage.getItem("users")) || [];

    setTotalProducts(products.length);
    setTotalOrders(orders.length);
    setTotalUsers(users.length);
  };

  
  useEffect(() => {
    loadCounts();

    const handleStorageChange = () => loadCounts();
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <div className="d-flex flex-column" style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <Navbar />
      <div className="d-flex flex-grow-1">
        <Sidebar role={role} />
        <div style={{ marginLeft: '240px', padding: '30px', width: '100%' }}>
          <h2 className="mb-4 text-primary fw-bold">
            {role === "admin" ? "Admin Dashboard" : "User Dashboard"}
          </h2>

          <div className="row g-4">
            <DashboardCard title="Total Products" value={totalProducts} icon={<FaBox />} bgColor="bg-primary" shadow="shadow-lg" />
            <DashboardCard title="Total Orders" value={totalOrders} icon={<FaShoppingCart />} bgColor="bg-success" shadow="shadow-lg" />
            {role === "admin" && <DashboardCard title="Total Users" value={totalUsers} icon={<FaUsers />} bgColor="bg-warning" shadow="shadow-lg" />}
          </div>

          <div className="mt-4 card shadow-lg p-4 rounded-4 bg-white">
            <DashboardChart totalProducts={totalProducts} totalOrders={totalOrders} totalUsers={totalUsers} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardPage;
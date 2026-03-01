import React from "react";
import Navbar from "../components/Layout/Navbar";
import Sidebar from "../components/Layout/Sidebar";
import Footer from "../components/Layout/Footer";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from "recharts";

const ReportsPage = ({ role }) => {

  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  const totalRevenue = orders.reduce(
    (sum, order) => sum + order.price * order.quantity,
    0
  );

  const categoryData = {};
  const productData = {};

  orders.forEach((order) => {
    const cat = order.category || "Other";

    if (!categoryData[cat]) categoryData[cat] = 0;
    categoryData[cat] += order.price * order.quantity;

    if (!productData[order.productName])
      productData[order.productName] = 0;
    productData[order.productName] += order.quantity;
  });

  const pieData = Object.entries(categoryData).map(([key, value]) => ({
    name: key,
    value: value
  }));

  const barData = Object.entries(productData).map(([key, value]) => ({
    name: key,
    quantity: value
  }));

  const COLORS = ["#4e73df", "#1cc88a", "#f6c23e", "#e74a3b"];

  return (
    <div className="d-flex" style={{ minHeight: "100vh", backgroundColor: "#f8f9fc" }}>

      <Navbar />

     
      <div style={{ width: "240px", position: "fixed", height: "100vh", zIndex: 100 }}>
        <Sidebar role={role} />
      </div>

      <div
        className="container py-5"
        style={{ marginLeft: "240px", width: "100%" }}
      >

        <h2 className="fw-bold mb-4 text-center">Reports Dashboard</h2>

    
        <div className="row mb-4">
          <div className="col-md-6 mb-3">
            <div className="card shadow border-0 text-center p-4 bg-primary text-white">
              <h5>Total Orders</h5>
              <h2>{orders.length}</h2>
            </div>
          </div>

          <div className="col-md-6 mb-3">
            <div className="card shadow border-0 text-center p-4 bg-success text-white">
              <h5>Total Revenue</h5>
              <h2>₹ {totalRevenue}</h2>
            </div>
          </div>
        </div>

     
        <div className="row">

          
          <div className="col-md-6 mb-4">
            <div className="card shadow border-0 p-4">
              <h5 className="text-center mb-3 text-primary">Product Sales</h5>

              {barData.length === 0 ? (
                <p className="text-center text-muted">
                  No product sales data
                </p>
              ) : (
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={barData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="quantity" fill="#4e73df" />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>

          
          <div className="col-md-6 mb-4">
            <div className="card shadow border-0 p-4">
              <h5 className="text-center mb-3 text-success">Category Sales</h5>

              {pieData.length === 0 ? (
                <p className="text-center text-muted">
                  No category data available
                </p>
              ) : (
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      dataKey="value"
                      outerRadius={100}
                      label
                    >
                      {pieData.map((entry, index) => (
                        <Cell
                          key={index}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>

        </div>

        <Footer />

      </div>
    </div>
  );
};

export default ReportsPage;
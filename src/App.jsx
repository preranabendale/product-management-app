import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Feature from "./pages/Feature";
import Contact from "./pages/Contact";
import Login_Page from "./pages/Login_Page";
import Registration from "./pages/Registration";

import DashboardPage from "./pages/DashboardPage";
import ProductsPage from "./pages/ProductsPage";
import OrdersPage from "./pages/OrdersPage";
import UsersPage from "./pages/UsersPage";
import UserOrderPage from "./pages/UserOrderPage";
import MyOrdersPage from "./pages/MyOrdersPage";
import Navbar from "./components/Layout/Navbar";
import AdminOrders from "./components/Orders/AdminOrders";
import AddProductForm from "./components/Products/AddProductForm";
import CategoryProductsPage from "./pages/CategoryProductsPage";
import products from "./Data/Many_products";
import ReportsPage from "./pages/ReportsPage";
import ProductGrid from "./components/Products/ProductGrid";

function App() {
  const [role, setRole] = useState(null);


  useEffect(() => {
    const savedRole = localStorage.getItem("role");
    if (savedRole) {
      setRole(savedRole);
    }
  }, []);

  return (
  //     <div
  //   style={{
  //     minHeight: "100vh",
  //     background: "linear-gradient(135deg, #1d2671, #c33764)",
  //   }}
  // >
    <Router>
      
      {!role && <Navbar />}

      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login_Page setRole={setRole} />} />
        <Route path="/register" element={<Registration />} />
         <Route path="/Many_products" element={<ProductGrid />} />
         <Route path="/category/:categoryName" element={<ProductGrid role={role} />} />

        
        <Route path="/order" element={role ? <UserOrderPage /> : <Navigate to="/login" />} />
        <Route path="/my-orders" element={role ? <MyOrdersPage /> : <Navigate to="/login" />} />

        
        <Route path="/admin-orders" element={role === "admin" ? <AdminOrders /> : <Navigate to="/dashboard" />} />
        <Route path="/users" element={role === "admin" ? <UsersPage /> : <Navigate to="/dashboard" />} />
        <Route path="/reports" element={role === "admin" ? <ReportsPage role={role} /> : <Navigate to="/dashboard" />} />

        
        <Route path="/dashboard" element={role ? <DashboardPage role={role} /> : <Navigate to="/login" />} />
        <Route path="/products" element={role ? <ProductsPage role={role} /> : <Navigate to="/login" />} />
        <Route path="/orders" element={role ? <OrdersPage role={role} /> : <Navigate to="/login" />} />
        <Route path="/add-product" element={role ? <AddProductForm /> : <Navigate to="/login" />} />

        
        <Route path="/category/:categoryName" element={<CategoryProductsPage products={products} />} />

        
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  
  );
}

export default App;
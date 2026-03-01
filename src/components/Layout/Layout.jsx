import React from "react";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div
      style={{
        marginLeft: "200px",
        padding: "20px",
        minHeight: "100vh",
        backgroundColor: "#f4f6f9"
      }}
    >
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

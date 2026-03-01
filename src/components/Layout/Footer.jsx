import React from "react";

export default function ModernFooter() {
  return (
    <footer 
      className="text-light py-5" 
      style={{ 
        background: "linear-gradient(135deg, #343a40, #6f42c1)", 
        boxShadow: "0 -4px 10px rgba(0,0,0,0.3)" 
      }}
    >
      <div className="container text-center">
        <h5 className="fw-bold mb-2">Stock Management System</h5>
        <p className="mb-1 text-light-50">© 2026 All Rights Reserved</p>
        <p className="small text-light-50">Built with React & Bootstrap</p>
      </div>

      
      <style>{`
        .text-light-50 {
          color: rgba(255,255,255,0.7);
        }
        footer h5:hover {
          color: #ffc107;
          transition: 0.3s;
        }
      `}</style>
    </footer>
  );
}
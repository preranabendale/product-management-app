import React from 'react';
import Navbar from '../Layout/Navbar';

const DashboardCard = ({ title, value, icon, bgColor }) => {
  return (
        <div className="col-md-4 mb-3">
      <div
        className={`card text-white shadow hover-effect`}
        style={{ backgroundColor: bgColor, borderRadius: "15px", padding: "20px", transition: "transform 0.3s" }}
      >
      <div className={`card text-white ${bgColor} shadow`}>
        <div className="card-body d-flex justify-content-between align-items-center">
          <div>
            <h5>{title}</h5>
            <h3>{value}</h3>
          </div>
          <div style={{fontSize: '2rem'}}>{icon}</div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default DashboardCard;

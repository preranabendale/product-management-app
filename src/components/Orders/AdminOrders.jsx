import React from "react";

function AdminOrders() {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  return (
    <div className="container mt-5">
      <h3>All Orders (Admin)</h3>

      {orders.length === 0 ? (
        <p>No Orders Found</p>
      ) : (
        orders.map(order => (
          <div key={order.id} className="card p-3 mb-2">
            Product: {order.product} | User: {order.userId}
          </div>
        ))
      )}
    </div>
  );
}

export default AdminOrders;
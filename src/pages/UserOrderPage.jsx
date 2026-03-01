import React, { useState } from "react";

function UserOrderPage() {
  const [product, setProduct] = useState("");

  const handleOrder = () => {

    const loggedInUser = JSON.parse(
      localStorage.getItem("loggedInUser")
    );

    if (!loggedInUser) {
      alert("Please login first");
      return;
    }

    if (!product.trim()) {
      alert("Enter product name");
      return;
    }

   
    let oldOrders = localStorage.getItem("orders");

    if (oldOrders) {
      oldOrders = JSON.parse(oldOrders);
    } else {
      oldOrders = [];
    }

    const newOrder = {
      id: Date.now(),
      productName: product,
      userId: loggedInUser.id,   
      userName: loggedInUser.name,
      date: new Date().toLocaleString()
    };

    oldOrders.push(newOrder);

    localStorage.setItem(
      "orders",
      JSON.stringify(oldOrders)
    );

    console.log("Orders after save:", oldOrders);

    alert("Order Placed Successfully!");
    setProduct("");
  };

  return (
    <div className="container mt-5">
      <h3>Place Order</h3>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Enter Product Name"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
      />

      <button className="btn btn-success" onClick={handleOrder}>
        Place Order
      </button>
    </div>
  );
}

export default UserOrderPage;
import React, { useState } from "react";

const EditProductForm = ({ product, onSave, onClose }) => {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [stock, setStock] = useState(product.stock);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedProduct = {
      ...product,
      name,
      price: Number(price),
      stock: Number(stock),
    };

    onSave(updatedProduct); 
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          background: "white",
          padding: "20px",
          width: "350px",
          borderRadius: "8px",
        }}
      >
        <h4>Edit Product</h4>

        <form onSubmit={handleSubmit}>
          <input
            className="form-control mb-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="number"
            className="form-control mb-2"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <input
            type="number"
            className="form-control mb-3"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />

          <button type="submit" className="btn btn-success me-2">
            Save
          </button>

          <button type="button" className="btn btn-secondary" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProductForm;
import React, { useState } from "react";
import "./productmodal.css";

const ProductModal = ({ product, products, setProducts, close }) => {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [stock, setStock] = useState(product.stock);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updated = products.map((p) =>
      p.id === product.id ? { ...p, name, price, stock } : p
    );

    setProducts(updated);
    close();
  };

  return (
    <div className="overlay">
      <div className="modal-card">
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
            className="form-control mb-2"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />

          <div className="d-flex justify-content-between">
            <button className="btn btn-success">Save</button>
            <button type="button" className="btn btn-secondary" onClick={close}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductModal;

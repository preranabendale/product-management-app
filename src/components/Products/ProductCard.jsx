import React, { useState } from "react";
import EditProductForm from "./EditProductForm";
import DeleteConfirmModal from "./DeleteConfirmModal";
import "./productcard.css";

const ProductCard = ({ product, products, setProducts }) => {
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  return (
    <>
      <div className="col-md-4 mb-4">
        <div className="product-card">

          {/* Product Image */}
          <img src={product.image} alt={product.name} className="product-img" />

          {/* Card Body */}
          <div className="product-body">
            <h6>{product.name}</h6>
            <p className="price">₹{product.price}</p>

            <span className={product.stock > 0 ? "badge bg-success" : "badge bg-danger"}>
              {product.stock > 0 ? "In Stock" : "Out of Stock"}
            </span>

            <div className="mt-3 d-flex justify-content-between">
              <button
                className="btn btn-warning btn-sm"
                onClick={() => setShowEdit(true)}
              >
                Edit
              </button>

              <button
                className="btn btn-danger btn-sm"
                onClick={() => setShowDelete(true)}
              >
                Delete
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Modals */}
      {showEdit && (
        <EditProductForm
          product={product}
          products={products}
          setProducts={setProducts}
          close={() => setShowEdit(false)}
        />
      )}

      {showDelete && (
        <DeleteConfirmModal
          product={product}
          products={products}
          setProducts={setProducts}
          close={() => setShowDelete(false)}
        />
      )}
    </>
  );
};

export default ProductCard;
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Many_products from "../../Data/Many_products";
import OrderModal from "../Products/OrderModal";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductGrid = ({ role }) => {

  const { categoryName } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);

  // ✅ Direct Many_products use kar rahe hain
  const filteredProducts = Many_products.filter(
    (product) => product.category === categoryName
  );

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">
        {categoryName} Products
      </h2>

      <div className="row g-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-md-4">
            <div className="card shadow h-100 text-center p-3">

              <img
                src={product.image}
                alt={product.name}
                style={{ height: "200px", objectFit: "cover" }}
              />

              <h5 className="mt-3">{product.name}</h5>
              <p className="text-primary fw-bold">₹ {product.price}</p>

              <span className={
                product.stock > 0
                  ? "badge bg-success"
                  : "badge bg-danger"
              }>
                {product.stock > 0
                  ? `In Stock: ${product.stock}`
                  : "Out of Stock"}
              </span>

              {role !== "admin" && (
                <button
                  className="btn btn-dark mt-3 w-100"
                  disabled={product.stock === 0}
                  onClick={() => setSelectedProduct(product)}
                >
                  Order Now
                </button>
              )}

            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <OrderModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onConfirm={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default ProductGrid;
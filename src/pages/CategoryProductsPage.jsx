import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const CategoryProductsPage = ({ products }) => {
  const { categoryName } = useParams();
  const navigate = useNavigate();

  const filteredProducts = products .filter(
    (p) => p.category === categoryName
  );

  return (
    <div className="container py-5">
      <button
        className="btn btn-secondary mb-4"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <h2 className="fw-bold text-center mb-4">
        {categoryName} Products
      </h2>

      <div className="row g-4">
        {filteredProducts.map((product) => (
          <div className="col-md-4" key={product.id}>
            <div className="card shadow h-100">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
                style={{ height: "220px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5>{product.name}</h5>
                <h6 className="text-primary">₹ {product.price}</h6>
                <span
                  className={
                    product.stock > 0
                      ? "badge bg-success"
                      : "badge bg-danger"
                  }
                >
                  {product.stock > 0
                    ? `In Stock: ${product.stock}`
                    : "Out of Stock"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProductsPage;
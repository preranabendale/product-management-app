import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import OrderModal from "../Products/OrderModal";

const ProductGrid = ({ role }) => {

  const { categoryName } = useParams();

  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);


  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  const filteredProducts = products.filter(
    (p) => p.category === categoryName
  );

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">{categoryName} Products</h2>

      <div className="row">
        {filteredProducts.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card p-3 text-center">

              <img src={product.image} height="150" alt={product.name} />

              <h5>{product.name}</h5>
              <p>₹ {product.price}</p>
              <p>Stock: {product.stock}</p>

              {role === "admin" ? (
                <p className="text-muted">Admin View</p>
              ) : (
                <button
                  className="btn btn-dark"
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
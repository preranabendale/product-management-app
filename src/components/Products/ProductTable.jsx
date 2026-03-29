import React from "react";
// import "./producttable.css";
import "./ProductTable.css";

const ProductTable = ({ products }) => {
  return (
    <div className="table-responsive">
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>₹ {product.price}</td>
              <td>{product.stock}</td>
              <td>
                <span
                  className={`badge ${
                    product.stock === 0
                      ? "bg-danger"
                      : product.stock <= 10
                      ? "bg-warning text-dark"
                      : "bg-success"
                  }`}
                >
                  {product.stock === 0
                    ? "Out of Stock"
                    : product.stock <= 10
                    ? "Low Stock"
                    : "In Stock"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;

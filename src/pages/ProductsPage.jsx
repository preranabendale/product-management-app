import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Layout/Navbar";
import Sidebar from "../components/Layout/Sidebar";
import CategoryDropdown from "../components/Products/CategoryDropdown";
import EditProductForm from "../components/Products/EditProductForm";
import DeleteConfirmModal from "../components/Products/DeleteConfirmModal"; 
import AddProductForm from "../components/Products/AddProductForm";
import ProductSearch from "../components/Products/ProductSearch";
import OrderModal from "../components/Products/OrderModal";
import ProductTable from "../components/Products/ProductTable";
import Footer from "../components/Layout/Footer";

const ProductsPage = ({ role }) => {
  const navigate = useNavigate();

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [editProduct, setEditProduct] = useState(null);
  const [deleteProduct, setDeleteProduct] = useState(null);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [view, setView] = useState("card");

  const [products, setProducts] = useState(() => {
    return JSON.parse(localStorage.getItem("products")) || [
      { id: 1, name: "Laptop", price: 50000, stock: 5, image: "laptop.jpg", category: "Electronics" },
      { id: 2, name: "Mobile", price: 20000, stock: 8, image: "mobile.jpg", category: "Electronics" },
      { id: 3, name: "Headphones", price: 1000, stock: 0, image: "headphone.jpg", category: "Electronics" },
      { id: 4, name: "T-Shirt", price: 799, stock: 15, image: "t-shirt.jpg", category: "Fashion" },
      { id: 5, name: "Jeans", price: 999, stock: 10, image: "jeans.jpg", category: "Fashion" },
      { id: 6, name: "Jacket", price: 500, stock: 5, image: "jacket.jpg", category: "Fashion" },
      { id: 7, name: "Necklace", price: 25000, stock: 2, image: "necklace.jpg", category: "Jewelry" },
      { id: 8, name: "Ring", price: 1000, stock: 3, image: "ring.jpg", category: "Jewelry" },
      { id: 9, name: "Bracelet", price: 800, stock: 4, image: "bracelet.jpg", category: "Jewelry" },
      { id: 10, name: "Toy Car", price: 499, stock: 20, image: "cartoy.jpg", category: "Toys" },
      { id: 11, name: "Puzzle", price: 299, stock: 25, image: "puzzle.jpg", category: "Toys" },
      { id: 12, name: "Doll", price: 400, stock: 15, image: "doll.jpg", category: "Toys" },
    ];
  });

 useEffect(() => {
  localStorage.setItem("products", JSON.stringify(products));
}, [products]);
  const handleAddProduct = (newProduct) => {
    const id = products.length ? products[products.length - 1].id + 1 : 1;
    const updatedProducts = [...products, { id, ...newProduct }];
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setShowAddProduct(false);
    alert(`${newProduct.name} added successfully!`);
  };

  const handleUpdateProduct = (updatedProduct) => {
    const updatedProducts = products.map(p => p.id === updatedProduct.id ? updatedProduct : p);
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setEditProduct(null);
  };

  const handleDeleteProduct = (id) => {
    const updatedProducts = products.filter(p => p.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setDeleteProduct(null);
  };

  const handleOrderConfirm = (newOrder, quantity) => {
    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    localStorage.setItem("orders", JSON.stringify([...existingOrders, newOrder]));

    const updatedProducts = products.map(p =>
      p.id === newOrder.productId
        ? { ...p, stock: p.stock - quantity }
        : p
    );

    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setSelectedProduct(null);
    alert("Order Placed Successfully!");
  };

  const filteredProducts = products.filter(p =>
    (category === "All" || p.category === category) &&
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh", backgroundColor: "#f2f2f2" }}>
      <Navbar />
      <div style={{ width: "240px", position: "fixed", height: "100vh", zIndex: 100 }}>
        <Sidebar role={role} />
      </div>

      <div className="container py-5" style={{ marginLeft: "240px", width: "100%", flex: 1 }}>
        <h2 className="fw-bold mb-4 text-center">Our Products</h2>

        <div className="d-flex align-items-center justify-content-between mb-4">
          <div className="d-flex align-items-center gap-2">
            <CategoryDropdown category={category} setCategory={setCategory} />
            <ProductSearch search={search} setSearch={setSearch} />

            <button className={`btn ${view === "card" ? "btn-dark" : "btn-outline-dark"}`} onClick={() => setView("card")}>Card</button>
            <button className={`btn ${view === "table" ? "btn-dark" : "btn-outline-dark"}`} onClick={() => setView("table")}>Table</button>
          </div>

          {role === "admin" && <button className="btn btn-primary" onClick={() => setShowAddProduct(true)}>+ Add Product</button>}
        </div>

        {view === "card" ? (
          <div className="row g-4">
            {filteredProducts.map(product => (
              <div className="col-md-4" key={product.id}>
                <div className="card shadow h-100">
                  <img src={product.image} className="card-img-top" alt={product.name} style={{ height: "220px", objectFit: "cover" }} />
                  <div className="card-body text-center">
                    <h5>{product.name}</h5>
                    <h6 className="text-primary">₹ {product.price}</h6>
                    <span className={product.stock > 0 ? "badge bg-success" : "badge bg-danger"}>
                      {product.stock > 0 ? `In Stock: ${product.stock}` : "Out of Stock"}
                    </span>

                    {role === "admin" ? (
                      <div className="d-flex gap-2 mt-3">
                        <button className="btn btn-warning w-50" onClick={() => setEditProduct(product)}>Edit</button>
                        <button className="btn btn-danger w-50" onClick={() => setDeleteProduct(product)}>Delete</button>
                         <button
    className="btn btn-outline-primary w-50"
    onClick={() => navigate(`/category/${product.category}`)}
  >
    More
  </button>

                      </div>
                    ) : (
                      <div className="d-flex gap-2 mt-3">
                        <button className="btn btn-dark w-50" disabled={product.stock === 0} onClick={() => setSelectedProduct(product)}>Order Now</button>
                        <button className="btn btn-outline-primary w-50" onClick={() => navigate(`/category/${product.category}`)}>More</button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <ProductTable products={filteredProducts} role={role} onEdit={setEditProduct} onDelete={setDeleteProduct} onOrder={setSelectedProduct} />
        )}

        {showAddProduct && <AddProductForm onClose={() => setShowAddProduct(false)} onAdd={handleAddProduct} />}
        {editProduct && <EditProductForm product={editProduct} onClose={() => setEditProduct(null)} onSave={handleUpdateProduct} />}
        {deleteProduct && <DeleteConfirmModal product={deleteProduct} onClose={() => setDeleteProduct(null)} onConfirm={() => handleDeleteProduct(deleteProduct.id)} />}
        {selectedProduct && <OrderModal product={selectedProduct} onClose={() => setSelectedProduct(null)} onConfirm={handleOrderConfirm} />}

      </div>
      
      <Footer /> 
    </div>
  );
};

export default ProductsPage;
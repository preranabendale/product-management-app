import React, { useState } from "react";

const AddProductForm = ({ onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    stock: "",
    category: "Electronics",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      ...formData,
      price: parseFloat(formData.price),
      stock: parseInt(formData.stock),
    });
  };

  return (
    <div 
      className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 2000 }}
    >
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        <h4 className="mb-3 text-center">Add New Product</h4>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder="Product Name" 
            value={formData.name} 
            onChange={handleChange} 
            className="form-control mb-2" 
            required 
          />
          <input 
            type="number" 
            name="price" 
            placeholder="Price" 
            value={formData.price} 
            onChange={handleChange} 
            className="form-control mb-2" 
            required 
          />
          <input 
            type="number" 
            name="stock" 
            placeholder="Stock" 
            value={formData.stock} 
            onChange={handleChange} 
            className="form-control mb-2" 
            required 
          />
          <input 
            type="text" 
            name="image" 
            placeholder="Image URL" 
            value={formData.image} 
            onChange={handleChange} 
            className="form-control mb-2" 
            required 
          />
          <select 
            name="category" 
            value={formData.category} 
            onChange={handleChange} 
            className="form-select mb-3"
          >
            <option value="Electronics">Electronics</option>
            <option value="Fashion">Fashion</option>
            <option value="Jewelry">Jewelry</option>
            <option value="Toys">Toys</option>
          </select>

          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-primary">Add</button>
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;
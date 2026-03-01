import React, { useState, useEffect } from 'react';

const ProductForm = ({ onSave, product }) => {
  const [name, setName] = useState('');
  const [stock, setStock] = useState('');
  const [price, setPrice] = useState('');

  
  useEffect(() => {
    if (product) {
      setName(product.name);
      setStock(product.stock);
      setPrice(product.price);
    } else {
      setName('');
      setStock('');
      setPrice('');
    }
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: product ? product.id : Date.now(),
      name,
      stock,
      price
    };
    onSave(newProduct);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-3 border rounded" style={{maxWidth:'400px'}}>
      <h5>{product ? 'Edit Product' : 'Add Product'}</h5>
      <input type="text" className="form-control mb-2" placeholder="Product Name" value={name} onChange={(e)=>setName(e.target.value)} required/>
      <input type="number" className="form-control mb-2" placeholder="Stock" value={stock} onChange={(e)=>setStock(e.target.value)} required/>
      <input type="number" className="form-control mb-2" placeholder="Price" value={price} onChange={(e)=>setPrice(e.target.value)} required/>
      <button type="submit" className="btn btn-success w-100">{product ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default ProductForm;

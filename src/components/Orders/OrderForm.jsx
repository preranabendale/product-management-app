import React, { useState, useEffect } from 'react';

const OrderForm = ({ onSave, order }) => {
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [customer, setCustomer] = useState('');

  
  useEffect(() => {
    if(order){
      setProductName(order.productName);
      setQuantity(order.quantity);
      setCustomer(order.customer);
    } else {
      setProductName('');
      setQuantity('');
      setCustomer('');
    }
  }, [order]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOrder = {
      id: order ? order.id : Date.now(),
      productName,
      quantity,
      customer
    };
    onSave(newOrder);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-3 border rounded" style={{maxWidth:'400px'}}>
      <h5>{order ? 'Edit Order' : 'Add Order'}</h5>
      <input type="text" className="form-control mb-2" placeholder="Product Name" value={productName} onChange={(e)=>setProductName(e.target.value)} required/>
      <input type="number" className="form-control mb-2" placeholder="Quantity" value={quantity} onChange={(e)=>setQuantity(e.target.value)} required/>
      <input type="text" className="form-control mb-2" placeholder="Customer Name" value={customer} onChange={(e)=>setCustomer(e.target.value)} required/>
      <button type="submit" className="btn btn-success w-100">{order ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default OrderForm;

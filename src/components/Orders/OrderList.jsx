import React, { useState } from 'react';
import OrderForm from './OrderForm.jsx';
import OrderTable from './OrderTable.jsx';

const initialOrders = [
  {id:1, productName:'Laptop', quantity:2, customer:'Sattu'},
  {id:2, productName:'Mouse', quantity:5, customer:'Amit'}
];

const OrderList = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [editingOrder, setEditingOrder] = useState(null);

  const handleSave = (order) => {
    if(editingOrder){
      setOrders(orders.map(o => o.id === order.id ? order : o));
      setEditingOrder(null);
    } else {
      setOrders([...orders, order]);
    }
  };

  const handleEdit = (order) => setEditingOrder(order);
  const handleDelete = (id) => setOrders(orders.filter(o => o.id !== id));

  return (
    <div>
      <OrderForm onSave={handleSave} order={editingOrder} />
      <OrderTable orders={orders} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default OrderList;

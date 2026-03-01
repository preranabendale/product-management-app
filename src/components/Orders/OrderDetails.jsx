const OrderDetails = ({ order }) => {
  return (
    <div>
      <h4>Order Details</h4>
      <p>Customer: {order.customer}</p>
      <p>Address: {order.address}</p>
    </div>
  );
};

export default OrderDetails;

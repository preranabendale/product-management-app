const InvoiceComponent = ({ order }) => {
  return (
    <div className="card p-3">
      <h5>Invoice</h5>
      <p>Order ID: {order.id}</p>
      <p>Total: ₹ {order.amount}</p>
    </div>
  );
};

export default InvoiceComponent;

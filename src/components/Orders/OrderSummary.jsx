const OrderSummary = ({ orders }) => {
  const total = orders.reduce((sum, o) => sum + o.amount, 0);

  return (
    <div className="card p-3 mb-3 shadow-sm">
      <h6>Total Orders: {orders.length}</h6>
      <h6>Total Revenue: ₹ {total}</h6>
    </div>
  );
};

export default OrderSummary;

const OrderFilter = ({ status, setStatus }) => {
  return (
    <select
      className="form-select"
      value={status}
      onChange={(e) => setStatus(e.target.value)}
    >
      <option value="All">All</option>
      <option value="Pending">Pending</option>
      <option value="Delivered">Delivered</option>
      <option value="Cancelled">Cancelled</option>
    </select>
  );
};

export default OrderFilter;

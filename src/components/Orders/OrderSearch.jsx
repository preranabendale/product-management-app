const OrderSearch = ({ search, setSearch }) => {
  return (
    <input
      className="form-control"
      placeholder="Search orders..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default OrderSearch;

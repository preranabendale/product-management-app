const ProductSearch = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      className="form-control"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search..."
    />
  );
};

export default ProductSearch;

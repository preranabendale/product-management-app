const CategoryDropdown = ({ category, setCategory }) => {
  return (
    <select
      className="form-select"
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    >
      <option>All</option>
      <option>Electronics</option>
      <option>Fashion</option>
      <option>Jewelry</option>
      <option>Toys</option>
    </select>
  );
};

export default CategoryDropdown;

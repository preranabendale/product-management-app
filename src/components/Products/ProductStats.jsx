const ProductStats = ({ products }) => {
  return (
    <div className="mb-3">
      <strong>Total Products:</strong> {products.length}
    </div>
  );
};

export default ProductStats;

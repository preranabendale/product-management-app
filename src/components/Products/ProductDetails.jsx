const ProductDetails = ({ product }) => {
  return (
    <>
      <h5>{product.name}</h5>
      <p>{product.category}</p>
    </>
  );
};

export default ProductDetails;

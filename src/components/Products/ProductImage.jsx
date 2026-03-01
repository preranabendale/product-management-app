const ProductImage = ({ image }) => {
  return (
    <div className="text-center">
      <img src={image} alt="product" width="120" />
    </div>
  );
};

export default ProductImage;

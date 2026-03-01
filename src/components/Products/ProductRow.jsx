const ProductRow = ({ product }) => {
  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.stock}</td>
    </tr>
  );
};

export default ProductRow;

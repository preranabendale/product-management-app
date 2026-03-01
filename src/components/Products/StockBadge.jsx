const StockBadge = ({ stock }) => {
  let color = "bg-success";
  let text = "In Stock";

  if (stock === 0) {
    color = "bg-danger";
    text = "Out of Stock";
  } else if (stock <= 10) {
    color = "bg-warning text-dark";
    text = "Low Stock";
  }

  return <span className={`badge ${color}`}>{text}</span>;
};

export default StockBadge;

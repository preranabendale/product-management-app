const OrderStatusBadge = ({ status }) => {
  const getColor = () => {
    if (status === "Delivered") return "bg-success";
    if (status === "Pending") return "bg-warning text-dark";
    if (status === "Cancelled") return "bg-danger";
    return "bg-secondary";
  };

  return <span className={`badge ${getColor()}`}>{status}</span>;
};

export default OrderStatusBadge;

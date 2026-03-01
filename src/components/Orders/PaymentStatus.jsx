const PaymentStatus = ({ payment }) => {
  return (
    <span className={`badge ${payment === "Paid" ? "bg-success" : "bg-danger"}`}>
      {payment}
    </span>
  );
};

export default PaymentStatus;

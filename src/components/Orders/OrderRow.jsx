import OrderStatusBadge from "./OrderStatusBadge";
import PaymentStatus from "./PaymentStatus";

const OrderRow = ({ order }) => {
  return (
    <tr>
      <td>{order.id}</td>
      <td>{order.customer}</td>
      <td>₹ {order.amount}</td>
      <td><OrderStatusBadge status={order.status} /></td>
      <td><PaymentStatus payment={order.payment} /></td>
    </tr>
  );
};

export default OrderRow;

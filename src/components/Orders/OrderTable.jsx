import OrderRow from "./OrderRow";
import "./Orders.css";

const OrderTable = ({ orders }) => {
  return (
    <table className="table custom-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Customer</th>
          <th>Amount</th>
          <th>Status</th>
          <th>Payment</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <OrderRow key={order.id} order={order} />
        ))}
      </tbody>
    </table>
  );
};

export default OrderTable;

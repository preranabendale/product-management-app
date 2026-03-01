import OrderStatusBadge from "./OrderStatusBadge";
import PaymentStatus from "./PaymentStatus";

const OrderCard = ({ order }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow-sm order-card">
        <div className="card-body">
          <h5>Order #{order.id}</h5>
          <p>Customer: {order.customer}</p>
          <p>Total: ₹ {order.amount}</p>
          <OrderStatusBadge status={order.status} />
          <div className="mt-2">
            <PaymentStatus payment={order.payment} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;

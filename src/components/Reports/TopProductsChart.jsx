import {
  BarChart, Bar, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";

const TopProductsChart = ({ orders = [] }) => {

  if (orders.length === 0) {
    return (
      <div className="card p-3 shadow-sm">
        <h5>No Product Sales Data Available</h5>
      </div>
    );
  }

  const productMap = {};

  orders.forEach(order => {
    productMap[order.product] =
      (productMap[order.product] || 0) + order.quantity;
  });

  const data = Object.keys(productMap).map(key => ({
    name: key,
    quantity: productMap[key]
  }));

  return (
    <div className="card p-3 shadow-sm h-100">
      <h5 className="mb-3">Top Selling Products</h5>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="quantity" fill="#6610f2" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TopProductsChart;
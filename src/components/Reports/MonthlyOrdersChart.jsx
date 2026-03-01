import {
  BarChart, Bar, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";

const MonthlyOrdersChart = ({ orders = [] }) => {

  const months = ["Jan","Feb","Mar","Apr","May","Jun"];

  const data = months.map(month => {
    const total = orders
      ?.filter(o => o.month === month)
      ?.reduce((sum, curr) => sum + curr.quantity, 0);

    return { month, orders: total || 0 };
  });

  if (orders.length === 0) {
    return (
      <div className="card p-3 shadow-sm">
        <h5>No Orders Data Available</h5>
      </div>
    );
  }

  return (
    <div className="card p-3 shadow-sm h-100">
      <h5 className="mb-3">Monthly Orders</h5>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="orders" fill="#0d6efd" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyOrdersChart;
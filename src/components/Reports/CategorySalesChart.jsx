import {
  PieChart, Pie, Cell,
  Tooltip, ResponsiveContainer, Legend
} from "recharts";

const COLORS = ["#0d6efd", "#20c997", "#ffc107", "#dc3545"];

const CategorySalesChart = ({ orders = [] }) => {

  if (orders.length === 0) {
    return (
      <div className="card p-3 shadow-sm">
        <h5>No Category Data Available</h5>
      </div>
    );
  }

  const categories = [...new Set(orders.map(o => o.category))];

  const data = categories.map(cat => {
    const total = orders
      .filter(o => o.category === cat)
      .reduce((sum, curr) => sum + curr.quantity, 0);

    return { name: cat, value: total };
  });

  return (
    <div className="card p-3 shadow-sm h-100">
      <h5 className="mb-3">Category Sales</h5>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} dataKey="value" outerRadius={100} label>
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategorySalesChart;
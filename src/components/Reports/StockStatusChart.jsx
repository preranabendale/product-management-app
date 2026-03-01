import {
  PieChart, Pie, Cell,
  Tooltip, ResponsiveContainer
} from "recharts";

const StockStatusChart = ({ products = [] }) => {

  if (products.length === 0) {
    return (
      <div className="card p-3 shadow-sm">
        <h5>No Stock Data Available</h5>
      </div>
    );
  }

  const low = products.filter(p => p.stock < 10).length;
  const medium = products.filter(p => p.stock >= 10 && p.stock < 50).length;
  const high = products.filter(p => p.stock >= 50).length;

  const data = [
    { name: "Low Stock", value: low },
    { name: "Medium Stock", value: medium },
    { name: "High Stock", value: high },
  ];

  const COLORS = ["#dc3545", "#ffc107", "#198754"];

  return (
    <div className="card p-3 shadow-sm h-100">
      <h5 className="mb-3">Stock Status</h5>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} dataKey="value" outerRadius={100} label>
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StockStatusChart;
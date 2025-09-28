import {
  BarChart,
  Bar,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const ChartCard = ({ data }) => {
  // total agg by category
  const aggregatedData = Object.values(
    data.reduce((acc, item) => {
      const category = item.category;
      const quantity = Number(item.quantity) || 0;

      if (!acc[category]) {
        acc[category] = { category, quantity: 0 };
      }
      acc[category].quantity += quantity;

      return acc;
    }, {})
  );


  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <BarChart data={aggregatedData} margin={{ right: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="quantity" fill="#2563eb" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartCard;

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 bg-success text-white rounded">
        <p className="fw-bold mb-1">{label}</p>
        <p className="mb-0">
          Total: <span className="fw-bold">{payload[0].value}</span>
        </p>
      </div>
    );
  }
  return null;
};

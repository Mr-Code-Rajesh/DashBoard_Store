// DashboardCharts.jsx
import { chartConfig } from "./chartConfig";
import {
  LineChart, Line,
  BarChart, Bar,
  PieChart, Pie, Cell,
  CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer
} from "recharts";

export default function DashboardCharts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {chartConfig.map((chart) => {
        if (!chart || !chart.type) {
          console.warn("Invalid chart config:", chart);
          return null; // skip invalid
        }

        switch (chart.type) {
          case "line":
            return (
              <div key={chart.id} className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow">
                <h2 className="text-lg font-semibold mb-2">{chart.title}</h2>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={chart.data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey={chart.dataKey} stroke="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            );

          case "bar-dual":
            return (
              <div key={chart.id} className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow">
                <h2 className="text-lg font-semibold mb-2">{chart.title}</h2>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={chart.data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {chart.keys?.map((k, idx) => (
                      <Bar key={k} dataKey={k} fill={idx === 0 ? "#82ca9d" : "#8884d8"} />
                    ))}
                  </BarChart>
                </ResponsiveContainer>
              </div>
            );

          case "bar":
            return (
              <div key={chart.id} className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow">
                <h2 className="text-lg font-semibold mb-2">{chart.title}</h2>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={chart.data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey={chart.dataKey} fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            );

          case "pie":
            return (
              <div key={chart.id} className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow">
                <h2 className="text-lg font-semibold mb-2">{chart.title}</h2>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={chart.data}
                      dataKey={chart.dataKey}
                      nameKey="category"
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      label
                    >
                      {chart.data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={["#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#8dd1e1"][index % 5]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}

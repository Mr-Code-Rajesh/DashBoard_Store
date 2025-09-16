import { motion } from "framer-motion";
import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend,
} from "recharts";
import { salesByRegionData } from "../BIData";

const COLORS = ["#3b82f6", "#22c55e", "#f59e0b", "#ef4444"];

export default function SalesByRegionChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow"
    >
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Sales by Region
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={salesByRegionData}
            dataKey="sales"
            nameKey="region"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {salesByRegionData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </motion.div>
  );
}

import { motion } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from "recharts";
import { expensesProfitData } from "../BIData";

export default function ExpensesProfitChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow"
    >
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Expenses vs Profit
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={expensesProfitData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="expenses" fill="#ef4444" />
          <Bar dataKey="profit" fill="#22c55e" />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}

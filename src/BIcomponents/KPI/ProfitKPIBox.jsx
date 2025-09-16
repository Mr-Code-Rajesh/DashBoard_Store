import { motion } from "framer-motion";
import { kpiData } from "../BIData";

export default function ProfitKPIBox() {
  const { value, trend, positive } = kpiData.profit;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow"
    >
      <p className="text-sm text-gray-500 dark:text-gray-400">Profit</p>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{value}</h2>
      <span
        className={`text-sm font-medium ${
          positive ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
        }`}
      >
        {trend}
      </span>
    </motion.div>
  );
}

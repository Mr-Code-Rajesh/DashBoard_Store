import { motion } from "framer-motion";
import { kpiData } from "./kpidata";

function KPIBox({ title, value, change, changeColor }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow"
    >
      <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{value}</h2>
      <span className={`text-sm font-medium ${changeColor}`}>{change}</span>
    </motion.div>
  );
}

export default function DashboardKPIs() {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
      }}
    >
      {kpiData.map((kpi) => (
        <KPIBox key={kpi.id} {...kpi} />
      ))}
    </motion.div>
  );
}

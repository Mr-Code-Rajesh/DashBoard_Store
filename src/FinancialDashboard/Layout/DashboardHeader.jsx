import { motion } from "framer-motion";
import { BarChart3 } from "lucide-react";

export default function DashboardHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between"
    >
      {/* Left: Title + Subtitle */}
      <div>
        <div className="flex items-center gap-2">
          <BarChart3 className="text-blue-600 dark:text-blue-400" size={28} />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Financial Dashboard
          </h1>
        </div>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          Real-time insights into company performance and financial health
        </p>
      </div>

      {/* Right: Optional action */}
      <div className="mt-4 sm:mt-0">
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow transition">
          Generate Report
        </button>
      </div>
    </motion.header>
  );
}

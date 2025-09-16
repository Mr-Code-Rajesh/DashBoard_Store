import { motion } from "framer-motion";
import { topPerformers } from "../BIData";

export default function TopPerformersList() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow"
    >
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Top Performers
      </h3>
      <ul className="space-y-3">
        {topPerformers.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
          >
            <span className="font-medium text-gray-800 dark:text-gray-200">
              #{index + 1} {item.name}
            </span>
            <span className="text-blue-600 dark:text-blue-400 font-semibold">
              {item.sales}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

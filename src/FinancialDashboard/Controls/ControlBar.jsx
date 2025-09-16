import { motion } from "framer-motion";
import { controlConfig } from "./controlConfig";

export default function ControlBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-wrap gap-4 items-center justify-between mb-6"
    >
      {/* Left side: Filters */}
      <div className="flex flex-wrap gap-3">
        {controlConfig.map((control) => (
          <select
            key={control.id}
            className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm"
            defaultValue={control.options[0]}
          >
            {control.options.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        ))}
      </div>
    </motion.div>
  );
}

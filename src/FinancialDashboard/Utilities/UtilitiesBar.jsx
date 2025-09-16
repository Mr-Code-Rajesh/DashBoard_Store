import { motion } from "framer-motion";
import { utilitiesConfig } from "./utilitiesConfig";

export default function UtilitiesBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-wrap gap-3"
    >
      {utilitiesConfig.map((util) => {
        const Icon = util.icon; // assign component
        return (
          <button
            key={util.id}
            onClick={() => alert(`${util.label} clicked`)}
            className="px-3 py-2 flex items-center gap-2 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 text-sm shadow"
          >
            <Icon size={16} /> {/* render here */}
            {util.label}
          </button>
        );
      })}
    </motion.div>
  );
}

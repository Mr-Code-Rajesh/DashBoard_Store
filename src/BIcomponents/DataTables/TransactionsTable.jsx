import { useState } from "react";
import { motion } from "framer-motion";
import { transactions } from "../BIData";

export default function TransactionsTable() {
  const [sortConfig, setSortConfig] = useState({ key: "date", direction: "desc" });

  const sortedData = [...transactions].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow"
    >
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Transactions
      </h3>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-gray-600 dark:text-gray-300">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <SortableHeader
                label="Date"
                columnKey="date"
                sortConfig={sortConfig}
                onSort={handleSort}
              />
              <SortableHeader
                label="Customer"
                columnKey="customer"
                sortConfig={sortConfig}
                onSort={handleSort}
              />
              <SortableHeader
                label="Amount"
                columnKey="amount"
                sortConfig={sortConfig}
                onSort={handleSort}
              />
              <SortableHeader
                label="Status"
                columnKey="status"
                sortConfig={sortConfig}
                onSort={handleSort}
              />
            </tr>
          </thead>
          <tbody>
            {sortedData.map((row, idx) => (
              <tr
                key={idx}
                className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <td className="px-4 py-2">{row.date}</td>
                <td className="px-4 py-2">{row.customer}</td>
                <td className="px-4 py-2">{row.amount}</td>
                <td
                  className={`px-4 py-2 font-medium ${
                    row.status === "Paid"
                      ? "text-green-600 dark:text-green-400"
                      : row.status === "Pending"
                      ? "text-yellow-600 dark:text-yellow-400"
                      : "text-red-600 dark:text-red-400"
                  }`}
                >
                  {row.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

function SortableHeader({ label, columnKey, sortConfig, onSort }) {
  const isActive = sortConfig.key === columnKey;
  const directionArrow = isActive
    ? sortConfig.direction === "asc"
      ? "▲"
      : "▼"
    : "";

  return (
    <th
      onClick={() => onSort(columnKey)}
      className="px-4 py-2 text-left cursor-pointer select-none"
    >
      {label} <span className="text-xs">{directionArrow}</span>
    </th>
  );
}

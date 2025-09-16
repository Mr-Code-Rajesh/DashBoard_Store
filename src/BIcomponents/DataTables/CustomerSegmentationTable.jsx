import { motion } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";
import { customerSegmentationData } from "../BIData";

export default function CustomerSegmentationTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow"
    >
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Customer Segmentation
      </h3>

      {/* Table View */}
      <table className="w-full text-sm mb-4 text-gray-600 dark:text-gray-300">
        <thead className="bg-gray-100 dark:bg-gray-700">
          <tr>
            <th className="px-4 py-2 text-left">Segment</th>
            <th className="px-4 py-2 text-left">Value (%)</th>
          </tr>
        </thead>
        <tbody>
          {customerSegmentationData.map((seg, idx) => (
            <tr
              key={idx}
              className="border-t border-gray-200 dark:border-gray-700"
            >
              <td className="px-4 py-2">{seg.segment}</td>
              <td className="px-4 py-2">{seg.value}%</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Chart View */}
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={customerSegmentationData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="segment" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#f59e0b" barSize={40} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

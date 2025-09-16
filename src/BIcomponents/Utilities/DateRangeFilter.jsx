export default function DateRangeFilter() {
  return (
    <div className="flex items-center gap-2">
      <label className="text-sm text-gray-600 dark:text-gray-300">Date Range:</label>
      <select className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-2 py-1">
        <option>Last 7 Days</option>
        <option>Last 30 Days</option>
        <option>Year to Date</option>
      </select>
    </div>
  );
}

import { Download } from "lucide-react";

export default function ExportOptions() {
  const handleExport = (type) => {
    alert(`Exporting dashboard data as ${type}...`);
    // 👉 In real-world: implement CSV, PDF, Excel export logic
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => handleExport("CSV")}
        className="flex items-center gap-1 px-3 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg text-sm shadow"
      >
        <Download size={16} />
        CSV
      </button>
      <button
        onClick={() => handleExport("PDF")}
        className="flex items-center gap-1 px-3 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg text-sm shadow"
      >
        <Download size={16} />
        PDF
      </button>
    </div>
  );
}

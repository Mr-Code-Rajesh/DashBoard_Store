import DataTable from "./DataTable";
import { tableConfig } from "./tableConfig";

export default function DashboardTables() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {tableConfig.map((table) => (
        <DataTable
          key={table.id}
          title={table.title}
          columns={table.columns}
          data={table.data}
        />
      ))}
    </div>
  );
}

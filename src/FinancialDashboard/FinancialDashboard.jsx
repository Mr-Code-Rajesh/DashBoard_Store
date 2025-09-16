import DashboardContainer from "../components/DashboardContainer"; 
import DashboardHeader from "./Layout/DashboardHeader";

// Sections
import ControlBar from "./Controls/ControlBar";
import UtilitiesBar from "./Utilities/UtilitiesBar";
import DashboardKPIs from './KPI/KPIBox';
import DashboardCharts from "./Charts/DashboardCharts";
import DashboardTables from "./DrillDown/DashboardTables";

export default function FinancialDashboard() {
  return (
    <DashboardContainer>
      {/* === Header === */}
      <DashboardHeader />

      {/* === Controls + Utilities === */}
      <div className="flex flex-wrap gap-4 items-center justify-between mb-6">
        <ControlBar />
        <UtilitiesBar />
      </div>

      {/* === KPIs (8 cards) === */}
      <div className="mb-8">
        <DashboardKPIs />
      </div>

      {/* === Charts (9 visualizations) === */}
      <div className="mb-8">
        <DashboardCharts />
      </div>

      {/* === Drill-Down Tables (5 reports) === */}
      <div className="mb-8">
        <DashboardTables />
      </div>
    </DashboardContainer>
  );
}

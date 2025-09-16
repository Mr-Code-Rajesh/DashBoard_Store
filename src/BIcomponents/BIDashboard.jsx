import DashboardContainer from "../components/DashboardContainer";
import DashboardHeader from "./Layout/DashboardHeader";

import RevenueKPIBox from "./KPI/RevenueKPIBox";
import ProfitKPIBox from "./KPI/ProfitKPIBox";
import CustomerKPIBox from "./KPI/CustomerKPIBox";
import ChurnRateKPIBox from "./KPI/ChurnRateKPIBox";
import OperationalKPIBox from "./KPI/OperationalKPIBox";

import RevenueChart from "./Charts/RevenueChart";
import ExpensesProfitChart from "./Charts/ExpensesProfitChart";
import CustomerGrowthChart from "./Charts/CustomerGrowthChart";
import SalesByRegionChart from "./Charts/SalesByRegionChart";
import ProductPerformanceChart from "./Charts/ProductPerformanceChart";
import ChurnRetentionChart from "./Charts/ChurnRetentionChart";

import TransactionsTable from "./DataTables/TransactionsTable";
import CustomerSegmentationTable from "./DataTables/CustomerSegmentationTable";
import TopPerformersList from "./DataTables/TopPerformersList";

import DateRangeFilter from "./Utilities/DateRangeFilter";
import ExportOptions from "./Utilities/ExportOptions";
import ThemeToggle from "./Utilities/ThemeToggle";

export default function BIDashboard() {
  return (
    <DashboardContainer>

        
      {/* Header */}
      <DashboardHeader />

      {/* Utility Controls Row */}
      <div className="flex flex-wrap gap-4 items-center justify-between mb-6">
        {/* Left side: Filters */}
        <DateRangeFilter />

        {/* Right side: Export + Theme */}
        <div className="flex gap-3">
          <ExportOptions />
          <ThemeToggle />
        </div>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        <RevenueKPIBox />
        <ProfitKPIBox />
        <CustomerKPIBox />
        <ChurnRateKPIBox />
        <OperationalKPIBox />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <RevenueChart />
        <ExpensesProfitChart />
        <CustomerGrowthChart />
        <SalesByRegionChart />
        <ProductPerformanceChart />
        <ChurnRetentionChart />
      </div>

      {/* Data / Drilldown Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <TransactionsTable />
        <CustomerSegmentationTable />
        <TopPerformersList />
      </div>
    </DashboardContainer>
  );
}

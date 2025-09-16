// === Dummy Data for BI Dashboard ===

// KPI Metrics
export const kpiData = {
  revenue: { value: "$120K", trend: "+12%", positive: true },
  profit: { value: "$35K", trend: "+8%", positive: true },
  customers: { value: "5,230", trend: "+5%", positive: true },
  churn: { value: "2.4%", trend: "-0.5%", positive: false },
  operational: { value: "NPS 72", trend: "+3%", positive: true },
};

// Revenue Over Time
export const revenueData = [
  { month: "Jan", revenue: 12000 },
  { month: "Feb", revenue: 15000 },
  { month: "Mar", revenue: 17000 },
  { month: "Apr", revenue: 14000 },
  { month: "May", revenue: 20000 },
];

// Expenses vs Profit
export const expensesProfitData = [
  { month: "Jan", expenses: 8000, profit: 4000 },
  { month: "Feb", expenses: 9000, profit: 6000 },
  { month: "Mar", expenses: 9500, profit: 7500 },
  { month: "Apr", expenses: 8700, profit: 5300 },
  { month: "May", expenses: 10000, profit: 10000 },
];

// Customer Growth
export const customerGrowthData = [
  { month: "Jan", customers: 200 },
  { month: "Feb", customers: 400 },
  { month: "Mar", customers: 650 },
  { month: "Apr", customers: 900 },
  { month: "May", customers: 1200 },
];

// Sales by Region
export const salesByRegionData = [
  { region: "North America", sales: 4000 },
  { region: "Europe", sales: 3000 },
  { region: "Asia", sales: 5000 },
  { region: "South America", sales: 2000 },
];

// Product Performance
export const productPerformanceData = [
  { product: "Product A", performance: 85 },
  { product: "Product B", performance: 65 },
  { product: "Product C", performance: 50 },
];

// Churn & Retention
export const churnRetentionData = [
  { category: "Retained", value: 78 },
  { category: "Churned", value: 22 },
];

// Transactions Table
export const transactions = [
  { date: "2025-08-28", customer: "John Doe", amount: "$250", status: "Paid" },
  { date: "2025-08-27", customer: "Jane Smith", amount: "$420", status: "Pending" },
  { date: "2025-08-26", customer: "Mike Ross", amount: "$310", status: "Paid" },
];

// Customer Segmentation
export const customerSegmentationData = [
  { segment: "Enterprise", value: 45 },
  { segment: "SMB", value: 30 },
  { segment: "Individual", value: 25 },
];

// Top Performers
export const topPerformers = [
  { name: "Product A", sales: 5000 },
  { name: "Product B", sales: 3500 },
  { name: "Product C", sales: 2700 },
];

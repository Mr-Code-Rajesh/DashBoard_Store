import {
  revenueTrendData,
  profitVsExpensesData,
  cashFlowData,
  expenseBreakdownData,
  budgetVsActualData,
  forecastingData,
  arVsApData,
  topCustomersData,
  topExpensesData,
} from "./FinancialData";

export const chartConfig = [
  { id: "revenueTrend", title: "Revenue Trend", type: "line", data: revenueTrendData, dataKey: "revenue", xKey: "month" },
  { id: "profitVsExpenses", title: "Profit vs Expenses", type: "bar-dual", data: profitVsExpensesData, keys: ["profit", "expenses"], xKey: "month" },
  { id: "cashFlow", title: "Cash Flow", type: "line", data: cashFlowData, dataKey: "flow", xKey: "month" },
  { id: "expenseBreakdown", title: "Expense Breakdown", type: "pie", data: expenseBreakdownData, dataKey: "value" },
  { id: "budgetVsActual", title: "Budget vs Actual", type: "bar-dual", data: budgetVsActualData, keys: ["budget", "actual"], xKey: "month" },
  { id: "forecasting", title: "Forecasting (Projection)", type: "line", data: forecastingData, dataKey: "forecast", xKey: "month" },
  { id: "arVsAp", title: "AR vs AP", type: "bar-dual", data: arVsApData, keys: ["receivables", "payables"], xKey: "month" },
  { id: "topCustomers", title: "Top 5 Customers", type: "bar", data: topCustomersData, dataKey: "revenue", xKey: "customer" },
  { id: "topExpenses", title: "Top 5 Expense Categories", type: "bar", data: topExpensesData, dataKey: "amount", xKey: "category" },
];

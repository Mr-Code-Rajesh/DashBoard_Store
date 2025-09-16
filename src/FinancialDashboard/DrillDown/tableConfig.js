import {
  transactionsData,
  balanceSheetData,
  profitLossData,
  cashFlowStatementData,
  agingReportData,
} from "./TableFinancialData";

export const tableConfig = [
  {
    id: "transactions",
    title: "Transactions",
    columns: ["Date", "Customer", "Amount", "Status"],
    data: transactionsData,
  },
  {
    id: "balanceSheet",
    title: "Balance Sheet Snapshot",
    columns: ["Account", "Type", "Amount"],
    data: balanceSheetData,
  },
  {
    id: "profitLoss",
    title: "Profit & Loss Statement",
    columns: ["Category", "Amount"],
    data: profitLossData,
  },
  {
    id: "cashFlowStatement",
    title: "Cash Flow Statement",
    columns: ["Activity", "Inflow", "Outflow"],
    data: cashFlowStatementData,
  },
  {
    id: "agingReport",
    title: "Aging Report",
    columns: ["Customer", "0-30 Days", "31-60 Days", "61-90 Days", "90+ Days"],
    data: agingReportData,
  },
];

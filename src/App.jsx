import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import BIDashboard from "./BIcomponents/BIDashboard";
import {ProductAnalytics} from "./Productcomponents/ProductAnalytics";
import FinancialDashboard from "./FinancialDashboard/FinancialDashboard"

function App() {
  return (  
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-4 overflow-y-auto">
          <Routes>
            <Route path="/" element={<BIDashboard />} />
            <Route path="/product" element={<ProductAnalytics />} />
            <Route path="/financial" element={<FinancialDashboard/>} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;


import { Link, useLocation } from "react-router-dom";
import { BarChart3, PieChart, LayoutDashboard,DollarSign,Headphones,ShoppingCart } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { name: "BI Dashboard", path: "/", icon: <BarChart3 size={20} /> },
    { name: "Product Analytics", path: "/product", icon: <PieChart size={20} /> },
    { name: "Financial", path: "/financial", icon: <DollarSign size={20} /> },
    { name: "Customer Support", path: "/support", icon: <Headphones size={20} /> },
    { name: "Sales", path: "/sales", icon: <ShoppingCart size={20} /> }

  ];

  return (
    <div className="w-64 bg-gray-900 text-gray-100 flex flex-col">
      {/* Logo / Title */}
      <div className="h-16 flex items-center justify-center border-b border-gray-700">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <LayoutDashboard size={24} />
          Dashboard
        </h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
              location.pathname === item.path
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:bg-gray-700 hover:text-white"
            }`}
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;

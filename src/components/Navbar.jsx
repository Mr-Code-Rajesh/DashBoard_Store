import { Search, Bell, User } from "lucide-react";

const Navbar = () => {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shadow-sm py-5">
      {/* Left - App Title */}
      <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>

      {/* Middle - Search Bar */}
      <div className="flex-1 max-w-md mx-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      {/* Right - Icons / Profile */}
      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-full hover:bg-gray-100">
          <Bell size={20} className="text-gray-600" />
          <span className="absolute top-1 right-1 inline-flex h-2 w-2 rounded-full bg-red-500"></span>
        </button>
        <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-3 py-1 rounded-lg">
          <User size={20} className="text-gray-600" />
          <span className="text-gray-700 font-medium">Saktrix</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

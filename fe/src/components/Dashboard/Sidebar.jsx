import { NavLink } from "react-router-dom";
import { AiOutlineHome, AiOutlineLaptop, AiOutlineCloudServer, AiOutlineGlobal, AiOutlineCreditCard, AiOutlineBarChart } from "react-icons/ai";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: <AiOutlineHome /> },
    { name: "Compute", path: "/dashboard/compute", icon: <AiOutlineLaptop /> },
    { name: "Storage", path: "/dashboard/storage", icon: <AiOutlineCloudServer /> },
    { name: "Networking", path: "/dashboard/networking", icon: <AiOutlineGlobal /> },
    { name: "Billing", path: "/dashboard/billing", icon: <AiOutlineCreditCard /> },
    { name: "Monitoring", path: "/dashboard/monitoring", icon: <AiOutlineBarChart /> },
  ];

  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
      <div className="flex items-center justify-center h-16 bg-gray-900 text-xl font-bold">
        MyAWS
      </div>
      <nav className="flex-1 p-4">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            end={item.path === "/dashboard"} // Add `end` for exact match on dashboard
            className={({ isActive }) =>
              `flex items-center p-3 mb-2 rounded-lg hover:bg-gray-700 ${
                isActive ? "bg-gray-700" : ""
              }`
            }
          >
            <span className="text-2xl mr-4">{item.icon}</span>
            {item.name}
          </NavLink>
        ))}
      </nav>
      <div className="p-4 text-sm text-gray-400">
        © 2025 MyAWS Clone. All Rights Reserved.
      </div>
    </div>
  );
};

export default Sidebar;

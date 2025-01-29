import { Route, Routes } from "react-router-dom";
import Sidebar from "../../components/Dashboard/Sidebar";
import Header from "./../../components/Dashboard/Header";
import DashboardTable from "./DashboardTable";
import Compute from './Content/Compute';
import Networking from './Content/Networking';
import Storage from './Content/Storage';
import Billing from './Content/Billing';
import Monitoring from './Content/Monitoring';
import Profile from "./Content/Profile";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6">
          <Routes>
            <Route path="/" element={<DashboardTable />} />
            <Route path="compute" element={<Compute />} />
            <Route path="storage" element={<Storage />} />
            <Route path="networking" element={<Networking />} />
            <Route path="billing" element={<Billing />} />
            <Route path="monitoring" element={<Monitoring />} />
            <Route path="profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

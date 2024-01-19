import Sidebar from "../components/Sidebar.jsx";
import NavBar from "../components/NavBar.jsx";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="layout dark:bg-gray-900">
      <Sidebar />
      <NavBar />
      <Outlet />
    </div>
  );
};

export default DashboardLayout;

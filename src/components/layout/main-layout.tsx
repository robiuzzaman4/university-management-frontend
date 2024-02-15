import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

const MainLayout = () => {
  return (
    <div className="flex gap-10">
      <Sidebar />
      <div className="ml-[280px]">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;

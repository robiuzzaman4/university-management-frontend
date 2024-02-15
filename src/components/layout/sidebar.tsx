import { adminNavlinks } from "@/routes/admin.routes";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-full max-w-[280px] bg-background border-r border-border min-h-screen p-4 flex flex-col gap-12">
      <h1 className="text-3xl text-cyan-500 font-bold">PH Uni</h1>
      {/* OVERVIEW */}
      <div className="grid gap-3">
        <p className="font-medium text-base text-primary">Overview</p>
        <div className="flex flex-col items-start gap-3 w-full border-l border-border">
          {adminNavlinks?.overview?.map((link) => (
            <NavLink
              key={link.label}
              to={link.url}
              className={({ isActive }: any) =>
                isActive
                  ? "text-cyan-500 border-l border-cyan-500 pl-3 -ml-[1px] font-medium text-base"
                  : "pl-3 -ml-[1px] font-medium text-base text-muted-foreground"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
      {/* USER MANAGEMENT */}
      <div className="grid gap-3">
        <p className="font-medium text-base text-primary">User Managment</p>
        <div className="flex flex-col items-start gap-3 w-full border-l border-border">
          {adminNavlinks?.userManagment?.map((link) => (
            <NavLink
              key={link.label}
              to={link.url}
              className={({ isActive }: any) =>
                isActive
                  ? "text-cyan-500 border-l border-cyan-500 pl-3 -ml-[1px] font-medium text-base"
                  : "pl-3 -ml-[1px] font-medium text-base text-muted-foreground"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

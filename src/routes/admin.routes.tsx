import AdminDashboard from "@/pages/admin/admin-dashboard";
import CreateAdmin from "@/pages/admin/create-admin";
import CreateFaculty from "@/pages/admin/create-faculty";
import CreateStudent from "@/pages/admin/create-student";

export const adminRoutes = [
  {
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "create-admin",
    element: <CreateAdmin />,
  },
  {
    path: "create-faculty",
    element: <CreateFaculty />,
  },
  {
    path: "create-student",
    element: <CreateStudent />,
  },
];

export const adminNavlinks = {
  overview: [{ label: "Dashboard", url: "/admin/dashboard" }],
  userManagment: [
    { label: "Create Admin", url: "/admin/create-admin" },
    { label: "Create Faculty", url: "/admin/create-faculty" },
    { label: "Create Student", url: "/admin/create-student" },
  ],
};

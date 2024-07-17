import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../(apps)/layout/DashboardLayout";
import Dashboard from "../(apps)/(dashboard)/dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path:"/",
        element: <Dashboard/>
      }
    ]
  },
 
]);

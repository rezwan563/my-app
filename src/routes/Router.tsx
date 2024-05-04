import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../(apps)/layout/AppLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
  },
 
]);

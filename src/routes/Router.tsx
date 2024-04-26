import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/(home)/Home";
import PageOne from "../pages/page1/PageOne";
import Login from "../pages/login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/page-one",
    element: <PageOne />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

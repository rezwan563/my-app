import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/(home)/Home";
import PageOne from "../pages/page1/PageOne";

export const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/page-one',
    element:<PageOne/>
  }
]);

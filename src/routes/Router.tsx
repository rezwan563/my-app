import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout";
import Home from "../pages/(home)/Home";
import Contact from "../pages/(contact)/Contact";
import Product from "../pages/(product)/Product";
import ProductDetails from "../pages/(product)/product-details/ProductDetails";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children:[
      {
        path:'/',
        element:<Home/>,

      },
      {
        path:'/contact',
        element:<Contact/>
      }
    ]
    
  },
  {
    path:'/product',
    element: <Product/>,
    children:[
      {
        path:'/product/:id',
        element:<ProductDetails/>
      }
    ]
  }
]);

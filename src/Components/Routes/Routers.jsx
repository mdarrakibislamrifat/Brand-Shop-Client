import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import AddProduct from "../../Pages/AddProduct/AddProduct";
import MyCart from "../../Pages/MyCart/MyCart";
import Login from "../../Pages/Login/Login";
import Root from "../Root/Root";
import Errorpage from "../ErrorPage/Errorpage";

  const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<Errorpage></Errorpage>,
        children:[
            {
                path: "/",
                element: <Home></Home>,
              },
              {
                  path:'/addproduct',
                  element:<AddProduct></AddProduct>
              },
              {
                  path:'/mycart',
                  element:<MyCart></MyCart>
              },
              {
                  path:'/login',
                  element:<Login></Login>
              }
        ]
        
    }
   
  ]);

export default router;
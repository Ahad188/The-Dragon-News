import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Layout from "../Layout/Layout";

const router = createBrowserRouter([
     {
          path:'/',
          element:<Layout></Layout>,
          children:[
               {
                    path:'/',
                    element:<Home></Home>
               }
          ]
     }
])


export default router;
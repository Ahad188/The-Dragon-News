import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Layout from "../Layout/Layout";
import Catagorie from "../Pages/Home/Catagorie/Catagorie";
import NewsLayout from "../Layout/NewsLayout";
import News from "../Pages/News/News/News";
import LoginLayout from "../Layout/LoginLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
     {
          path:'/',
          element:<LoginLayout></LoginLayout>,
          children:[
               {
                    path:'/',
                    element:<Navigate to='/catagories/0'></Navigate>
               },
               {
                    path:'/login',
                    element:<Login></Login>,
               },
               {
                    path:'/register',
                    element:<Register></Register>
               }
          ]
     },
     
     {
          path:'/catagories',
          element:<Layout></Layout>,
          children:[
               {
                    path:':id',
                    element:<Catagorie></Catagorie>,
                    loader:({params})=>fetch(`http://localhost:5000/catagories/${params.id}`)
               },
               
          ]
     },
     {
          path:'news',
          element:<NewsLayout></NewsLayout>,
          children:[
               {
                    path:':id',
                    element:<News></News>,
                    loader:({params})=>fetch(`http://localhost:5000/news/${params.id}`)
               }
          ]
     }
])
export default router;
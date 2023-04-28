import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Layout from "../Layout/Layout";
import Catagorie from "../Pages/Home/Catagorie/Catagorie";
import NewsLayout from "../Layout/NewsLayout";
import News from "../Pages/News/News/News";

const router = createBrowserRouter([
     {
          path:'/',
          element:<Layout></Layout>,
          children:[
               {
                    path:'/',
                    element:<Catagorie></Catagorie>,
                    loader:()=>fetch('http://localhost:5000/news')
               },
               {
                    path:'/catagories/:id',
                    element:<Catagorie></Catagorie>,
                    loader:({params})=>fetch(`http://localhost:5000/catagories/${params.id}`)
               },
               
          ]
     },
     {
          path:'/news',
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
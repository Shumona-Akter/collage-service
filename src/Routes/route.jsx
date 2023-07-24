import {
  createBrowserRouter,
} from "react-router-dom";

import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import Main from "../Pages/Main/Main";
import Admission from "../Pages/Admission/Admission";
import LoginPage from "../Pages/Login/LoginPage";
import CollageDetails from "../Pages/CollageDetails";
import Resister from "../Pages/Resister/Resister";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        errorElement:<ErrorPage></ErrorPage>,
       children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/admission',
          element:<Admission/>
        },
        {
          path:'/login',
          element: <LoginPage></LoginPage>
        
        },
        {
          path:'/register',
          element: <Resister></Resister>
        
        },
       {
        path:'/category/:id',
        element:<PrivateRoute><CollageDetails></CollageDetails></PrivateRoute>,
        loader: ({params})=> fetch(`https://school-book-service-server.vercel.app/collage/${params.id}`)
       }
       
       ]
    }  
  ]);



export default router;
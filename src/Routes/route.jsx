import {
  createBrowserRouter,
} from "react-router-dom";

import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import Main from "../Pages/Main/Main";
import Admission from "../Pages/Admission/Admission";
import LoginPage from "../Pages/Login/LoginPage";

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
       
       ]
    }  
  ]);



export default router;
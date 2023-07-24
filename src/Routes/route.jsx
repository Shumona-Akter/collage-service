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
        path:'/:id',
        element:<CollageDetails></CollageDetails>,
        loader: ({params})=> fetch(`http://localhost:3000/collage${params._id}`)
       }
       
       ]
    }  
  ]);



export default router;
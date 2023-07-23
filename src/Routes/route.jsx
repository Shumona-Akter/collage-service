import {
  createBrowserRouter,
} from "react-router-dom";

import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Resister from "../Pages/Resister/Resister";
// import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        errorElement:<ErrorPage></ErrorPage>,
       children:[
        {
          path:'resister',
          element:<Resister/>
        },
       ]
    }  
  ]);



export default router;
import { useContext } from "react";
import { authContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
const {user, loading} = useContext(authContext)
const location = useLocation()
    if(loading){
        return <div className='text-center p-5 m-5'>
            <h1>loading...........</h1>
        </div>
    }
   
    if(user){
        return children
    }
    console.log(user)
    return <Navigate to="/login" state={{form:location}} replace></Navigate>

   
};

export default PrivateRoute;


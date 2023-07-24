
import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../Provider/AuthProvider";

const Navber = () => {
    const { user, logOut } = useContext(authContext)
    const handleLogout = () => {
        logOut()
            .then()
            .catch(err => console.log(err))

    }
    const navOptions = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="class">Colleges</Link></li>
    <li><Link to="admission">Admission</Link></li>
    <li><Link to="/dashboard">My College</Link></li>
    {
        user ? <>
            <div className="avatar">
                <div className="w-12 rounded-full">
                    <img src={user.photoURL} />
                </div>
            </div>
            <li><Link onClick={handleLogout}>Logout</Link></li></> :
            <>
                <li><Link to="/login">Login</Link></li>
            </>
    }
     </>

    return (
        <>
        <div className="navbar fixed z-10  text-base bg-white text-black">
        
          
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                        {navOptions}
                    </ul>
                </div>
                <h1 className="md:ml-5 text-primary font-bold font">Studies</h1>
            </div>
            <div className="navbar-end hidden lg:flex ">
                <ul className="menu menu-horizontal text-xl px-1">
                    {navOptions}
                </ul>
            </div>
          
        </div>
        
    </>
    );
};

export default Navber;
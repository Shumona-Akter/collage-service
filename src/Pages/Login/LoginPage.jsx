import Banner from "../../Component/Banner";
import {  Link, useLocation, useNavigate } from 'react-router-dom';
// import { authContext } from '../../Provider/AuthProvider';
import { authContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
import { FaGoogle } from 'react-icons/fa';


const LoginPage = () => {
    const {user,signInGoogle,signInGithub, setUser,authError,setAuthError,signIn,} = useContext(authContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.form?.pathname || "/"

    const handleGoogleSignIn = ()=>{
        signInGoogle()
        .then(result =>{
          const googleUser = result.user
         setUser(googleUser)
         navigate(from, {replace: true})
        })
        .catch(error => {
          console.log(error)
        })
        
      }
    
      
      // sign in google
      const handleSignIn = (event)=>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value
        // const password = form.Password.value
        const password = form.password.value
        console.log(email,password)
        signIn(email, password)
        .then(result =>{
          const loggedUser = result.user
          setUser(loggedUser)
          setAuthError("")
          navigate(from, {replace: true})
          event.target.reset()
          
        })
        .catch(err => {
          setAuthError("Invalid email or password")
        })
      }
    return (
        <div>
            <Banner></Banner>
          <div className="max-w-screen-sm mx-auto my-20 bg-blue-400 p-5">
          <form onSubmit={handleSignIn}>
                <div >
                    <div className="flex mb-3">
                         
                         <input className="w-full mx-auto p-2 rounded-md mr-4 capitalize outline-none " type="emai" name="email" placeholder="email"/>
                         <input name="password" className="w-full mx-auto p-2 rounded-md mr-4 capitalize outline-none " type="password" placeholder="Your Password"/>
                    </div>
                   
                    <button className="w-full btn btn-primary bg-white text-blue-500">Login</button>
                    <h1 className='text-white fs-6  text-center py-1'>Sign in with google</h1>
   
                </div>
            </form>
     <div>
     <div className='text-center'>
      <button className='text-red-600 text-2xl' onClick={handleGoogleSignIn}><FaGoogle></FaGoogle></button>
      
    </div>
                    <Link to="/register" className="text-white"> I am new, <span className="underline underline-offset-1">Create Account</span></Link>
     </div>
          </div>
        </div>
    );
};

export default LoginPage;
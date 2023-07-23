// import React, { useContext } from 'react';
// import { Button, Container, Form } from 'react-bootstrap';
import {  useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../Provider/AuthProvider';
import { useContext } from 'react';
// import { FaGoogle } from 'react-icons/fa';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { authContext } from '../../Provider/AuthProvider';
// import { FaGoogle } from 'react-icons/fa';

const Login = () => {
//   document.title = "Kids Dream | Login"
//     const {user ,signInGoogle,signInGithub, setUser,authError,setAuthError,signIn,} = useContext(authContext)
//     const navigate = useNavigate()
//     const location = useLocation()
//     const from = location.state?.form?.pathname || "/"
  
  
//     // const form = Location.state?.form?.pathname || "/"
  
//     const handleGoogleSignIn = ()=>{
//       signInGoogle()
//       .then(result =>{
//         const googleUser = result.user
//        setUser(googleUser)
//        navigate(from, {replace: true})
//       })
//       .catch(error => {
//         console.log(error)
//       })
      
//     }
  
    
//     // sign in google
//     const handleSignIn = (event)=>{
//       event.preventDefault()
//       const form = event.target;
//       const email = form.email.value
//       // const password = form.Password.value
//       const password = form.password.value
//       console.log(email,password)
//       signIn(email, password)
//       .then(result =>{
//         const loggedUser = result.user
//         setUser(loggedUser)
//         setAuthError("")
//         navigate(from, {replace: true})
//         event.target.reset()
        
//       })
//       .catch(err => {
//         setAuthError("Invalid email or password")
//       })
//     }

    return (
       <div>
<h1>lsllslslsl</h1>
       </div>
    );
};

export default Login;
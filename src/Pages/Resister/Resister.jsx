import { useContext, useState } from "react";
import { authContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Banner from "../../Component/Banner";
import { updateProfile } from "firebase/auth";


const Resister = () => {
    const {signUp,authError,setAuthError, user, setUser} = useContext(authContext)
    const [passwordCheaked, setPasswordCheaked] = useState("")
    const [error, setError]  = useState("")
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.form?.pathname || "/"
    
    
    const handlePassword =(e) =>{
      const pass = e.target.value
      setPasswordCheaked(pass)
      if(pass.length < 6){
        setError("The password is less than 6 characters.")
  
      }
      else{
        setError("")
      }
      
    }
    const handleResister = (event) =>{
      event.preventDefault()
      const form = event.target;
      const name = form.name.value
      const email = form.email.value
      const password = form.password.value
      const photoUrl = form.photoUrl.value
      // console.log(name,Password,photoUrl)
  
      
        signUp(email, password)
        .then (result =>{
          const resisterUser = result.user
          setUser(resisterUser)
          setAuthError("")
          event.target.reset()
          userProfileUpdate(result.user, name, photoUrl)
          navigate(from, {replace: true})
          console.log(result.user)
         
        })
        .catch(error =>{
          console.log(error.message)
        } )
  
      
  // user profile update
        const userProfileUpdate = (user, name, photoUrl) =>{
          updateProfile(user, {
            displayName: name,
            photoURL: photoUrl
          })
          .then(() => {
            console.log(name)
          }).catch((error) => {
            console.log(error)
          });
        }
      }
    return (
        <div>
            <Banner></Banner>
            <form onSubmit={handleResister} className="max-w-screen-sm mx-auto my-20 bg-blue-400 p-5">
                <div >
                <div className="flex mb-3">
                         
                <input name="photoUrl" className="w-full mx-auto p-2 rounded-md mr-4 capitalize outline-none " type="text" placeholder="photoUrl"/>
                    <input name="name" className="w-full mx-auto p-2 rounded-md mr-4 capitalize outline-none " type="text" placeholder="Name"/>
                    </div>
                    <div className="flex mb-3">
                         
                         <input className="w-full mx-auto p-2 rounded-md mr-4 capitalize outline-none " type="emai" name="email" placeholder="email"/>
                         <input name="password" className="w-full mx-auto p-2 rounded-md mr-4 capitalize outline-none " type="password" placeholder="Your Password"/>
                    </div>
                   
                   
                    <button className="w-full btn btn-primary bg-white text-blue-500">Resister</button>
                    <h1 className='text-white fs-6  text-center py-1'>Sign in with google</h1>
   
                </div>
            </form>
        </div>
    );
};

export default Resister;
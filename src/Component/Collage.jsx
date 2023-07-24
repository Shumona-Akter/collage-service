import { useContext, useEffect, useState } from "react";
import { authContext } from "../Provider/AuthProvider";
import AllSingleClass from "./AllSingleClass";


const Collage = () => {
    const { user } = useContext(authContext)
    console.log(user?.email)
    const [Class, setClass] = useState([])
   
    const url = 'https://school-book-service-server.vercel.app/collage'
    useEffect(() =>{
        fetch (url)
        .then(res => res.json())
        .then(data =>  {
        setClass(data)
    }
         
        )
    },[url])
    console.log(Class)
    return (
        <div className="max-w-screen-lg mx-auto ">
            <h1 className="text-center text-2xl bold">Populer Collage</h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {
                        Class.map(cls => <AllSingleClass key={cls._id}
                        cls ={cls}></AllSingleClass>)
                      }  
                </div>
               </div>
    );
};

export default Collage;
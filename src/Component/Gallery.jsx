import { useEffect, useState } from "react";
import AllSingleClass from "./AllSingleClass";
import SingleGallery from "./SingleGallery";

const Gallery = () => {
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
        <div>
            <h1></h1>
            <div className="max-w-screen-lg mx-auto my-20 ">
            <h1 className="text-center text-2xl bold">Our Gallery</h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {
                        Class.map(cls => <SingleGallery key={cls._id}
                        cls ={cls}></SingleGallery>)
                      }  
                </div>
               </div>
        </div>
    );
};

export default Gallery;
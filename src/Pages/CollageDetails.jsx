import { Link, useLoaderData} from "react-router-dom";
import Banner from "../Component/Banner";

const CollageDetails = () => {
    const collageDetails = useLoaderData()
   
    const { college_image, image, name , position,admssion,alumni_events, details,_id, research} = collageDetails
    console.log(collageDetails)
    return (
        <div>
        <div className="hero min-h-screen" style={{backgroundImage: `url(${college_image})`}}>
<div className="hero-overlay bg-opacity-60"></div>
<div className="hero-content text-center text-neutral-content">
<div className="w-1/2 mx-auto">
  <h1 className=" text-4xl mb-5 font-bold">{name}</h1>
  <p className="mb-5">PFEC Global is proud to dedicatedly work in Bangladesh for international students and assist them in winning prestigious scholarships during a resourceful education journey.</p>
  <Link to={"/admission"}><button className="btn btn-primary">Admission</button></Link>
</div>
</div>
</div>
<div className="max-w-screen-lg mx-auto my-20">
    <p className="text-xl text-blue bold">Name : {name}</p>
    <p className="text-xl text-blue bold">position : {position}</p>
    <p className="text-xl text-blue bold">admssion : {admssion}</p>
    <p className="text-xl text-blue bold">alumni_events : {alumni_events}</p>
    <p className="text-xl text-blue bold">research : {research}</p>
</div>
    </div>
    );
};

export default CollageDetails;
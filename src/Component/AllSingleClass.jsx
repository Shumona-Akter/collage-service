import { Link } from "react-router-dom";

const AllSingleClass = ({cls}) => {
    const  { college_image, image, name , details, _id, research} = cls
    return (
        <div>
          <div className="card bg-base-100 shadow-xl">
  <div className="card-body">
  <figure><img src={college_image} alt="Shoes" /></figure>
    <h2 className="card-title">{name}</h2>
    <p>{details}</p>
    <Link to={`/category/${_id}`}><button className='btn btn-primary w-full'> Read More</button></Link>
    
  </div>
  
</div>  
        </div>
    );
};

export default AllSingleClass;
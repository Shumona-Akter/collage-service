import React from 'react';

const SingleGallery = ({cls}) => {
    const  { college_image, image, name , details, _id, research} = cls
    return (
        <div>
            
            <div>
          <div className="card bg-base-100 shadow-xl">

  <div className="card-body">
  <figure><img className='h-[300px]' src={college_image} alt="Shoes" /></figure>
  </div>
  
</div>  
        </div>
        </div>
    );
};

export default SingleGallery;
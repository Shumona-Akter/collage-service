import { useLoaderData, useParams } from "react-router-dom";

const CollageDetails = () => {
    const {id} = useParams()
    const collageDetails = useLoaderData()
    console.log(collageDetails)
    const { college_image, image, name , details,_id, research} = collageDetails
    return (
        <div>
            
        </div>
    );
};

export default CollageDetails;
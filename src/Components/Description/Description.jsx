import { useLoaderData, useParams } from "react-router-dom";

const Description = () => {
    const cardDetails = useLoaderData();
    const{id} =useParams();
    const idInt = parseInt(id)
    const cardDetail = cardDetails.find(cardDetail => cardDetail.id == idInt);
    const {title, image, description} = cardDetail;
    console.log( id);
    
    return (
        <div className="h-screen space-y-4 ">
            <img className="w-full rounded h-2/3 mt-8" src={image} alt="" />
            <h1 className="font-bold text-5xl">{title}</h1>
            <p>{description}</p>
        </div>
    );
};

export default Description;
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { saveDonation } from "../../localStorage";

const Description = () => {
    const handleDonate =() =>{
        saveDonation(idInt)
        toast('Successfully Donated')
    }
    const cardDetails = useLoaderData();
    const{id} =useParams();
    const idInt = parseInt(id)
    const cardDetail = cardDetails.find(cardDetail => cardDetail.id == idInt);
    const {title, image, description, price, text_color} = cardDetail;
    console.log( id);
    
    return (
        <div className="space-y-4">
           <div className=" relative">
           <img className="h-[500px] w-full rounded  mt-8" src={image} alt="" />
           <div className="absolute bottom-0 px-4 py-3 bg-gray-800/50 w-full">
         <button style={{backgroundColor: `${text_color}`}} onClick={handleDonate} className="btn btn-primary text-white font-semibold border-none">Donate ${price}</button>
        </div>
           </div>
            <h1 className="font-bold text-5xl">{title}</h1>
            <p className="mb-8">{description}</p>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Description;
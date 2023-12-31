import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../localStorage";
import MyDonation from "../MyDonation/MyDonation";

const Donation = () => {
    const allData = useLoaderData();
    const [myDonations, setMyDonations] = useState([]);
    const [dataLength, setDataLength] =useState(4);
    useEffect( () => {
        const storedDonation = getStoredDonation();
        if(allData.length > 0){
            const donations =[];
            for( const id of storedDonation){
                const donation = allData.find(donation => donation.id == id);
                if(donation){
                    donations.push(donation);
                }
            }
            setMyDonations(donations);
        }
    },[]);
    return (
        <div className="my-16 px-4 max-w-screen-xl mx-auto">
           
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {
                    myDonations.slice(0, dataLength).map(myDonation => <MyDonation key={myDonation.id} myDonation={myDonation}></MyDonation>)
                }
            </div>
           <div className={dataLength == myDonations.length || myDonations.length < 4 ? 'hidden' : 'visible'}>
           <div className='flex justify-center mt-8'>
                <button onClick={() => setDataLength(myDonations.length)} className="btn bg-[#009444] text-white">See All</button>
            </div>
           </div>
        </div>
    );
};

export default Donation;
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../localStorage";
import MyDonation from "../MyDonation/MyDonation";

const Donation = () => {
    const allData = useLoaderData();
    const [myDonations, setMyDonations] = useState([]);
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
    },[])
    return (
        <div className="mt-16">
           
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {
                    myDonations.map(myDonation => <MyDonation key={myDonation.id} myDonation={myDonation}></MyDonation>)
                }
            </div>
        </div>
    );
};

export default Donation;
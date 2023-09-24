
import { useEffect, useState } from "react";
import Banner from "../Components/Banner/Banner";
import Card from "../Components/Card/Card";

const Home = () => {
    const [cards, setCards] =useState([]);
    useEffect( () =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data =>  setCards(data))
    },[])
   
    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-4 mt-24 px-4 lg:px-0 ">
                {
                    cards.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default Home;
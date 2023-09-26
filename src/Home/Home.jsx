
import { useEffect, useRef, useState } from "react";
import Banner from "../Components/Banner/Banner";
import Card from "../Components/Card/Card";

const Home = () => {
    const [searched, setSearched] = useState('');
    const [searchedCards, setSearchedCards] = useState([]);

    const donationSearch = useRef([]);
    
    const [cards, setCards] =useState([]);
    useEffect( () =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data =>  setCards(data))
    },[]);

    const handleSearch = (e) => {
        e.preventDefault();
        setSearched(e.target.search.value);
        }; 

        useEffect(() =>{
            donationSearch.current = cards.filter(card=> card.category == searched);
            console.log(searched, donationSearch);
            setSearchedCards(donationSearch.current);
        },[searched])

        
        
        
    

   
   
    return (
        <div>
            <Banner handleSearch={handleSearch}></Banner>
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-4 mt-24 px-4 lg:px-0 mb-8 max-w-screen-xl mx-auto ">
                {   

                    (searchedCards.length > 0) ? searchedCards.map(card => <Card key={card.id} card={card}></Card>)  :
                    cards.map(card => <Card key={card.id} card={card}></Card>)
                    
                    
                }
            </div>
        </div>
    );
};

export default Home;
import { useState } from "react";
import TinderCard from "react-tinder-card";
import "./WoofCards.css"
import { useEffect } from "react";
import database from "./firebase"
import { collection, onSnapshot } from "firebase/firestore";



function WoofCards()  {
    const [Pets, setPets] = useState([
    ]); 


    useEffect(() => {
        const unsubscribe = onSnapshot(collection(database, 'pets'), (snapshot) => {
            setPets(snapshot.docs.map(doc => doc.data()));
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);



    return (  
        <div>

            <div className="WoofCards__cardContainer">


            {Pets.map((pet) => (
                <TinderCard className="swipe" key={pet.name} preventSwipe={['up','down']}>
                    <div className="card" style={{ backgroundImage: `url(${pet.url})` }}>
                        <h3>{pet.name}</h3>
                    </div>
                </TinderCard>
            ))}
        </div>

            </div>


    );
}
 
export default WoofCards;

import { useEffect, useState } from "react";
import EachCard from "./EachCard";


const PremiumCard = () => {

    const [premiums, setPremiums] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/premiumBiodatas')
        .then(res=> res.json())
        .then(data=> setPremiums(data))
    },[])

    console.log(premiums);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:container lg:mx-auto">
            {
                premiums.map(biodata=> <EachCard key={biodata._id} biodata={biodata}></EachCard>)
            }
        </div>
    );
};

export default PremiumCard;
import {  useLoaderData } from "react-router-dom";
import SingleCard from "../Singlecard/SingleCard";
import NoDataFoundPage from "../NoDataFoundPage/NoDataFoundPage";




const BrandCard = () => {
    const products=useLoaderData()

    
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {
                
                    products.length>0? products.map(card=><SingleCard key={card._id} card={card}></SingleCard>):<NoDataFoundPage></NoDataFoundPage>
                
            }
        </div>
    );
};

export default BrandCard;
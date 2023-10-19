import { useLoaderData } from "react-router-dom";
import NoDataFoundPage from "../../Components/NoDataFoundPage/NoDataFoundPage";
import SingleCart from "../../Components/SingleCart.jsx/SingleCart";


const MyCart = () => {
    const cartData=useLoaderData();
    
    
    
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">
            {
                cartData.length>0? cartData.map(cart=><SingleCart key={cart._id} cart={cart}></SingleCart>): <NoDataFoundPage></NoDataFoundPage>
            }
           
        </div>
    );
};

export default MyCart;
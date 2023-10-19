import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const detail = useLoaderData();
  const { _id, image, name, brandName, type, price, shortDescription, rating } =
    detail || {};

  const handleAddToCart = (item) => {
    fetch("http://localhost:5000/carts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((result) => result.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Successfully Added Cart!");
        }
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="card border-4 border-violet-500 w-full bg-base-100 shadow-xl">
      <Toaster position="top-center" reverseOrder={false} />
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Brand: {brandName}</h2>
        <p>Model :{name}</p>
        <p>Type :{type}</p>
        <p>Price : ${price}</p>
        <p> {shortDescription}</p>
        <p>rating : {rating}</p>
        <div className="card-actions">
          <button
            onClick={() => handleAddToCart(detail)}
            className="btn btn-primary"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;

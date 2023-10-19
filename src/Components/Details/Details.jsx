import { useLoaderData } from "react-router-dom";

const Details = () => {
  const detail = useLoaderData();
  const { _id, image, name, brandName, type, price, shortDescription, rating } =
    detail || {};

  return (
    <div className="card border-4 border-violet-500 w-full bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Brand: {brandName}</h2>
        <p>Model :{name}</p>
        <p>Type :{type}</p>
        <p>Price : ${price}</p>
        <p> {shortDescription}</p>
        <p>rating : {rating}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Details;

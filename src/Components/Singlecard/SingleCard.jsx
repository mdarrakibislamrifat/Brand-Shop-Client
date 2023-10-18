
const SingleCard = ({ card }) => {
  const { image, name, brandName, type, price, shortDescription, rating } =
    card || {};
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl p-4 h-[500px] border-4 border-green-500">
        <figure>
          <img className="w-full"
            src={image}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 >{name}</h2>
          <h2 className="card-title">{brandName}</h2>
          <h2 >{type}</h2>
          <h2 >Price:$ {price}</h2>
          <p>{shortDescription}</p>
          <p>Ratings: {rating} </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add to Cart</button>
            <button className="btn btn-primary">View details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;

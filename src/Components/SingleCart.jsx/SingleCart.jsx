import { useState } from "react";
import Swal from "sweetalert2";

const SingleCart = ({ cart }) => {
  const { _id, image, name, brandName, type, price, shortDescription, rating } =
    cart || {};

    const [carts,setCarts]=useState(cart);
    


  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${_id}`,{
          method:'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Product has been deleted.", "success");
              const remaining=carts.filter(carts._id !==_id)
              setCarts(remaining)
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl p-4 h-[500px] border-4 border-violet-500">
        <figure>
          <img className="w-full" src={image} alt="Album" />
        </figure>
        <div className="card-body">
          <h2>{name}</h2>
          <h2 className="card-title">{brandName}</h2>
          <h2>{type}</h2>
          <h2>Price:$ {price}</h2>
          <p>{shortDescription}</p>
          <p>Ratings: {rating} </p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-secondary"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCart;

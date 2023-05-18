import { Link } from "react-router-dom";

const Toycart = ({ toy }) => {
  const {
    _id,
    photo,
    item,
    seller,
    sub,
    price,
    rating,
    quantity,
    description,
    email,
  } = toy;

  return (
   <div className="">
     <div className="card w-96 glass">
      <figure>
        <img src={photo} alt="car!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white">{item}</h2>
        <div className="text-white">
        <p>Seller - {seller}</p>
        <p>Sub-Category : {sub}</p>
        <p>Price : {price} .BDT</p>
        <p>Available Quantity : {quantity}</p>
        </div>
        <div className="card-actions justify-end">
          <Link to={`viewDetails/${_id}`}>
          <button className="btn bg-black">View Details</button></Link>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Toycart;

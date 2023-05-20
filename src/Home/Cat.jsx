import React from 'react';
import { Link } from 'react-router-dom';

const Cat = ({toy}) => {
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
        <div className="card w-96 glass">
  <figure><img src={photo} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{item}</h2>
    <p>Price- {price}</p> 
    <p>Rating- {rating}</p> 
    <div className="card-actions justify-end">
    <Link to={`/viewDetails/${toy._id}`}>
          <button className="btn bg-black">View Details</button></Link>
    </div>
  </div>
</div>
    );
};

export default Cat;
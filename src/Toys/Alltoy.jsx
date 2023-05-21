import { Link, useLoaderData } from "react-router-dom";
import Toycart from "./Toycart";

const Alltoy = () => {
  const toys = useLoaderData();
  const limitedToys = toys.slice(0, 20);


  
  return (
    <div  data-aos="fade-down">
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
          {/* _id,
    photo,
    item,
    seller,
    sub,
    price,
    rating,
    quantity,
    description,
    email, */}

           {
            toys.map((toy) => {
              return (
                <tr key={toy.id}>
                  <td>
                    <img
                      src={toy.photo}
                      alt="toy"
                      className="w-16 h-16 rounded-full"
                    />
                  </td>
                  <td>{toy.seller}</td>
                  <td>{toy.item}</td>
                  <td>{toy.sub}</td>
                  <td>{toy.price}</td>
                  <td>{toy.quantity}</td>
                  <td>
                    <Link to={`/viewDetails/${toy._id}`}>
          <button className="btn bg-black">View Details</button></Link>
          </td>
                </tr>
              );
            })
           }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Alltoy;

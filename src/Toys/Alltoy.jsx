import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Toycart from "./Toycart";

const Alltoy = () => {
  const toys = useLoaderData();
  const [searchQuery, setSearchQuery] = useState("");
  const limitedToys = toys.slice(0, 20);

  // Filter toys based on search query
  const filteredToys = toys.filter((toy) =>
    toy.item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div data-aos="fade-down">
      <div className="overflow-x-auto">
       <div className="flex items-center">
       <div className="mb-4 flex justify-end mr-4 my-8 font-mono">
          <label  className="mr-2 text-xl">
            Search:
          </label>
          {/* <h2>Search :</h2> */}
          <input className="input input-bordered"
            type="text"
            id="search"
            
            placeholder="Search by Name"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
       </div>
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
            {filteredToys.map((toy) => (
              <tr key={toy._id}>
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
                    <button className="btn bg-black">View Details</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Alltoy;

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
   <div className="text-white">
    <table class="table-auto">
  <thead>
    <tr>
      <th>Song</th>
      <th>Artist</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
    </tr>
    <tr>
      <td>Witchy Woman</td>
      <td>The Eagles</td>
      <td>1972</td>
    </tr>
    <tr>
      <td>Shining Star</td>
      <td>Earth, Wind, and Fire</td>
      <td>1975</td>
    </tr>
  </tbody>
</table>
     
          {/* <Link to={`/viewDetails/${_id}`}>
          <button className="btn bg-black">View Details</button></Link> */}
   </div>
  );
};

export default Toycart;

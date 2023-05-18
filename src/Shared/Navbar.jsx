import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
// import { Link } from 'react-router-dom';

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
        .then()
        .catch((err)=>{
            console.log(err);
        });

    };
    return (
        <div className='flex justify-between'>
            <div className="navbar bg-orange-600 text-white font-semi-bold text-xl w-full flex justify-between">
  <div className="">
    <img className='w-16 rounded-xl' src="https://th.bing.com/th/id/OIP.V4n4RRWhkY_FcPr3ZJ9-CgHaHa?pid=ImgDet&rs=1" alt="" />
  </div>
  <div className="space-x-4 ">
  <Link className='hover:text-black' to="/">Home</Link>
  <Link className='hover:text-black' to="/alltoy">All Toys</Link>
  <Link className='hover:text-black' to="/">My Toys</Link>
  <Link className='hover:text-black' to="/addtoy">Add A Toy</Link>
  <Link className='hover:text-black' to="/">Blogs</Link>
 

</div>
  <div>
 {user? (
            <li className="px-2 py-1 rounded bg-green-800 font-bold list-none btn">
            <button onClick={handleLogOut}>Logout</button>
          </li>
        ) : (
          <Link to="/signup">
            <li className="btn bg-green-700">Login</li>
          </Link>
          
          )}
        </div>
  </div>

        </div>
    );
};

export default Navbar;
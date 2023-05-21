import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex justify-between">
      <div className="navbar bg-zinc-800 text-white font-semi-bold text-xl w-full flex justify-between">
        <div className="">
          <img className="w-16 rounded-xl" src="https://th.bing.com/th/id/OIP.V4n4RRWhkY_FcPr3ZJ9-CgHaHa?pid=ImgDet&rs=1" alt="" />
        </div>
        <div className="space-x-4">
          <Link className="hover:text-orange-600" to="/">Home</Link>
          <Link className="hover:text-orange-600" to="/alltoy">All Toys</Link>
          {user && (
            <Link className="hover:text-orange-600" to="/mytoy">
              My Toys
            </Link>
          )}
          {user && (
            <Link className="hover:text-orange-600" to="/addtoy">
              Add Toy
            </Link>
          )}
          <Link className="hover:text-orange-500" to="/blogs">Blogs</Link>
        </div>
        <div>
          {user ? (
            <div className="flex items-center">
              {user.photoURL && (
                <img className="w-12 h-12 mx-3 rounded-full" src={user.photoURL} alt="User Profile" />
              )}
              <button className="px-2 py-2 text-zinc-900 rounded bg-white text-xl font-bold list-none" onClick={handleLogOut}>Logout</button>
            </div>
          ) : (
            <Link to="/login">
              <li className="btn text-green bg-orange-700">Login</li>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

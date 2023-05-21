import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
// import { ClockLoader } from "react-spinners";



const Privateroutes = ({ children }) => {
  const { user, loading} = useContext(AuthContext);
  // const location = useLocation();
  if(loading){
    return <progress className="progress w-56"></progress>
        
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" replace={true}  state={{ from: location }}></Navigate>;
  // return <Navigate to="/login" replace={true}  ></Navigate>;
};

export default Privateroutes;
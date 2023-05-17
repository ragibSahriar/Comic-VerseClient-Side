import { Outlet } from "react-router-dom";
import Signup from "../Pages/Signup";
import Navbar from "../Shared/Navbar";

const Main = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
};

export default Main;

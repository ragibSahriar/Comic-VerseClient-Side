import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Signup from "../Pages/Signup";
import Home from "../Home/Home";
import Login from "../Pages/Login";
import Addtoy from "../Toys/Addtoy";
import Alltoy from "../Toys/Alltoy";
import VIewDetails from "../Toys/ViewDetails/VIewDetails";
import Erros from "../Erros";
import Mytoy from "../Toys/My Toy/Mytoy";
import Blogs from "../Pages/Blogs";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: "/",
            element: <Home></Home>
          },
        {
            path: "/signup",
            element: <Signup />
          },
        {
            path: "/login",
            element: <Login />
          },
        {
            path: "/addtoy",
            element: <Addtoy />
          },
        {
            path: "/alltoy",
            element: <Alltoy />,
            loader:() => fetch('http://localhost:5000/addtoy')
          },
        {
            path: "/viewDetails/:id",
            element: <VIewDetails />,
            loader:({params}) => fetch(`http://localhost:5000/addtoy/${params.id}`)
          },
          {
            path: "*",
            element: <Erros/>,
          },
          {
            path: "/mytoy",
            element: <Mytoy/>,
          },
          {
            path: "/blogs",
            element: <Blogs/>,
          },
      ],
    },
  ]);


export default router;
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
import Update from "../Toys/My Toy/Update";
import Privateroutes from "../AuthProvider/Privateroutes";

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
            loader:() => fetch('https://comic-verse-server.vercel.app/addtoy')
          },
        {
            path: "/viewDetails/:id",
            element: <Privateroutes><VIewDetails></VIewDetails></Privateroutes>,
            loader:({params}) => fetch(`https://comic-verse-server.vercel.app/addtoy/${params.id}`)
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
          {
            path: "update/:id",
            element: <Update/>,
            loader:({params}) => fetch(`https://comic-verse-server.vercel.app/specToys/${params.id}`)
          },
          {
            path: "update/:id",
            element: <Update/>,
            loader:({params}) => fetch(`https://comic-verse-server.vercel.app/specToys/${params.id}`)
          },
          {
            
          }
      ],
    },
  ]);


export default router;
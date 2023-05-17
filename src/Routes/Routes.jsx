import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Signup from "../Pages/Signup";
import Home from "../Home/Home";


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
      ],
    },
  ]);


export default router;
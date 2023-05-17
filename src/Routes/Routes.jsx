import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Signup from "../Pages/Signup";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: "/signup",
            element: <Signup />
          },
      ],
    },
  ]);


export default router;
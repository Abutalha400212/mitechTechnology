import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import Courses from "../Components/Courses/Courses";
import Details from "../Components/Details/Details";
import FAQ from "../Components/FAQ/FAQ";
import Home from "../Components/Home/Home";
import Login from "../shared/Form/Login/Login";
import Signup from "../shared/Form/SignUp/Signup";
import Error from "./Error/Error";
import Main from "./Main/Main";
import DataLoaded from "../Components/Courses/MainSideOfCourse/dataLoaded/DataLoaded";
import MainCourse from "./MainCourse/MainCourse";
import TermsCondition from "../shared/Others/TermsCondition";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Premium from "../Components/Premium/Premium";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/",
        element: <MainCourse />,
        children: [
          {
            path: "/discover",
            loader: () => fetch(`https://mitech-server.vercel.app/details`),
            element: <Courses />,
          },
          {
            path: "/discover/:id",
            loader: ({ params }) =>
              fetch(`https://mitech-server.vercel.app/courses/${params.id}`),
            element: <DataLoaded />,
          },
          {
            path: "/details/:id", 
            element: <PrivateRoute><Details></Details></PrivateRoute>,
            loader: ({ params }) =>
              fetch(`https://mitech-server.vercel.app/details/${params.id}`),
           
          },
        ],
      },

      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path:'terms',
        element:<TermsCondition/>
      },
      {
        path:'premium/:id',
        loader: ({params}) => fetch(`https://mitech-server.vercel.app/premium/${params.id}`),
        element:<PrivateRoute><Premium/></PrivateRoute>
      }
    ],
  },
]);

export default router;

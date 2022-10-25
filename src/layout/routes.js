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
            path: "/courses",
            loader: () => fetch(`http://localhost:5000/details`),
            element: <Courses />,
          },
          {
            path: "/courses/:id",
            loader: ({ params }) =>
              fetch(`http://localhost:5000/courses/${params.id}`),
            element: <DataLoaded />,
          },
          {
            path: "/details/:id",
            loader: ({ params }) =>
              fetch(`http://localhost:5000/details/${params.id}`),
            element: <Details />,
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
    ],
  },
]);

export default router;

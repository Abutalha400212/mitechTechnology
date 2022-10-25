import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import Courses from "../Components/Courses/Courses";
import MainSideOfCourse from "../Components/Courses/MainSideOfCourse/MainSideOfCourse";
import FAQ from "../Components/FAQ/FAQ";
import Home from "../Components/Home/Home";
import Error from "./Error/Error";
import Main from "./Main/Main";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/home',
                element:<Home/>
            },
            {
                path:'/courses',
                element:<Courses/>,
                children:[
                          {
                path:'/courses/:id',
                loader:({params})=>fetch(`http://localhost:5000/courses/${params.id}`),
                element:<MainSideOfCourse/>
            }
                ]
            },
            {
                path:'/faq',
                element:<FAQ/>
            },
            {
                path:'/blog',
                element:<Blog/>
            }
          
        ]
        
    }
])

export default router
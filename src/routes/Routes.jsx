import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../home/Home";
import AddBlog from "../pages/AddBlog";
import AllBlog from "../pages/AllBlog";
import FeaturedBlogs from "../pages/FeaturedBlogs";
import WishList from "../pages/WishList";
import LogIn from "../Authentication/LogIn";
import Register from "../Authentication/Register";
import Error from "../pages/Error";
import PrivateRoute from "./PrivateRoute";
import BlogDetails from "../pages/BlogDetails";
import UpdateBlog from "../pages/UpdateBlog";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }, 
        {
            path: '*',
            element: <Error></Error>
        }, 
        {
          path: 'addBlog', 
          element: <PrivateRoute><AddBlog></AddBlog></PrivateRoute>
        },
        {
          path: 'allBlog',
          element: <AllBlog></AllBlog>
        },
        {
          path: 'featuredBlogs',
          element: <FeaturedBlogs></FeaturedBlogs>
        },
        {
          path: 'wishList',
          element: <PrivateRoute><WishList></WishList></PrivateRoute>
        },
        {
          path: 'logIn',
          element: <LogIn></LogIn>
        },
        {
          path: 'register',
          element: <Register></Register>
        },
        {
            path: 'blogDetails/:id',
            element: <PrivateRoute><BlogDetails></BlogDetails></PrivateRoute>,
           
            
          },
        {
            path: 'updateBlog/:id',
            element: <PrivateRoute><UpdateBlog></UpdateBlog></PrivateRoute>,
            
            
          },
      ]
    },
  ]);

  export default router
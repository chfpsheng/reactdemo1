import { createBrowserRouter } from "react-router-dom";
import React from "react";
const Login = React.lazy(() => import("../pages/Login.jsx")); 
const Blog = React.lazy(() => import("../pages/blog/index.jsx")); 
const User = React.lazy(() => import("../pages/user/index.jsx")); 
const Home = React.lazy(() => import("../pages/home/index.jsx")); 
const Welcome = React.lazy(() => import("../pages/Welcome.jsx")); 
const NotFound = React.lazy(() => import("../pages/NotFound.jsx")); 


const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/blog",
        element: <Blog />,
    },
    {
        path: "/user",
        element: <User />,
    },
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "/",
        element: <Welcome />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);
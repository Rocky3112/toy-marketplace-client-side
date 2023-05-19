/* eslint-disable no-unused-vars */
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main/Main';
import Login from '../Layouts/Login/Login';
import Registration from '../Layouts/Registration/Registration';
import ErrorPage from '../Layouts/ErrorPage/ErrorPage';
import ToyForm from '../Layouts/AddToy/ToyForm';
import Home from '../Layouts/Home/Home';
import AllToys from '../Layouts/AllToys/AllToys';
import Blog from '../Layouts/Blog/Blog';

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
        },
        {
            path:"login",
            element:<Login></Login>,
        },
        {
            path:"registration",
            element:<Registration></Registration>,
        },
        {
            path:"blog",
            element:<Blog></Blog>,
        },
        {
            path:"toyform",
            element:<ToyForm></ToyForm>,
        },
        {
            path:"alltoys",
            element:<AllToys></AllToys>,
        },
        {
          path: "/chefdetails/:id",
          element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
          loader: ({ params }) =>fetch(`https://chef-recipe-hunting-server-rocky3112.vercel.app/chef/${params.id}`),
        },
      ]
      
    },
  ]);
  

export default router;
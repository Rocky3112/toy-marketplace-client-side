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
import PrivateRoute from './PrivateRoute';
import ToyDetails from '../Layouts/AllToys/ToyDetails';
import MyToys from '../Layouts/MyToys/MyToys';

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
            element:<PrivateRoute><ToyForm></ToyForm></PrivateRoute>,
        },
        {
            path:"alltoys",
            element:<AllToys></AllToys>,
        },
        {
            path:"mytoy",
            element:<PrivateRoute><MyToys></MyToys></PrivateRoute>,
        },
        {
          path: "/toyDetails/:id",
          element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
          // loader: ({ params }) =>fetch(`https://toy-marketplace-server-side-three.vercel.app/allToy/${params.id}`),
        },
      ]
      
    },
  ]);
  

export default router;
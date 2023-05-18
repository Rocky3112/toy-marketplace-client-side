/* eslint-disable no-unused-vars */
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main/Main';
import Login from '../Layouts/Login/Login';
import Registration from '../Layouts/Registration/Registration';
import ErrorPage from '../Layouts/ErrorPage/ErrorPage';
import ToyForm from '../Layouts/AddToy/ToyForm';
import Home from '../Layouts/Home/Home';

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
            path:"toyform",
            element:<ToyForm></ToyForm>,
        },
      ]
      
    },
  ]);
  

export default router;
/* eslint-disable no-unused-vars */
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main/Main';
import Login from '../Layouts/Login/Login';
import Registration from '../Layouts/Registration/Registration';

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:"login",
            element:<Login></Login>,
        },
        {
            path:"registration",
            element:<Registration></Registration>,
        },
      ]
      
    },
  ]);
  

export default router;
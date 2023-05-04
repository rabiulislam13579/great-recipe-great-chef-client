
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Details from './components/Details/Details';
import Login from './components/Login/Login';
import Blogs from './components/Blogs/Blogs';
import AuthProvider from './components/providers/AuthProvider';
import Register from './components/Register/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element:<HomePage>,</HomePage>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/details/:id',
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({ params }) => fetch(`https://great-recipe-great-chef-server-rabiulislam13579.vercel.app/chef/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/resister',
        element:<Register></Register>
      },
      {
        path: '/blogs',
        element:<Blogs></Blogs> 
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)

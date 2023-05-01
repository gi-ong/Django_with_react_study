import React from 'react';
// import ReactDOM from 'react-dom';
// import {BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from 'pages';
import About from 'pages/About';
import Login from 'pages/accounts/Login';
import Profile from 'pages/accounts/Profile';
import Home from 'pages/Home';
// import 'antd/dist/antd.css';
import './index.css';
import Signup from 'pages/accounts/Signup';



// ReactDOM.render(
//   <BrowserRouter>
//     <Root/>
//   </BrowserRouter>,
//   document.getElementById("root")
// )

const router = createBrowserRouter([
  {
    path : "/",
    element: <Root/>,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path : "about",
        element: <About/>,
      },
      {
        path : "accounts",
        children: [
          {
            path : "login",
            element: <Login/>,
          },
          {
            path : "profile",
            element: <Profile/>,
          },
          {
            path : "signup",
            element: <Signup/>,
          },
        ],
      },
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
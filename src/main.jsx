import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Components/Root/Root';
import Home from './Home/Home';
import Donation from './Components/Donation/Donation';
import Statistic from './Components/Statistic/Statistic';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Description from './Components/Description/Description';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [{
      path: '/',
      element: <Home></Home>,
    },
    {
      path: '/donation',
      element: <Donation></Donation>,
      loader: () => fetch('../public/data.json')
    },
    {
      path: '/statistic',
      element: <Statistic></Statistic>
    },
    {
      path: '/card/:id',
      element: <Description></Description>,
      loader: () => fetch('../public/data.json')
    }
    
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)

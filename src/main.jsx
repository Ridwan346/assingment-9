import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Root/Root.jsx';
import Home from './Home/Home.jsx';
import Carddetail from './Home/Carddetail.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Login from './LogIn/Login.jsx';
import Register from './LogIn/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
      {
        index:true,
        Component:Home,
        loader: () => {
          return fetch('/game.json')
         .then(res => res.json());
          }
      },{
        path:'card/:id',
        Component:Carddetail,
        loader: () => {
          return fetch('/game.json')
         .then(res => res.json());
          }
      },
      {
        path:'login',
        Component:Login
      },
      {
        path:'register',
        Component: Register
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

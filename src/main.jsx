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
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

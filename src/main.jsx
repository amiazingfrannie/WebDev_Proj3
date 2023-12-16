import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import User from './User.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Login from './Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
    {
    path: '/user/:username',
    element: <User />
  },
  {
    path: '/login',
    element: <Login />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

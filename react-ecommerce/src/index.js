import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './componnents/App';
import Login from './componnents/Login';
import Register from './componnents/Register';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/Login',
    element: <Login />
  },
  {
    path: '/Register',
    element: <Register />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>    
    <RouterProvider router={routes} />


  </React.StrictMode>
);


{/* <App /> */}


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './components/sections/App/App';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';


import HomePage from './components/Pages/HomePage/HomePage';
import AddMessagePage from './components/Pages/AddMessagePage/AddMessagePage';
import About from 'components/Pages/About/About';
import EditPage from 'components/Pages/EditPage/EditPage';

const routes = createBrowserRouter ([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/add',
    element: <AddMessagePage />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/edit:id',
    element: <EditPage />
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}

    <RouterProvider router = {routes} />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


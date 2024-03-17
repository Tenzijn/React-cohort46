import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/Index.tsx';
import RouteError from './pages/RouteError.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <RouteError />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

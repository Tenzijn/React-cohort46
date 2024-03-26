import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/Index.tsx';
import Detail from './pages/Detail.tsx';
import RouteError from './pages/RouteError.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <RouteError />,
  },
  {
    path: '/product/:id',
    element: <Detail />,
    errorElement: <RouteError />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

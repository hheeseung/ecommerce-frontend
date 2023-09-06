import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import App from './App';
import './index.css';
import NotFound from './pages/NotFound';
import Products from './pages/Products';
import Enter from './pages/Enter';
import ProductDetail from './pages/ProductDetail';
import Carts from './pages/Carts';
import User from './pages/User';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: '/',
        element: <Navigate to="/enter" replace />,
      },
      {
        path: '/enter',
        element: <Enter />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/products/:products_no',
        element: <ProductDetail />,
      },
      {
        path: '/carts',
        element: <Carts />,
      },
      {
        path: '/user',
        element: <User />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

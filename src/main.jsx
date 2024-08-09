import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Home from './pages/Home';
import Part from './pages/Part';
import Test from './pages/Test';
import Result from './pages/Result';
import TestDetail from './pages/TestDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/part',
        element: <Part />,
      },
      {
        path: '/test-overview',
        element: <Test />,
      },
      {
        path: '/test',
        element: <TestDetail />,
      },
      {
        path: '/result',
        element: <Result />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

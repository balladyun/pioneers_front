import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Home from './pages/Home';
import Part from './pages/Part';
import Result from './pages/Result';
import TestOverview from './pages/TestOverview';
import Test from './pages/Test';

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
        element: <TestOverview />,
      },
      {
        path: '/test',
        element: <Test />,
      },
      {
        path: '/result/:id',
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

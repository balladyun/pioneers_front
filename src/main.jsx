import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Home from './pages/Home';
import Card from './pages/Card';
import Result from './pages/Result';
import TestOverview from './pages/TestOverview';
import Test from './pages/Test';
import About from './pages/About';
import Part from './pages/Part';
import Subscribe from './pages/Subscribe';

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
        path: '/about',
        element: <About />,
      },
      {
        path: '/part',
        element: <Part />,
      },
      {
        path: '/card',
        element: <Card />,
      },
      {
        path: '/subscribe',
        element: <Subscribe />,
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

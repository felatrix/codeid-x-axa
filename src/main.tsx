import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '@/pages/App';
import Posts from '@/pages/Posts';
import Albums from '@/pages/Albums';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/users/:postId/posts/',
    element: <Posts />,
  },
  {
    path: '/users/:postId/albums/',
    element: <Albums />,
  },
]);
// @ts-ignore
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

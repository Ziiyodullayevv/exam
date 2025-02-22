import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import Home from '../components/Home';
import Find from '../components/Find';
import Blog from '../components/Blog';
import Department from '../components/Department';
import Contact from '../components/Contact';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'find', element: <Find /> },
      { path: 'blog', element: <Blog /> },
      { path: 'department', element: <Department /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);

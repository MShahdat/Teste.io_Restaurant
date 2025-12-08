import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './pages/Home.jsx';
import NotFound from './component/NotFound.jsx';
import Menus from './pages/Menus.jsx';
import Chefs from './pages/Chefs.jsx';
import Reservation from './pages/Reservation.jsx';
import Blogs from './pages/Blogs.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Details from './pages/Details.jsx';
import Context from './context/Context.jsx';
import Profi from './pages/Profi.jsx';


const router = createBrowserRouter([
  {
    path: '*',
    element: <NotFound></NotFound>
  },
  {
    path: "/",
    element: <App></App>,

    children : [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/profile',
        element: <Profi></Profi>
      },
      {
        path: '/menu',
        element: <Menus></Menus>
      },
      {
        path: '/reservation',
        element: <Reservation></Reservation>
      },
      {
        path: '/chef',
        element: <Chefs></Chefs>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/blogs/:id',
        element: <Details></Details>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Context>
      <RouterProvider router={router} />
    </Context>
  </StrictMode>
)

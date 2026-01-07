import { createBrowserRouter, RouterProvider, Outlet, ScrollRestoration } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home';
import OldMembers from './components/OldMembers/OldMembers';
import Gallery from './components/Gallery/Gallery';
import ContactPositions from './components/ContactPositions';
import NewTeam from './components/New Team/NewTeam';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <ScrollRestoration />
        <Layout />
      </>
    ),
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/gallery',
        element: <Gallery />,
      },
      {
        path: '/contact-positions',
        element: <ContactPositions />,
      },
      {
        path: '/new-team',
        element: <NewTeam />,
      },
      {
        path: '/old-members',
        element: <OldMembers />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

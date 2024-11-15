import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import SobreNos from './Components/Pages/Main/SobreNos/SobreNos.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contatenos from './Components/Pages/Main/Contatenos/Contatenos.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/sobrenos",
    element: <SobreNos />,
  },
  {
    path: "/contatenos",
    element: <Contatenos />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

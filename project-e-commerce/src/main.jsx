import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import SobreNos from './Components/Pages/Main/SobreNos/SobreNos.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contatenos from './Components/Pages/Main/Contatenos/Contatenos.jsx'
import Login from './Components/Pages/Main/Login/Login.jsx'
import EsqueceuSenha from './Components/Pages/Main/Login/esqueceusenha.jsx'
import Cadastrese from './Components/Pages/Main/Login/cadastrese.jsx'
import NovaSenha from './Components/Pages/Main/Login/novasenha.jsx'
import Carrinho from './Components/Pages/Main/Carrinho/adicionarcarrinho.jsx'
import Identificacao from './Components/Pages/Main/Carrinho/identificacao.jsx'
import Pagamento from './Components/Pages/Main/Carrinho/pagamento.jsx'
import AltaProteina from './Components/Pages/ComprePorCategoria/altaproteina.jsx'

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
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/esqueceusenha",
    element: <EsqueceuSenha />,
  },
  {
    path: "/cadastrese",
    element: <Cadastrese />,
  },
  {
    path: "/novasenha",
    element: <NovaSenha />,
  },
  {
    path: "/carrinho",
    element: <Carrinho />,
  },
  {
    path: "/identificacao",
    element: <Identificacao />,
  },
  {
    path: "/pagamento",
    element: <Pagamento />,
  },
  {
    path: "/altaproteina",
    element: <AltaProteina />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import EscolhaCadastro from "../Pages/EscolhaCadastro/EscolhaCadastro";
import CadastroEmpresa from "../Pages/CadastroEmpresa/CadastroEmpresa";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "login", element: <Login /> },
      { path: "cadastro-empresa", element: <CadastroEmpresa /> },
      { path: "escolha-cadastro", element: <EscolhaCadastro /> },
    ],
  },
]);
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function RotaProtegida() {
  const { usuario } = useContext(AuthContext);

  // Se NÃO houver usuário logado, redireciona imediatamente para a página de login.
  // O componente <Navigate /> faz o redirecionamento de forma declarativa assim que é montado.
  if (!usuario) {
    return <Navigate to="/login" replace />;
  }

  // Se houver usuário, o <Outlet /> diz ao React Router: 
  // "Pode renderizar o componente filho que está dentro de mim!"
  return <Outlet />;
}
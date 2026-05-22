import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./pages/home";
import Login from "./pages/login";
import Favoritos from "./pages/favoritos";
import Header from "./components/header";
import RotaProtegida from "./routes/RotaProtegida"; // Importando o guardião

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          
          <main style={{ padding: "1rem" }}>
            <Routes>
              {/* Rotas Públicas: qualquer um pode acessar */}
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />

              {/* Bloco de Rotas Privadas/Protegidas */}
              <Route element={<RotaProtegida />}>
                {/* Todas as rotas declaradas aqui dentro só abrem se passar no Outlet */}
                <Route path="/favoritos" element={<Favoritos />} />
              </Route>
            </Routes>
          </main>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}
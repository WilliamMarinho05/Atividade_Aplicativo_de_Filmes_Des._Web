import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./pages/home";
import Login from "./pages/login";
import Favoritos from "./pages/favoritos";
import DetalhesFilme from "./pages/DetalhesFilme"; // 1. Importe a nova página
import Header from "./components/header";
import RotaProtegida from "./routes/RotaProtegida";

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          
          <main style={{ padding: "1rem" }}>
            <Routes>
              {/* Rotas Públicas */}
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              {/* 2. Nova Rota Dinâmica configurada aqui */}
              <Route path="/filme/:id" element={<DetalhesFilme />} />

              {/* Bloco de Rotas Privadas */}
              <Route element={<RotaProtegida />}>
                <Route path="/favoritos" element={<Favoritos />} />
              </Route>
            </Routes>
          </main>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthProvider } from "./contexts/AuthContext";
import { FavoritosProvider } from "./contexts/FavoritosContext"; // Importando o novo provedor
import Home from "./pages/home";
import Login from "./pages/login";
import Favoritos from "./pages/favoritos";
import DetalhesFilme from "./pages/DetalhesFilme";
import Header from "./components/header";
import RotaProtegida from "./routes/RotaProtegida";

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <FavoritosProvider> {/* Envolvendo o app com o contexto de favoritos */}
          <BrowserRouter>
            <Header />
            
            <main style={{ padding: "1rem" }}>
              <Routes>
                {/* Rotas Públicas */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/filme/:id" element={<DetalhesFilme />} />

                {/* Bloco de Rotas Privadas */}
                <Route element={<RotaProtegida />}>
                  <Route path="/favoritos" element={<Favoritos />} />
                </Route>
              </Routes>
            </main>
          </BrowserRouter>
        </FavoritosProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
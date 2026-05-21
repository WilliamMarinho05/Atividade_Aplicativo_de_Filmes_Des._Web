import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext"; // Importando o Provedor
import Home from "./pages/home";
import Login from "./pages/login";
import Favoritos from "./pages/favoritos";
import Header from "./components/header";

export default function App() {
  return (
    // O ThemeProvider envelopa tudo, injetando o contexto global na aplicação
    <ThemeProvider>
      <BrowserRouter>
        <Header />
        
        <main style={{ padding: "1rem" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </main>
      </BrowserRouter>
    </ThemeProvider>
  );
}
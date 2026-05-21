import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Favoritos from "./pages/favoritos";
import Header from "./components/header";

export default function App() {
  return (
    <BrowserRouter>
      {/* O Header fica fora de <Routes> para aparecer em todas as páginas */}
      <Header />
      
      <main style={{ padding: "1rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}


import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext"; // Importamos o contexto criado

export default function Header() {
  // Consumindo os dados globais direto do Provider sem intermédio de props
  const { tema, alternarTema } = useContext(ThemeContext);

  return (
    <header style={{ 
      padding: "1rem", 
      borderBottom: "1px solid #ccc", 
      display: "flex", 
      justifyContent: "space-between", // Separa o título/menu do botão de tema
      alignItems: "center"
    }}>
      <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
        <h1>🎬 MeuCineClube</h1>
        <nav style={{ display: "flex", gap: "10px" }}>
          <Link to="/" style={{ color: "inherit" }}>Home</Link>
          <Link to="/login" style={{ color: "inherit" }}>Login</Link>
          <Link to="/favoritos" style={{ color: "inherit" }}>Favoritos</Link>
        </nav>
      </div>

      {/* Botão que consome o contexto */}
      <button 
        onClick={alternarTema} 
        style={{ 
          padding: "8px 16px", 
          cursor: "pointer",
          backgroundColor: tema === "claro" ? "#333" : "#eee",
          color: tema === "claro" ? "#fff" : "#000",
          border: "none",
          borderRadius: "4px"
        }}
      >
        Modo {tema === "claro" ? "Escuro 🌙" : "Claro ☀️"}
      </button>
    </header>
  );
}
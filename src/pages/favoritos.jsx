import { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritosContext } from "../contexts/FavoritosContext";
import { ThemeContext } from "../contexts/ThemeContext"; // Importando o tema

export default function Favoritos() {
  const { favoritos, removerFavorito } = useContext(FavoritosContext);
  const { tema } = useContext(ThemeContext); // Consumindo o tema

  if (favoritos.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "4rem" }}>
        <h2>⭐ Seus Filmes Favoritos</h2>
        {/* TEXTO ADAPTÁVEL CASO VAZIO */}
        <p style={{ color: tema === "claro" ? "#666" : "#aaa", margin: "15px 0" }}>Você ainda não adicionou nenhum filme aos favoritos.</p>
        <Link to="/" style={{ color: "#0275d8", fontWeight: "bold" }}>Ir para o Catálogo buscar filmes</Link>
      </div>
    );
  }

  return (
    <div>
      <h2 style={{ marginBottom: "1.5rem" }}>⭐ Seus Filmes Favoritos ({favoritos.length})</h2>
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "20px" }}>
        {favoritos.map((filme) => (
          <div 
            key={filme.imdbID} 
            style={{
              border: tema === "claro" ? "1px solid #ccc" : "1px solid #444", // Adaptável
              backgroundColor: tema === "claro" ? "#fff" : "#1e1e1e", // Adaptável
              borderRadius: "8px",
              padding: "10px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            <img src={filme.Poster} alt={filme.Title} style={{ width: "100%", height: "280px", objectFit: "cover", borderRadius: "6px" }} />
            <h3 style={{ fontSize: "1rem", margin: "10px 0 5px 0" }}>{filme.Title}</h3>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "5px", marginTop: "auto" }}>
              <Link to={`/filme/${filme.imdbID}`} style={{ padding: "6px", background: "#0275d8", color: "white", borderRadius: "4px", fontSize: "0.85rem" }}>
                Ver Ficha 👀
              </Link>
              <button onClick={() => removerFavorito(filme.imdbID)} style={{ padding: "6px", background: "#d9534f", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", fontSize: "0.85rem" }}>
                Remover 🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
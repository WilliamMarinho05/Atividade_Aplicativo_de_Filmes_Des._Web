import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react"; 
import { FavoritosContext } from "../contexts/FavoritosContext";
import { ThemeContext } from "../contexts/ThemeContext";

// Dados mockados estendidos com detalhes extras para a ficha técnica
const DETALHES_MOCK = {
  "tt0111161": {
    Title: "Um Sonho de Liberdade",
    Year: "1994",
    Director: "Frank Darabont",
    Actors: "Tim Robbins, Morgan Freeman, Bob Gunton",
    Plot: "Dois homens presos se unem ao longo de vários anos, encontrando consolo e eventual redenção através de atos de decência comum.",
    Poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&auto=format&fit=crop&q=60"
  },
  "tt0468569": {
    Title: "Batman: O Cavaleiro das Trevas",
    Year: "2008",
    Director: "Christopher Nolan",
    Actors: "Christian Bale, Heath Ledger, Aaron Eckhart",
    Plot: "Quando a ameaça conhecida como O Coringa surge de seu passado, ele causa estragos e caos nas pessoas de Gotham.",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg"
  },
};

export default function DetalhesFilme() {
  const { id } = useParams();
  const [filme, setFilme] = useState(null);
  const [carregando, setCarregando] = useState(true);
  
  const { adicionarFavorito } = useContext(FavoritosContext);
  const { tema } = useContext(ThemeContext);

  // O bloco essencial que tinha sumido do seu arquivo:
  useEffect(() => {
    setCarregando(true);
    const timer = setTimeout(() => {
      const filmeEncontrado = DETALHES_MOCK[id];
      if (filmeEncontrado) {
        setFilme({ ...filmeEncontrado, imdbID: id });
      } else {
        setFilme(null);
      }
      setCarregando(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [id]);

  if (carregando) {
    return <h3 style={{ padding: "2rem" }}>🔍 Buscando ficha técnica...</h3>;
  }

  if (!filme) {
    return (
      <div style={{ textAlign: "center", marginTop: "3rem", padding: "2rem", border: "1px dashed red", borderRadius: "8px" }}>
        <h3 style={{ color: "#d9534f", marginBottom: "10px" }}>❌ Ops! Filme não encontrado.</h3>
        <p style={{ marginBottom: "20px" }}>O código identificador deste filme não consta em nosso catálogo local.</p>
        <Link to="/" style={{ padding: "10px 20px", background: "#0275d8", color: "white", borderRadius: "4px" }}>Voltar para a Vitrine</Link>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", gap: "30px", marginTop: "2rem", flexWrap: "wrap" }}>
      <img src={filme.Poster} alt={filme.Title} style={{ width: "300px", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.3)" }} />
      
      <div style={{ flex: 1, minWidth: "300px" }}>
        <h2 style={{ color: tema === "claro" ? "#000" : "#fff" }}>
          {filme.Title} <span style={{ fontWeight: "normal", color: tema === "claro" ? "#666" : "#aaa" }}>({filme.Year})</span>
        </h2>
        <p style={{ margin: "15px 0", fontSize: "1.1rem", lineHeight: "1.6" }}><strong>Sinopse:</strong> {filme.Plot}</p>
        <p style={{ margin: "5px 0" }}><strong>Diretor:</strong> {filme.Director}</p>
        <p style={{ margin: "5px 0" }}><strong>Elenco:</strong> {filme.Actors}</p>
        
        <button 
          style={{ marginTop: "20px", padding: "12px 24px", background: "#ffc107", color: "#000", border: "none", borderRadius: "4px", fontWeight: "bold", cursor: "pointer" }}
          onClick={() => adicionarFavorito(filme)}
        >
          ⭐ Adicionar aos Favoritos
        </button>

        <Link to="/" style={{ display: "inline-block", marginTop: "20px", color: "#0275d8" }}>
          ← Voltar para a Vitrine
        </Link>
      </div>
    </div>
  );
}
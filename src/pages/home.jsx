import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";

// Array de dados mockados com URLs estáveis
const FILMES_MOCK = [
  {
    imdbID: "tt0111161",
    Title: "Um Sonho de Liberdade",
    Year: "1994",
    Poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&auto=format&fit=crop&q=60"
  },
  {
    imdbID: "tt0468569",
    Title: "Batman: O Cavaleiro das Trevas",
    Year: "2008",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg"
  },
];

export default function Home() {
  const [filmes, setFilmes] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const { tema } = useContext(ThemeContext);

  // O bloco essencial que estava faltando no seu arquivo:
  useEffect(() => {
    const buscarFilmes = setTimeout(() => {
      setFilmes(FILMES_MOCK); // Aqui nós jogamos os filmes no estado!
      setCarregando(false);
    }, 1000);

    return () => clearTimeout(buscarFilmes);
  }, []);

  // Renderização condicional para dar um feedback bacana enquanto carrega
  if (carregando) {
    return <h3 style={{ padding: "2rem" }}>🎬 Carregando catálogo de filmes...</h3>;
  }

  return (
    <div>
      <h2 style={{ marginBottom: "1.5rem" }}>🍿 Catálogo de Filmes</h2>
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "20px" }}>
        {filmes.map((filme) => (
          <div 
            key={filme.imdbID} 
            style={{
              border: tema === "claro" ? "1px solid #ccc" : "1px solid #444",
              backgroundColor: tema === "claro" ? "#fff" : "#1e1e1e",
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
            
            <p style={{ fontSize: "0.85rem", color: tema === "claro" ? "#666" : "#aaa", margin: "0 0 10px 0" }}>({filme.Year})</p>
            
            <Link to={`/filme/${filme.imdbID}`} style={{ marginTop: "auto", display: "block", padding: "8px", background: "#0275d8", color: "white", borderRadius: "4px", fontWeight: "bold", fontSize: "0.9rem" }}>
              Ver Detalhes 👀
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Array de dados mockados simulando a resposta de uma API de filmes (como a OMDb)
// Array de dados mockados com URLs de imagens 100% atualizadas e estáveis
const FILMES_MOCK = [
  {
    imdbID: "tt0111161",
    Title: "Um Sonho de Liberdade",
    Year: "1994",
    Poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&auto=format&fit=crop&q=60" // Imagem genérica de cinema de alta qualidade
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

  useEffect(() => {
    // Simulando uma requisição de API com um atraso de 1 segundo (Simula o Fetch)
    const buscarFilmes = setTimeout(() => {
      setFilmes(FILMES_MOCK);
      setCarregando(false);
    }, 1000);

    // Função de limpeza (cleanup) do useEffect
    return () => clearTimeout(buscarFilmes);
  }, []);

  // Renderização Condicional: exibe mensagem enquanto os dados não chegam
  if (carregando) {
    return <h3>🎬 Carregando catálogo de filmes...</h3>;
  }

  return (
    <div>
      <h2 style={{ marginBottom: "1.5rem" }}>🍿 Catálogo de Filmes</h2>
      
      {/* Grid de Cards dos Filmes */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "20px"
      }}>
        {filmes.map((filme) => (
          <div 
            key={filme.imdbID} 
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "between"
            }}
          >
            <img 
              src={filme.Poster} 
              alt={filme.Title} 
              style={{ width: "100%", height: "280px", objectFit: "cover", borderRadius: "6px" }}
            />
            <h3 style={{ fontSize: "1rem", margin: "10px 0 5px 0" }}>{filme.Title}</h3>
            <p style={{ fontSize: "0.85rem", color: "#666", margin: "0 0 10px 0" }}>({filme.Year})</p>
            
            {/* Link dinâmico passando o ID do filme como parâmetro na URL */}
            <Link 
              to={`/filme/${filme.imdbID}`}
              style={{
                marginTop: "auto",
                display: "block",
                padding: "8px",
                background: "#0275d8",
                color: "white",
                textDecoration: "none",
                borderRadius: "4px",
                fontWeight: "bold",
                fontSize: "0.9rem"
              }}
            >
              Ver Detalhes 👀
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
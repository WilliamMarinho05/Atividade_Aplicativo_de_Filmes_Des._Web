import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

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
  // 1. Captura o parâmetro ':id' definido na rota do App.jsx
  const { id } = useParams();
  
  const [filme, setFilme] = useState(null);
  const [carregando, setCarregando] = useState(true);

  // 2. O useEffect monitora o 'id'. Se o id mudar, ele busca o filme correspondente
  useEffect(() => {
    setCarregando(true);
    
    // Simulando busca na API
    const timer = setTimeout(() => {
      const filmeEncontrado = DETALHES_MOCK[id];
      setFilme(filmeEncontrado);
      setCarregando(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [id]); // Dependência: roda de novo se o ID na URL mudar

  if (carregando) {
    return <h3>🔍 Buscando ficha técnica...</h3>;
  }

  if (!filme) {
    return (
      <div>
        <h3>❌ Filme não encontrado!</h3>
        <Link to="/">Voltar para a Home</Link>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", gap: "30px", marginTop: "2rem", flexWrap: "wrap" }}>
      <img 
        src={filme.Poster} 
        alt={filme.Title} 
        style={{ width: "300px", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }}
      />
      
      <div style={{ flex: 1, minWidth: "300px" }}>
        <h2>{filme.Title} <span style={{ fontWeight: "normal", color: "#666" }}>({filme.Year})</span></h2>
        <p style={{ margin: "15px 0", fontSize: "1.1rem", lineHeight: "1.6" }}><strong>Sinopse:</strong> {filme.Plot}</p>
        <p style={{ margin: "5px 0" }}><strong>Diretor:</strong> {filme.Director}</p>
        <p style={{ margin: "5px 0" }}><strong>Elenco:</strong> {filme.Actors}</p>
        
        {/* Botão pedido no requisito (sem funcionalidade por enquanto) */}
        <button 
          style={{
            marginTop: "20px",
            padding: "12px 24px",
            background: "#ffc107",
            color: "#000",
            border: "none",
            borderRadius: "4px",
            fontWeight: "bold",
            cursor: "pointer",
            display: "block"
          }}
          onClick={() => alert("Em breve: Funcionalidade de favoritar no Passo 8! 😉")}
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
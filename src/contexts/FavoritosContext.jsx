import { createContext, useState, useEffect } from "react";

// Criamos o contexto dos favoritos
export const FavoritosContext = createContext();

export function FavoritosProvider({ children }) {
  // Inicializa o estado lendo do localStorage para não perder os dados no F5
  const [favoritos, setFavoritos] = useState(() => {
    const salvos = localStorage.getItem("meucineclube:favoritos");
    return salvos ? JSON.parse(salvos) : [];
  });

  // Função para adicionar um filme se ele já não estiver na lista
  function adicionarFavorito(filme) {
    setFavoritos((listaAtual) => {
      const jaExiste = listaAtual.some((f) => f.imdbID === filme.imdbID);
      if (jaExiste) {
        alert("Este filme já está nos seus favoritos! 😉");
        return listaAtual; // Retorna a lista sem alterações
      }
      alert("Filme adicionado aos favoritos! ⭐");
      return [...listaAtual, filme];
    });
  }

  // Função para remover um filme da lista usando o ID
  function removerFavorito(id) {
    setFavoritos((listaAtual) => listaAtual.filter((filme) => filme.imdbID !== id));
    alert("Filme removido dos favoritos! 🗑️");
  }

  // Efeito colateral: Toda vez que a lista mudar, salva no localStorage
  useEffect(() => {
    localStorage.setItem("meucineclube:favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  return (
    <FavoritosContext.Provider value={{ favoritos, adicionarFavorito, removerFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
}
import { createContext, useState, useEffect } from "react";

// 1. Criamos o espaço de memória compartilhado (o Contexto)
export const ThemeContext = createContext();

// 2. Criamos o Provedor que gerenciará o estado e os comportamentos do tema
export function ThemeProvider({ children }) {
  // Estado para armazenar o tema atual ("claro" ou "escuro")
  const [tema, setTema] = useState("claro");

  // Função para alternar entre os estados de tema
  function alternarTema() {
    setTema((temaAtual) => (temaAtual === "claro" ? "escuro" : "claro"));
  }

  // Efeito colateral: Sempre que o tema mudar, aplicamos as classes CSS diretamente no <body>
  useEffect(() => {
    document.body.className = tema;
    
    // Pequena estilização dinâmica no body para vermos o efeito visual acontecer
    if (tema === "escuro") {
      document.body.style.backgroundColor = "#121212";
      document.body.style.color = "#ffffff";
    } else {
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#000000";
    }
  }, [tema]); // O efeito roda sempre que a variável 'tema' mudar

  return (
    // Disponibilizamos o estado 'tema' e a função 'alternarTema' para quem estiver abaixo na árvore
    <ThemeContext.Provider value={{ tema, alternarTema }}>
      {children}
    </ThemeContext.Provider>
  );
}
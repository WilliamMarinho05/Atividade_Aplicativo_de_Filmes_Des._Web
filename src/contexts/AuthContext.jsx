import { createContext, useState, useEffect } from "react";

// Criamos o contexto de autenticação
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  // Inicializamos o estado tentando ler o que está salvo no localStorage. 
  // Se houver um usuário lá, o app já inicia logado. Se não, inicia como null (deslogado).
  const [usuario, setUsuario] = useState(() => {
    const usuarioSalvo = localStorage.getItem("meucineclube:usuario");
    return usuarioSalvo ? JSON.parse(usuarioSalvo) : null;
  });

  // Função para simular o login do usuário 
  function login(nome) {
    const dadosUsuario = { nome: nome };
    setUsuario(dadosUsuario);
  }

  // Função para limpar o estado e fazer o logout 
  function logout() {
    setUsuario(null);
  }

  // Efeito colateral: Sempre que o estado 'usuario' mudar, atualizamos o localStorage 
  useEffect(() => {
    if (usuario) {
      localStorage.setItem("meucineclube:usuario", JSON.stringify(usuario));
    } else {
      localStorage.removeItem("meucineclube:usuario");
    }
  }, [usuario]);

  return (
    // Disponibilizamos o usuário e as ações de login/logout globalmente 
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
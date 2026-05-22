import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext"; // Importando nosso contexto de autenticação 

export default function Login() {
  const [nomeInput, setNomeInput] = useState("");
  const { usuario, login, logout } = useContext(AuthContext); // Consumindo o estado global 
  const navigate = useNavigate(); // Hook para navegação via código [cite: 107, 116]

  function lidarComEnvio(e) {
    e.preventDefault(); // Impede a página HTML de recarregar com o envio do form
    
    if (nomeInput.trim() === "") {
      alert("Por favor, digite um nome válido!");
      return;
    }

    login(nomeInput); // Dispara a função global salvando o nome do usuário 
    navigate("/"); // Redireciona o usuário para a página inicial (Home) [cite: 117, 160]
  }

  // Se o usuário já estiver logado, exibimos uma mensagem e o botão de sair 
  if (usuario) {
    return (
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h2>Olá, {usuario.nome}! 👋</h2>
        <p>Você já está conectado ao clube.</p>
        <button 
          onClick={logout}
          style={{ padding: "8px 16px", background: "#d9534f", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
        >
          Sair da Conta (Logout)
        </button>
      </div>
    );
  }

  // Se não estiver logado, exibe o formulário de login 
  return (
    <div style={{ maxWidth: "400px", margin: "2rem auto", textAlign: "center" }}>
      <h2>🔑 Entrar no MeuCineClube</h2>
      <form onSubmit={lidarComEnvio} style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "1rem" }}>
        <input 
          type="text" 
          placeholder="Digite seu nome ou apelido"
          value={nomeInput}
          onChange={(e) => setNomeInput(e.target.value)}
          style={{ padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
        />
        <button 
          type="submit"
          style={{ padding: "10px", background: "#0275d8", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", fontWeight: "bold" }}
        >
          Entrar no Clube 🚀
        </button>
      </form>
    </div>
  );
}
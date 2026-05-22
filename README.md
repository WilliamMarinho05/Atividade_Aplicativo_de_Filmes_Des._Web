# 🍿 MeuCineClube

Uma aplicação web em React desenvolvida como atividade prática para a disciplina de Desenvolvimento Front-End Avançado. O projeto simula uma plataforma de cinema onde os usuários podem explorar um catálogo de filmes, visualizar fichas técnicas detalhadas e gerenciar uma lista de favoritos, contando com um sistema de autenticação simulado e alternância de temas (Claro/Escuro).

---

## 🚀 Funcionalidades

- **Catálogo de Filmes:** Exibição dinâmica de filmes em formato de cards responsivos na página inicial.
- **Ficha Técnica Detalhada:** Rota dinâmica para exibir sinopse, diretor, elenco e pôster de um filme específico através de parâmetros na URL.
- **Sistema de Autenticação (Simulado):** Login e logout de usuários com persistência de dados.
- **Rotas Protegidas:** Bloqueio de segurança na página de Favoritos. Apenas usuários logados conseguem acessar a área, caso contrário, são redirecionados de volta para a tela de login.
- **Gerenciamento de Favoritos:** Adicionar e remover filmes de uma lista global exclusiva do usuário autenticado.
- **Persistência Local (LocalStorage):** Tanto o estado do usuário logado quanto a lista de filmes favoritos permanecem salvos mesmo se a página do navegador for atualizada (F5).
- **Alternância de Tema:** Modo Claro e Modo Escuro integrados globalmente em toda a interface do usuário.

---

## 🧠 Conceitos de React Aplicados

O projeto foi construído colocando em prática os seguintes conceitos avançados do ecossistema React:
* **Context API (`createContext`, `useContext`):** Utilizada de forma modular para gerenciar múltiplos contextos globais separados por domínios (`ThemeContext`, `AuthContext` e `FavoritosContext`).
- **React Router (v6):** Configuração de navegação SPA, rotas dinâmicas com parâmetros (`/filme/:id`), navegação programática (`useNavigate`) e rotas aninhadas (`<Outlet />` e `<Navigate />`) para proteção de acesso.
- **Hooks Fundamentais:** `useState` para controle de estados locais e `useEffect` para gerenciamento de efeitos colaterais e simulação de requisições assíncronas.
- **Tratamento de Erros e Renderização Condicional:** Feedback visual de carregamento ("Loading") e tratamento gracioso para rotas inválidas ou filmes não encontrados.

---

## 🛠️ Tecnologias Utilizadas

- **React** (Biblioteca Javascript para interfaces)
- **Vite** (Ferramenta de build rápida para o ambiente de desenvolvimento)
- **React Router Dom** (Gerenciamento de rotas e navegação)
- **CSS3 / Inline Styles** (Estilização flexível adaptada aos contextos de tema)

---

## 🔧 Instalação e Execução

Para rodar o projeto localmente em sua máquina, siga os passos abaixo:

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/SEU_ESTUDANTE_GITHUB/meu-cine-clube.git](https://github.com/SEU_ESTUDANTE_GITHUB/meu-cine-clube.git)

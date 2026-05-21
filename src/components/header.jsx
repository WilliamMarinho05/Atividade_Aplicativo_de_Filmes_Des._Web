import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={{ padding: "1rem", borderBottom: "1px solid #ccc", display: "flex", gap: "15px" }}>
      <h1>🎬 MeuCineClube</h1>
      <nav style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/favoritos">Favoritos</Link>
      </nav>
    </header>
  );
}
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";
import Api from "./pages/Api.jsx";

function App() {
  return (
    <Router>
      <nav style={{ background: "#222", padding: "10px" }}>
        <Link to="/" style={{ color: "#fff", marginRight: "15px" }}>Inicio</Link>
        <Link to="/servicios" style={{ color: "#fff", marginRight: "15px" }}>Servicios</Link>
        <Link to="/contacto" style={{ color: "#fff", marginRight: "15px" }}>Contacto</Link>
        <Link to="/api" style={{ color: "#fff" }}>API</Link>
        <li><Link to="/api">API</Link></li>

      </nav>

      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/api" element={<Api />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

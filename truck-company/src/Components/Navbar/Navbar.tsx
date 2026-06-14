import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import T from "./T (1).png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  function criarConta() {
    navigate("/escolha-cadastro");
   
  }
  // rotas onde o navbar deve ter fundo sólido
  const paginasComFundoSolido = ["/escolha-cadastro", "/cadastro-empresa", "/cadastro-caminhoneiro"];
  const isSolido = paginasComFundoSolido.includes(location.pathname);

  return (
    <header className={`navbar ${isSolido ? "navbar-solid" : "navbar-transparent"}`}>
      <div className="navbar-logo">
        <div className="logo-icon">
          <img src={T} alt="Logo" />
        </div>
        <h2>
          TRUCK <span>COMPANY</span>
        </h2>
      </div>

      <nav className="navbar-links">
        <Link to="/">INÍCIO</Link>
        <Link to="/servicos">SERVIÇOS</Link>
        <Link to="/frota">FROTA</Link>
        <Link to="/rastreamento">RASTREAMENTO</Link>
        <Link to="/contato">CONTATO</Link>
      </nav>

      <div className="navbar-actions">
        <button className="quote-btn" onClick={criarConta}>
          CRIAR CONTA
        </button>
      </div>
    </header>
  );
};

export default Navbar;
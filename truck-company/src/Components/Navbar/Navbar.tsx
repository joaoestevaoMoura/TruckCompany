import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">

      <div className="navbar-logo">

        <div className="logo-icon">
          T
        </div>

        <h2>
          TRUCK <span>COMPANY</span>
        </h2>

      </div>


      <nav className="navbar-links">

        <Link to="/">
          INÍCIO
        </Link>

        <Link to="/servicos">
          SERVIÇOS
        </Link>

        <Link to="/frota">
          FROTA
        </Link>

        <Link to="/rastreamento">
          RASTREAMENTO
        </Link>

        <Link to="/contato">
          CONTATO
        </Link>

      </nav>



      <div className="navbar-actions">

        <button className="quote-btn">
          CRIAR CONTA
        </button>

      </div>


    </header>
  );
};


export default Navbar;
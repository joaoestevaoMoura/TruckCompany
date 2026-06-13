import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  
const navigate = useNavigate();



function criarConta(){

    navigate("/escolha-cadastro");

}
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
        <button 
           className="quote-btn"
            onClick={criarConta}
          >

          CRIAR CONTA
        </button>

      </div>


    </header>
  );
};


export default Navbar;
import "./EscolhaCadastro.css";
import { Link } from "react-router-dom";
import { FaTruck, FaBuilding } from "react-icons/fa"; // ícones

const EscolhaCadastro = () => {
  return (
    <div className="escolha-cadastro">
      <h1>Vamos lá, o que deseja fazer?</h1>

      <div className="options">
        {/* Caminhoneiro */}
        <Link to="/cadastro-caminhoneiro" className="option-card caminhoneiro">
          <FaTruck className="icon" />
          <h2>Sou Caminhoneiro</h2>
          <p>
            Aqui você encontra e negocia as melhores opções de fretes em todo o Brasil.
          </p>
        </Link>

        {/* Empresa */}
        <Link to="/cadastro-empresa" className="option-card empresa">
          <FaBuilding className="icon" />
          <h2>Sou Empresa</h2>
          <p>
            Aqui você anuncia seus fretes para encontrar motoristas de forma rápida e segura.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default EscolhaCadastro;

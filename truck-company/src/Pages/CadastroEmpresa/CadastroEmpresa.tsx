import "./CadastroEmpresa.css";

const CadastroEmpresa = () => {
  return (
    <div className="cadastro-empresa">
      <h1>Criar Conta</h1>
      <form>
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Criar Conta</button>
      </form>
    </div>
  );
};

export default CadastroEmpresa;

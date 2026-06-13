import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* COLUNA LOGO */}
        <div className="footer-brand">
          <h2>
            <span className="logo-t">T</span>RUCK COMPANY
          </h2>
          <p className="slogan">
            Inteligência em movimento. Transporte de cargas com tecnologia,
            segurança e rastreamento ponta a ponta.
          </p>
        </div>

        {/* COLUNA NAVEGAÇÃO */}
        <div className="footer-column">
          <h3>NAVEGAÇÃO</h3>
          <a href="#">Serviços</a>
          <a href="#">Frota</a>
          <a href="#">Rastreamento</a>
          <a href="#">Orçamento</a>
        </div>

        {/* COLUNA EMPRESA */}
        <div className="footer-column">
          <h3>EMPRESA</h3>
          <a href="#">Contato</a>
          <a href="#">Área do cliente</a>
        </div>

        {/* COLUNA CONTATO */}
        <div className="footer-column">
          <h3>CONTATO</h3>
          <p>(11) 99999-9999</p>
          <p>contato@truckcompany.com.br</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Truck Company. Todos os direitos reservados.</p>
        <p>CNPJ 00.000.000/0001-00</p>
      </div>
    </footer>
  );
};

export default Footer;

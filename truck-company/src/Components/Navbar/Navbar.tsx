import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <span className="navbar__logo">TruckCompany</span>

      <div className="navbar__menu">
        <a href="/" className="navbar__link">Home</a>
        <a href="/search" className="navbar__link">Search</a>
        <a href="/about" className="navbar__link">About</a>
      </div>

      <div className="navbar__actions">
        <a href="/login" className="navbar__login">Log in</a>
        <a href="/register" className="navbar__signup">Get started</a>
      </div>
    </nav>
  );
};

export default Navbar;
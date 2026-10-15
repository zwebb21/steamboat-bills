import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <nav className="navbar-inner">

        <a href="/" className="navbar-logo">
          Steamboat Bill's :Lake Charles Billy
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          ☰
        </button>

        <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/catering">Catering</Link>
          <Link to="/story">Our Story</Link>
          <Link to="/contact">Contact</Link>

          <a
            href="https://order.online/business/11291629/store/712727?utm_source=chatgpt.com&pickup=true&redirected=true"
            className="order-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Order Online
          </a>
        </div>

      </nav>
    </header>
  );
}

export default Navbar;

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-inner">

        <div>
          <h2>Steamboat Bill's</h2>

          <p>
            Real Authentic Seafood
          </p>
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/catering">Catering</Link>
          <Link to="/story">Our Story</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div>
          <p>1004 North Lakeshore Dr.</p>
          <p>Lake Charles, LA</p>
          <p>337-494-1070</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Steamboat Bill's.
          All rights reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;
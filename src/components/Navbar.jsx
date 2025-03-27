import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // Get the current route

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (path) => location.pathname === path ? "active" : "";

  return (
    <>
      {/* Navbar */}
      <nav className={`navbar ${isScrolled ? "sticky" : ""} ${isOpen ? "open" : ""}`}>
        <div className="container">
          <Link to="/">
            <img src="./p-cercle.png" alt="Logo" className="logo" />
          </Link>
          <button className={`menu-toggle ${isOpen ? "close" : ""}`} onClick={() => setIsOpen(!isOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
          <ul className={`nav-links ${isOpen ? "show" : ""}`}>
          <video className="nav-bg-video" autoPlay loop muted>
            <source src="https://www.agence-kar-ma.fr/wp-content/uploads/2022/06/Logo-animee-site-karma1.mp4" type="video/mp4" />
          </video>
            <li className={isActive("/Qui%20somme%20nous")}>
              <Link to="/Qui%20somme%20nous">Qui sommes nous?</Link>
            </li>
            <li className={isActive("/Apropos")}>
              <Link to="/Apropos">Offres et prestations</Link>
            </li>
            <li className={isActive("/Services")}>
              <Link to="/Services">Audace Magazine</Link>
            </li>
            <li className={isActive("/Actualite")}>
              <Link to="/Actualite">Newsletters OPS</Link>
            </li>
            <li className={isActive("/Actualite")}>
              <Link to="/Actualite">Le blog Kar’marketing</Link>
            </li>
            <li className={isActive("/Actualite")}>
              <Link to="/Actualite">Boutique responsable</Link>
            </li>
            <li className={isActive("/Contact")}>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

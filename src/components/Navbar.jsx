import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";
import { logokarma, logoKarma } from "../assets";

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
            <img src={logokarma} alt="Logo" className="logo" />
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
            <li className={isActive("/qui-sommes-nous-2")}>
              <Link to="/qui-sommes-nous-2">Qui sommes nous?</Link>
            </li>
            <li className={isActive("/offres-et-prestations")}>
              <Link to="/offres-et-prestations">Offres et prestations</Link>
            </li>
            <li className={isActive("/audace-magazine")}>
              <Link to="/audace-magazine">Audace Magazine</Link>
            </li>
            <li className={isActive("/newsletters-veille-ops")}>
              <Link to="/newsletters-veille-ops">Newsletters OPS</Link>
            </li>
            <li className={isActive("/le-blog-karmarketing")}>
              <Link to="/le-blog-karmarketing">Le blog Kar’marketing</Link>
            </li>
            <li className={isActive("/boutique-responsable")}>
              <Link to="/boutique-responsable">Boutique responsable</Link>
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

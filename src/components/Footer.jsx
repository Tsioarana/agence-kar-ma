import React from "react";
import { Link } from "react-router-dom";
import { logoKarma } from "../assets";
import "./Footer.css";

const Footer = () => {
  return (
   
  <footer id="newsletter">
  <div className="container">
    <div className="row">
      {/* <div className="col-lg-8 offset-lg-2">
        <div className="section-heading">
          <h4>Join our mailing list to receive the news &amp; latest trends</h4>
        </div>
      </div> */}
      <div className="col-lg-6 offset-lg-3">
        <form id="search" action="#" method="GET">
          <div className="row">
            <div className="col-lg-6 col-sm-6">
              <fieldset>
                <input type="address" name="address" className="email" placeholder="Email Address..." autoComplete="on" required />
              </fieldset>
            </div>
            <div className="col-lg-6 col-sm-6">
              <fieldset>
                <button type="submit" className="main-button">Subscribe Now <i className="fa fa-angle-right"></i></button>
              </fieldset>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4">
      <div className="footers-widget">
        <h4>Suivez-nous</h4>
        <ul className="social-icons">
          <li><Link to="https://www.linkedin.com/company/agence-kar-ma/" className="social-link linkedin"><i className="fab fa-linkedin"></i></Link></li>
          <li><Link to="https://www.instagram.com/agence_kar_ma/" className="social-link instagram"><i className="fab fa-instagram"></i></Link></li>
          <li><Link to="https://www.facebook.com/karmaagence" className="social-link facebook"><i className="fab fa-facebook"></i></Link></li>
          <li><Link to="https://twitter.com/agence_kar_ma" className="social-link twitter"><i className="fab fa-twitter"></i></Link></li>
        </ul>
      </div>
      </div>
      <div className="col-lg-4">
        <div className="footer-widget">
        <ul className="footer-links">
          <li>→ <Link to="/newsletters-veille-ops">Newsletters veille OPS</Link></li>
          <li>→ <Link to="/production-ops">Brand Content – Production OPS</Link></li>
          <li>→ <Link to="/site-web-performant">Site web performant</Link></li>
          <li>→ <Link to="/coaching-communication-marketing">Coaching communication marketing</Link></li>
          <li>→ <Link to="/graphisme-design-logo">Graphisme et logo</Link></li>
          <li>→ <Link to="/boutique-responsable">Boutique responsable</Link></li>
          <li>→ <Link to="/associations-partenaires">Associations partenaires</Link></li>
          <li>→ <Link to="/mentions-legales">Mentions légales</Link></li>
        </ul>
        </div>
      </div>
      <div className="col-lg-4">
      <div className="footer-widget border-box">
        <div className="logo mb-4">
          <img src={logoKarma} alt="Logo Karma" />
        </div>
<br /><br />
        <p><i className="fas fa-phone-alt me-2"></i>06 22 10 70 18</p>
        <p><i className="fas fa-envelope me-2"></i>contact@agence-kar-ma.fr</p>
        <p><i className="fas fa-map-marker-alt me-2"></i>Massy</p>
      </div>
    </div>
<hr />

      <div className="footer-bottom">
      <Link to="/Contact">Contact</Link>
      <Link to="">Agence de production</Link>
      <Link to="/qui-sommes-nous-2">Qui sommes-nous</Link>
      <Link to="/associations-partenaires">Associations partenaires</Link>
      <Link to="/cgv">CGV</Link>
      <Link to="/politique-de-confidentialite">Politique de confidentialité</Link>
      <Link to="/charte-de-responsabilite">Charte de responsabilité</Link>
    </div>
      <hr />
      <div className="col-lg-12">
        <div className="copyright-text">
          <p>Copyright © 2025 Kar'Ma </p>
        </div>
      </div>
    </div>
  </div>
</footer>
  );
};

export default Footer;

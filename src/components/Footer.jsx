import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-overlay"></div>
      <div className="footer-content">
        <div className="footer-left">
          <h2>Kar'Ma</h2>
          <p>Agence Responsable</p>
          <p>Tél : 06 22 10 70 18</p>
          <p>Email : contact@agence-kar-ma.fr</p>
          <p>Massy</p>
          <p>Copyright © 2025 Kar'Ma</p>
        </div>
        <div className="footer-middle">
          <ul>
            <li>Newsletters veille OPS</li>
            <li>Brand Content – Production OPS</li>
            <li>Site web performant</li>
            <li>Coaching communication marketing</li>
            <li>Graphisme et logo</li>
            <li>Boutique responsable</li>
            <li>Associations partenaires</li>
            <li>Mentions légales</li>
          </ul>
        </div>
        <div className="footer-right">
          <h3>Suivez-nous</h3>
          <div className="social-icons">
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <a href="#">Contact</a>
        <a href="#">Agence de production</a>
        <a href="#">Qui sommes-nous</a>
        <a href="#">Associations partenaires</a>
        <a href="#">CGV</a>
        <a href="#">Politique de confidentialité</a>
        <a href="#">Charte de responsabilité</a>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import "./css/calendrier-social-media.css";
import { agencecalendrier, calendrier, cartcalendrier, intuit, logo1, logokarma } from "../assets";
import { Link } from "react-router-dom";

const CalendrierSocialMedia = () => {


  return (
    <div class="calendrier-container">

    <div class="calendrier-top-section">
      <div class="calendrier-bg-left">
        <img src={calendrier} alt="Calendrier Social Media 2025" />
      </div>

      <div class="calendrier-form-right">
      <img src={logokarma} alt="Calendrier Social Media 2025" style={{maxWidth: '60px'}} />
        <h2>Inscrivez-vous</h2>
        <h4>pour recevoir votre calendrier Social Media 2025</h4>
        <img src={cartcalendrier} alt="Calendrier Image" class="form-image" />
        <form>
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Prénom" required /> 
          <input type="text" placeholder="Nom" required />
          <input type="tel" placeholder="Numéro de téléphone" required />
          <button type="submit">Valider</button>
        </form>
        <p>*L'agence Kar'Ma  collecte et traite vos données afin de répondre au mieux à votre demande d'information. À cet effet, les champs signalés par un astérisques [*] sont obligatoires. En cliquant sur le bouton "Envoyer" vous donnez votre consentement à cette fin.</p>
        <p>Conformément à la loi informatique et libertés du 6 Janvier 1978 vous disposez d’un droit d’accès de rectification et d’opposition aux données personnelles vous concernant que vous pouvez exercer à tout moment en nous écrivant à <a href="mailto:contact@agence-kar-ma.fr?subject=Loi%20informatique%20et%20libert%C3%A9s">contact@agence-kar-ma.fr</a></p>
      </div>
    </div>

    <div class="calendrier-bottom-section">
      <h2>Libérez-vous de votre Com'</h2>
      <p style={{textAlign: 'center'}}><strong>avec un forfait mensuel selon vos besoins</strong></p>
      <p><strong>Vous hésitez sur ce dont vous avez vraiment besoin pour booster votre communication ?</strong></p>
      <p>Optez pour notre forfait <strong>'Libérez-vous'</strong> : une solution <strong>100% sur-mesure</strong> pour vous simplifier la vie.</p>
      <p>Réservez dès maintenant votre consultation gratuite, et ensemble, construisons <strong>une stratégie parfaitement alignée</strong> sur vos objectifs et votre budget.</p>
      <p><strong>💡 Faites-nous confiance : gagnez du temps, libérez votre esprit, et concentrez-vous sur ce que vous faites de mieux.</strong></p>
      

      <Link to="/Contact"><h2 style={{fontSize: '1.2rem'}}>Prendre rendez-vous dès maintenant !</h2></Link>
    </div>
    
    
    <div class="calendrier-social-media-container">
      <img src={agencecalendrier} alt="Social Media" />
      <div class="calendrier-social-media-links">
        <ul>
          <li><Link to="https://www.linkedin.com/company/agence-kar-ma/" className="social-icon facebook-icon" style={{color: '#0077b5'}}><i className="fab fa-linkedin"></i></Link></li>
          <li><Link to="https://www.instagram.com/agence_kar_ma/" className="social-icon linkedin-icon"  style={{color: '#e4405f'}}><i className="fab fa-instagram"></i></Link></li>
          <li><Link to="https://www.facebook.com/karmaagence" className="social-icon instagram-icon"  style={{color: '#3b5998'}}><i className="fab fa-facebook"></i></Link></li>
        </ul>
      </div>
    </div>
    
    
    <div class="calendrier-footer-container">
      <a href="https://mailchimp.com/contact/abuse/" style={{textDecoration: 'none', color: '#696767'}}>Report Abuse</a>
      <a href="https://mailchimp.com/referral/?utm_source=freemium_landingpage&utm_medium=landingpage&utm_campaign=referral_marketing"><img src={intuit} alt="Logo" /></a>
    </div>
</div>
  );
};

export default CalendrierSocialMedia; 

import React from "react";
import Header from "../components/Header";
import "./css/Offre-prestation.css";
import { img_card, img_card2, img_card3, img_card4, img_card5, img_card6 } from "../assets";
import PRICING_CONTENT from "../constants";
const Offres_prestations = () => {
  return (
    <div>
      <Header />
      <div className="OffresPrestation-info">
        <h3>Racontez-nous votre histoire, Kar’Ma s’occupe du reste.</h3>
        <p>Kar’Ma est une agence de production spécialisée dans les campagnes publicitaires.</p>
        <p>Nous accompagnons les annonceurs, les agences et les régies publicitaires dans leurs projets marketing et <br /> communication mais aussi dans la stratégie des campagnes cross média.</p>
      </div>
      
      <section className="container-OffresPrestation">
        <div className="services-OffresPrestation">
            <div className="service-card-OffresPrestation">
                <img src={img_card} alt="" />
                <p>Brand Content Production OPS</p>
            </div>
            <div className="service-card-OffresPrestation">
              <img src={img_card2} alt="" />
                <p>Stratégie de Communication et Marketing</p>
            </div>
            <div className="service-card-OffresPrestation">
                <img src={img_card3} alt="" />
                <p>Développement Web</p>
            </div>
        </div>
        <div className="services-OffresPrestation">
            <div className="service-card-OffresPrestation">
                <img src={img_card4} alt="" />
                <p>Coaching & Formation Professionnelle</p>
            </div>
            <div className="service-card-OffresPrestation">
                <img src={img_card5} alt="" />  
                <p>Création de logo et graphisme</p>
            </div>
            <div className="service-card-OffresPrestation">
                <img src={img_card6} alt="" />
                <p>Réseaux sociaux et Influence</p>
            </div>
        </div>
      </section>


      <section className="container-price">
      {PRICING_CONTENT.map((pack, index) => (
        <div className="pricing-card" key={index}>
          <div className="pricing-header">
            {pack.title}
            <p>{pack.description}</p>
          </div>
          <div className="pricing-content">
            <h5 className="price">
              <span className="old-price">{pack.oldPrice}</span> {pack.newPrice}
            </h5>
            <hr />
            <ul className="features">
              {pack.features.map((feature, i) => (
                <li key={i}>
                  <i className="far fa-check-circle"></i> {feature}
                </li>
              ))}
            </ul>
            <hr />
            <a href="#" className="btn">
              Je veux cette formule
            </a>
            <p className="footer-text">Ce pack vous intéresse ? Vous souhaitez avoir plus de renseignements ? Contactez-nous !</p>
          </div>
        </div>
      ))}
    </section>


      <div className="OffresPrestation-background">
        <div className="OffresPrestation-container">
          <div className="OffresPrestation-screen">
            <div className="OffresPrestation-screen-header">
              <div className="OffresPrestation-screen-header-left">
                <div className="OffresPrestation-screen-header-button OffresPrestation-close"></div>
                <div className="OffresPrestation-screen-header-button OffresPrestation-maximize"></div>
                <div className="OffresPrestation-screen-header-button OffresPrestation-minimize"></div>
              </div>
              <div className="OffresPrestation-screen-header-right">
                <div className="OffresPrestation-screen-header-ellipsis"></div>
                <div className="OffresPrestation-screen-header-ellipsis"></div>
                <div className="OffresPrestation-screen-header-ellipsis"></div>
              </div>
            </div>
            <div className="OffresPrestation-screen-body">
              <div className="OffresPrestation-screen-body-item">
                <div className="OffresPrestation-app-form">
                  <div className="OffresPrestation-app-form-group">
                    <h2>
                    BESOIN D'UNE FORMULE SUR-MESURE ?</h2>
                  </div>
                  <div className="OffresPrestation-app-form-group">
                    <input className="OffresPrestation-app-form-control" placeholder="Nom Prenom" />
                  </div>
                  <div className="OffresPrestation-app-form-group">
                    <input className="OffresPrestation-app-form-control" placeholder="Email" />
                  </div>
                  <div className="OffresPrestation-app-form-group message">
                    <input className="OffresPrestation-app-form-control" placeholder="Message" />
                  </div>
                  <div className="OffresPrestation-app-form-group buttons">
                    <a href="#" className="btn">Envoyer</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offres_prestations;

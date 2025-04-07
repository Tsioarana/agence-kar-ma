import React from 'react';
import './page5.css';
import { Link } from 'react-router-dom';


const Page5 = () => {
  
  return (
    <div className="container-global">
        <h2 className="title-container">Quelle(s) idée(s) allons sublimer ensemble aujourd’hui ?</h2>
        <div className="container-ensemble-cards">
            <div className="cards">
                <Link to="/production-ops" style={{textDecoration: 'none'}}>
                    <div className="card-header header1">
                        Brand Content - OPS <span>→</span>
                    </div>
                </Link>
                <div className="card-body body1">
                    <h3>Développer votre CA</h3>
                    <p>L’agence vous accompagne dans la prise de brief, la création d’opération sur-mesure, 
                       la coordination complète du projet, le bilan de performance et les recommandations stratégiques.</p>
                </div>
            </div>
            <div className="cards">
                <Link to="/strategie-communication-marketing" style={{textDecoration: 'none'}}>
                    <div className="card-header header2">
                        Stratégie marketing et Communication <span>→</span>
                    </div>
                </Link>
                <div className="card-body body2">
                    <h3>Stratégie sur-mesure clé en main</h3>
                    <p>Avant de vous lancer, il est primordial d’avoir une stratégie bien ficelée.</p>
                    <p>Notre agence élabore une véritable stratégie sur-mesure clé en main.</p>
                </div>
            </div>
            <div className="cards">
                <Link to="/graphisme-design-logo" style={{textDecoration: 'none'}}>
                    <div className="card-header header3">
                        Graphisme et Logo <span>→</span>
                    </div>
                </Link>
                <div className="card-body body3">
                    <h3>Un design à votre image</h3>
                    <p>Création de graphisme web et print originaux et sur-mesure pour votre communication : logo, identité visuelle, charte graphique, carte de visite, flyer etc.</p>
                </div>
            </div>
            <div className="cards">
                <Link to="/site-web-performant" style={{textDecoration: 'none'}}>
                    <div className="card-header header4">
                    Développement Web <span>→</span>
                    </div>
                </Link>
                <div className="card-body body4">
                    <h3>Un site web performant</h3>
                    <p>Obtenez un Site Web mobile first pour votre activité : <br />UX | Design | Développement | SEO</p>
                </div>
            </div>
            <div className="cards">
                <Link to="/social-media-community-manager" style={{textDecoration: 'none'}}>
                    <div className="card-header header5">
                    Social Média & Influenceur <span>→</span>
                    </div>
                </Link>
                <div className="card-body body5">
                    <h3>Stratégie Social Média</h3>
                    <p>Confiez vos réseaux et libérez-vous du temps pour faire autre chose. <br />On s’occupe de tout : Social Média | Community Management | Social Ads | Campagne Influenceur etc. </p>
                </div>
            </div>
            <div className="cards">
                
                <Link to="/coaching-communication-marketing" style={{textDecoration: 'none'}}>
                    <div className="card-header header6">
                    Coaching / Formation <span>→</span>
                    </div>
                </Link>
                <div className="card-body body6">
                    <h3>Tous les secrets pour développer vos réseaux sociaux</h3>
                    <p>Coaching personnalisé ou en groupe pour gérer vos réseaux sociaux comme un pro et (re)découvrir le marketing Digital.</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Page5;



import React from "react";
import "./css/AudaceUser.css";
import Header from "../components/Header";

const CharteETresponsabilite = () => {
  return (

    <div>
        <Header />
    <div className="audace-user" style={{textAlign: 'center', marginTop: '70px'}}>
      <h1 style={{color: '#126E88', fontWeight: 'bold'}}>Notre charte de responsabilité</h1>
      <p style={{fontSize:'1.3rem'}}>Kar’Ma est une agence de production responsable, qui s’engage à promouvoir et à développer les initiatives solidaires et responsables.</p>
      <p style={{fontSize:'1.3rem'}}>Nous souhaitons contribuer, à notre échelle, au développement social, solidaire et environnemental de notre société, avec respect et éthique.</p>

<br />
    
      <div style={{textAlign: 'start'}}>
        <h1  style={{color: '#0607077E', fontWeight: 'bold'}}>Voici nos engagements et notre raison d’être :</h1>
        <p><span>1- </span>
          Nous travaillons principalement avec des indépendants ou auto-entrepreneurs pour favoriser l’emploi et ainsi contribuer à un achat responsable, lutter contre les discriminations et prévenir des risques d’exclusions. Tous nos indépendants acceptent et approuvent cette charte.
        </p>
        <p><span>2- </span>
          Nous recommandons nos clients de privilégier le Digital versus la presse pour leur communication et support marketing.
        </p>
        <p><span>3- </span>
        Nous travaillons principalement avec des associations, des entreprises éco-socio-responsables ou des sociétés qui ont une RSE en place.
        </p>
        <p><span>4- </span>
        Notre rôle sera d’orienter nos clients sur les messages et les valeurs qu’ils souhaitent transmettre, afin que la conception des supports marketing, médias ou corporates, mettent en valeur un message écologique, social ou responsable en priorité.
        </p>
        <p><span>5- </span>
        Nous faisons preuve de loyauté, de transparence et assurons une relation client flexible et de proximité.
        </p>
        <p><span>6- </span>
        Nos méthodes de Management se veulent constructives et éthiques que ce soit avec nos prestataires ou nos fournisseurs.
        </p>
        <p><span>7- </span>
        Nous faisons la promotion des valeurs et pratiques éthiques et responsables.
        </p>
        <p><span>8- </span>
        Nous contribuons à notre échelle à la réduction des impacts environnementaux directs et indirects : recyclages des déchets, boire dans des bouteilles en verre, limiter les impressions ou imprimer sur du papier recyclé, limiter les déplacements et privilégier le télétravail etc.
        </p>
        <p><span>9- </span>
        Nous proposons à tous nos clients de reverser une partie du budget à une association partenaire (ou non) selon une grille prédéfinie (consultable <a href="">ici</a> ).
        </p>
      </div>
      
    </div>
    </div>
  );
};

export default CharteETresponsabilite;

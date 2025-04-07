import React from "react";
import "./css/Graphisme-design-logo.css";
import { marketing } from "../assets";
import { Link } from "react-router-dom";

const Strategiecommunicationmarketing = () => {
  return (
    <div style={{marginTop: '50px'}}>
       <section className="container-graphisme">
        <h1>Stratégie de communication et marketing</h1>
        <div className="content-graphisme">
            <img src={marketing} alt="Illustration Graphisme" />
            <div className="text-graphisme">
                <h2>Un beau visuel fait toute la différence</h2>
                <p>Chez Kar’Ma, nous sommes fiers de développer et de créer des stratégies sur-mesure pour chacun de nos clients, en fonction de leurs objectifs, besoins et attentes.</p>
                <p>L’agence se concentre sur la communication digitale et l’identité visuelle de votre marque ou entreprise.</p>
                <p>Nous accompagnons des TPE, PME dans différents secteurs
                (food, bien-être, automobile, immobilier etc.) qui souhaitent une communication professionnelle et différente des autres.</p>
                <p>Nous sommes entourés de professionnels/indépendants ultra-qualifiés et de confiance, pour développer une communication qui corresponde à votre marque.  Notre travail est 100% personnalisé, avec une grande dimension humaine : on accepte uniquement les projets qui nous inspirent, menés par des personnes pleines de belles valeurs.</p>
                <br/><button className="btn-outline-graphisme">VOIR QUELQUES REALISATIONS</button>
            </div>
        </div>
        
        <div className="cards-container-graphisme">
            <div className="card-graphisme budget-graphisme card-starategie" style={{width: 'auto'}}>
                <h2 style={{fontSize: '1.5rem'}}>“Si l'on n'investit pas sur le long terme, il n'y a pas de court terme.”</h2>
                <h3 style={{color: '#032627B0'}}>Georges David</h3>
                <h3 style={{fontSize: '1.8rem'}}>Budget responsable*</h3>
                <p>Avoir une bonne communication demande un certain investissement.</p>
                <p>Plusieurs critères rentrent en compte afin de définir au plus juste le budget de votre communication.</p>
                <Link to="/Contact" className="btn-outline-graphisme" style={{textDecoration: 'none', maxWidth: '300px'}}>
                    Demander un devis
                </Link>
            </div>
        </div>
        <br />
        <small>*en investissant chez nous, vous faites le bonheur de nos associations partenaires à qui nous versons une partie de notre CA.</small>
    </section>
    </div>
  );
};

export default Strategiecommunicationmarketing;  

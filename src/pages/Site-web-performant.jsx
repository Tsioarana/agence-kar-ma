import React from "react";
import "./css/Graphisme-design-logo.css";
import { siteweb } from "../assets";
import { Link } from "react-router-dom";

const Siteweb = () => {
  return (
    <div style={{marginTop: '50px'}}>
       <section className="container-graphisme">
        <h1>Création d'un site web performant</h1>
        <div className="content-graphisme">
            <img src={siteweb} alt="Illustration Graphisme" />
            <div className="text-graphisme" style={{textAlign: 'start'}}>
                <h2>Démarquez-vous avec un site Web performant</h2>
                <p>Avoir un site internet est incontournable aujourd’hui pour la gestion et la visibilité de votre entreprise.</p>
                <p>Votre site doit représenter au mieux votre entreprise, vos activités, votre personnalité et vos valeurs uniques.</p>
                <p>Si vous souhaitez la développer et bénéficier des innombrables opportunités que vous offre un site internet, vous devez avoir un site web parfait, remarquable et visible.  </p>
                <p>Et cela n’est possible qu’à travers une équipe expérimentée, qui va travailler en étroite collaboration avec vous, pour vous offrir un service sur-mesure et adapté à vos attentes.</p>
                <p>Notre agence a réuni des développeurs Web capables de vous fournir un site entièrement fonctionnel qui retiendra vos visiteurs pour les convertir en clients.</p>
                
            </div>
            <br/><button className="btn-outline-graphisme">VOIR NOTRE BOOK DE CREATIONS</button>
        </div>
        
        <div className="cards-container-graphisme card-site-web">
            <div className="card-graphisme"  style={{width: 'fit-content'}}>
                <h3>Les différents options possibles :</h3>
                <ul>
                    <li>→ Landing page –  à partir de 900 €</li>
                    <li>→ Blog – à partir de 1 500€</li>
                    <li>→ Site vitrine – à partir de 1 500€</li>
                    <li>→ Site Institutionnel – à partir de 3 000€</li>
                    <li>→ Site E-commerce – à partir de 4 000€</li>
                    <li>→ Site portail – à partir de 5 000€</li>
                    <li>→ SEO – référencement : sur devis</li>
                    <li>→ Cartes de visite</li>
                    <li>→ Refonte de site : sur devis</li>
                </ul>
            </div>
            
            <div className="card-graphisme budget-graphisme" style={{width: 'fit-content'}}>
                <h3>Budget responsable*</h3>
                <p>Devis sur-mesure en fonction de votre cahier des charges, de vos besoins et de vos attentes.</p>
                <Link to="/Contact" className="btn-outline-graphisme" style={{textDecoration: 'none', width: '300px'}}>
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

export default Siteweb;  

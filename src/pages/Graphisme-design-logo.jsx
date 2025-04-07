import React from "react";
import "./css/Graphisme-design-logo.css";
import { graphismelogo } from "../assets";
import { Link } from "react-router-dom";

const Graphismelogo = () => {
  return (
    <div style={{marginTop: '50px'}}>
       <section className="container-graphisme">
        <h1>Graphisme et Logo</h1>
        <div className="content-graphisme">
            <img src={graphismelogo} alt="Illustration Graphisme" />
            <div className="text-graphisme">
                <h2>Un beau visuel fait toute la différence</h2>
                <p>Notre agence réalise des <b>créations graphiques</b> uniques pour le print et le digital. Des graphismes personnalisés pour la <b>communication visuelle</b> de votre entreprise ou de votre marque : identité visuelle, logo, charte graphique et webdesign sur mesure.</p>
                <p>Grâce à un design esthétique, élégant, et attrayant, vous attirez des clients.</p>
                <p>L’expérience et l’expertise de l’agence dans le secteur de la <b>publicité print et digital,</b> nous permettent de connaitre les codes pour séduire vos clients avec des visuels d’exceptions.</p>
                <p>Que vous vouliez,<b> un logo (animé), une identité visuelle, une charte graphique, une mise à jour de votre logo, un flyer, des cartes de visite, un kakemono, un publi, des bannières publicitaires ou encore une plaquette de présentation,</b> nous avons l’expérience, les ressources et les talents pour vous aider.</p>
                <br/><button className="btn-outline-graphisme">VOIR NOTRE BOOK DE CREATIONS</button>
            </div>
        </div>
        
        <div className="cards-container-graphisme">
            <div className="card-graphisme">
                <h3>Nos différentes créations</h3>
                <ul>
                    <li>→ Logo</li>
                    <li>→ Charte graphique</li>
                    <li>→ Ux design</li>
                    <li>→ Visuels réseaux sociaux</li>
                    <li>→ Bannières publicitaires</li>
                    <li>→ Vidéos</li>
                    <li>→ Plaquettes</li>
                    <li>→ Cartes de visite</li>
                    <li>→ etc.</li>
                </ul>
            </div>
            
            <div className="card-graphisme budget-graphisme">
                <h3>Budget responsable*</h3>
                <p>Le prix de nos créations varie selon vos besoins...</p>
                <Link to="/Contact" className="btn-outline-graphisme" style={{textDecoration: 'none', maxWidth: '200px'}}>
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

export default Graphismelogo;  

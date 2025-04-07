
import React from "react";
import "./css/Graphisme-design-logo.css";
import { Link } from "react-router-dom";
import { partenaires, partenaires2, partenaires3 } from "../assets";

const Associationspartenaires = () => {
  return (
    <div style={{marginTop: '50px'}}>
       <section className="container-graphisme">
        <h1>NOS ASSOCIATIONS PARTENAIRES</h1>
        <div className="content-graphisme">
            <img src={partenaires} alt="Illustration Graphisme" />
            <div className="text-graphisme" style={{textAlign: 'start'}}>
                <p>Nous avons sélectionné des associations qui œuvres dans des domaines qui nous tiennent à cœur.</p>
                <p><b>Engagez-vous avec nous !</b> En travaillant avec nous, vous aurez la possibilité de réserver une partie de votre investissement auprès d’une association partenaire ou celle de votre choix.</p>
            </div>
        </div>
        <div className="content-graphisme">
            <div className="text-graphisme" style={{textAlign: 'start'}}>
                <p>L’association <a href="https://enfantsdelespoir.org/">Enfants de l’espoir</a> est un réseau associatif en France, qui regroupe 3 associations et 3 organismes fondateurs, pour soutenir et promouvoir l’association « Vivre dans l’espérance » à Dapaong, au Togo.</p>
                <p>L’objectif de l’association « Enfants de l’espoir » est de soutenir des projets humanitaires et des actions de solidarité au profit d’enfants et de familles en situation de vulnérabilité et de pauvreté en Afrique de l’Ouest.</p>
                <p>Les 6 associations et organismes fondateurs sont :</p>
                <div style={{marginLeft: '30px', lineHeight: '1'}}>
                  <p>→ l’association Maminou, de Nîmes ;</p>
                  <p>→ l’association Yendouboame, d’Angers ;</p>
                  <p>→ l’association L’acacia et le néré, de Reims ;</p>
                  <p>→ la communauté des Sœurs hospitalières de Saint-Amand-les-Eaux ;</p>
                  <p>→ le service de la Pastorale des jeunes du diocèse de Cambrai ;</p>
                  <p>→ l’hebdomadaire Pèlerin.</p>
                </div>
                <p>Depuis sa création début 2018, Enfants de l’Espoir a permis la construction d’une école primaire de 6 classes adaptées aux enfants vulnérables, et d’une maternité permettant environ 400 naissances annuelles.</p>
                <p>L’agence Kar’Ma est très fière d’être partenaire avec l’association « Enfants de l’Espoir » afin de soutenir les actions de l’association « Vivre dans l’espérance ».  Les fonds déduits de votre investissement seront reversés à la communauté des Sœurs hospitalières de Saint-Arnaud-les-Eaux.</p>
                <p>En travaillant avec nous, vous pourrez contribuer au développement de leurs actions.</p>

            </div>
            
            <img src={partenaires2} alt="Illustration Graphisme" />
        </div>
        <div className="content-graphisme">
            <img src={partenaires3} alt="Illustration Graphisme" />
            <div className="text-graphisme" style={{textAlign: 'start'}}>
                <p>L’association Geneticancer est dédiée à la lutte contre les cancers génétiques et /ou d’origine héréditaire.</p>
                <p>Leurs missions :</p>
                <div style={{marginLeft: '30px'}}>
                  <p>→ Soutenir et accompagner les malades et les personnes prédisposées à un cancer génétique</p>
                  <p>→ Informer et communiquer sur les cancers génétiques et ou héréditaire</p>
                  <p>→ Récolter des fonds pour financer la recherche</p>
                </div>
                <p>Une association fondée en 2016 par Laeticia Mendes, qui a choisi de construire sa vie au service des autres. Lorsqu’elle a découvert qu’elle était porteuse d’une mutation BRCA2, Laetitia a compris qu’il n’y avait rien de plus fort que de partager son expérience de « mutante », avec les personnes qui seront prédisposées à un cancer génétique.</p>
                <p>Pour en savoir plus, rendez-vous sur le site <a href="https://enfantsdelespoir.org/">geneticancer.org</a>.</p>
                <p>L’agence Kar’Ma est très heureuse d’être partenaire avec Geneticancer. En travaillant avec nous, vous pourrez contribuer au développement de leurs actions.</p>

            </div>
        </div>
    </section>
    </div>
  );
};

export default Associationspartenaires;  

import React from "react";
import "./css/Graphisme-design-logo.css";
import { reseausocial } from "../assets";
import { Link } from "react-router-dom";

const SocialMediaCommunityManager = () => {
  return (
    <div style={{marginTop: '50px'}}>
       <section className="container-graphisme">
        <h1>Réseaux sociaux et influence marketing</h1>
        <div className="content-graphisme">
            <img src={reseausocial} alt="Illustration Graphisme" />
            <div className="text-graphisme" style={{textAlign: 'start'}}>
                <h2>Augmenter votre CA grâce aux réseaux sociaux</h2>
                <p>Il est indispensable aujourd’hui d’être <b>visible sur les réseaux sociaux.</b> Ce n’est plus une option, mais presque une nécessité si vous souhaitez faire évoluer votre business.</p>
                <p>Toutes les entreprises ne sont pas forcément concernées, mais une grande majorité doit compter sur les réseaux pour <b>vendre</b> (encore plus) et exister !</p>
                <p>Le métier de <b>community manager</b>est un travail à temps plein et vous avez sans doute autre chose à faire que de passer votre temps sur les réseaux.</p>
                <p>Il est donc indispensable d’avoir à vos côtés un bon Community Manager qui maitrise son métier, et qui possède une véritable expertise sur le sujet et bien entendu les réseaux sociaux :bannières <b> Création de contenu, gestion des communautés, animation, engagement, communication, veille, analyse, audit, monitoring, modération etc…</b></p>
                <p>Avant de prendre la gestion de votre compte par notre Community Manager, notre <b>social média</b> manager va créer une stratégie adaptée à votre secteur d’activité dans le but de promouvoir votre marque et conduire les internautes à l’acte d’achat.</p>
                
            </div>
            <br/><button className="btn-outline-graphisme">VOIR NOTRE BOOK DE CREATIONS</button>
        </div>
        

        <div className="parallax-QuiSommeNous">
            <div className="QuiSommeNous-title" style={{textAlign: 'start'}}>
                <p className="fade-in">Les réseaux sociaux sont devenus incontournables pour les entreprises qui souhaitent développer leur présence en ligne et atteindre de nouveaux clients. En effet, avec des milliards d’utilisateurs actifs chaque mois, les plateformes de médias sociaux offrent des opportunités uniques pour les marques de se connecter avec leur public cible et de créer des campagnes publicitaires ciblées.</p>
                <p className="fade-in">Mais comment maximiser ces opportunités pour atteindre les bonnes personnes ? C’est là que les influenceurs entrent en jeu. Les influenceurs sont des personnalités en ligne qui ont une communauté forte et engagée, et qui ont donc une influence sur cette communauté. En faisant appel à des influenceurs pour promouvoir votre marque, vous pouvez atteindre de manière ciblée et efficace les personnes qui ont le plus de chances d’être intéressées par vos produits ou services.</p>
                <p className="fade-in">En utilisant les influenceurs, vous pouvez également bénéficier de leur crédibilité et de leur expertise dans un domaine particulier, ce qui peut vous aider à renforcer votre image de marque et à vous démarquer de la concurrence. De plus, les influenceurs peuvent créer du contenu original pour votre marque, ce qui peut également aider à augmenter la notoriété et l’engagement auprès de votre public cible.</p>
                <p className="fade-in">En somme, les réseaux sociaux et les influenceurs sont des outils incontournables pour les entreprises qui souhaitent développer leur présence en ligne et atteindre de nouveaux clients. En faisant appel à des influenceurs pour promouvoir votre marque, vous pouvez maximiser les opportunités offertes par les réseaux sociaux et atteindre de manière efficace votre public cible.</p>
                
            </div>
        </div>

        <div className="cards-container-graphisme card-site-web">
            <div className="card-graphisme"  style={{width: 'fit-content'}}>
                <h3>Les différents options possibles :</h3>
                <ul>
                    <li>→ Création d’un compte</li>
                    <li>→ Planning mensuel stratégique des publications</li>
                    <li>→ Création + publication de contenus </li>
                    <li>→ Modération des contenus</li>
                    <li>→ Bilan Analytics trimestrielle + Accompagnement stratégique</li>
                    <li>→ Stratégie de sponsorisation</li>
                    <li>→ Campagne avec des influenceurs</li>
                </ul>
            </div>
            
            <div className="card-graphisme budget-graphisme" style={{width: 'fit-content'}}>
                <h3>Budget responsable*</h3>
                <p>Libérez-vous du temps, nous pouvons gérer un ou plusieurs comptes de A à Z, à partir de 550€ par mois.</p>
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

export default SocialMediaCommunityManager;  

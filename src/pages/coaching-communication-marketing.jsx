import React from "react";
import "./css/Graphisme-design-logo.css";
import { coaching } from "../assets";
import { Link } from "react-router-dom";

const CoachingCommuniCationmarketing = () => {
  return (
    <div style={{marginTop: '50px'}}>
       <section className="container-graphisme">
        <h1>Coaching et formation professionnelle</h1>
        <div className="content-graphisme">
            <img src={coaching} alt="Illustration Graphisme" />
            <div className="text-graphisme" style={{textAlign: 'start'}}>
                <h2>Développez vos connaissances</h2>
                <p>Chez Kar’Ma, nous croyons que la formation est essentielle pour <b>développer son activité</b> professionnelle. C’est pourquoi nous proposons une gamme de formations sur le <b>marketing digital</b> pour vous aider à mieux comprendre les <b>réseaux sociaux</b> et à mettre en place des <b>stratégies efficaces.</b></p>
                <p>Notre offre de coaching et de <b>formation professionnelle</b> est conçue pour répondre aux besoins des entrepreneurs, des marketeurs et des responsables de communication qui souhaitent <b>améliorer leur présence en ligne.</b></p>
                <p>Nous proposons des formations sur les réseaux sociaux les plus populaires, comme Instagram, TikTok et Facebook, ainsi que des outils de création de contenu visuel comme Canva.</p>
                <p>Nos formations sont animées par <b>Abiré Sogoyou experte en marketing digital.</b> Elle partagera son expérience et son savoir-faire pour vous aider à atteindre vos objectifs professionnels.</p>
                
            </div>
        </div>
        

        <div className="parallax-QuiSommeNous">
            <div className="QuiSommeNous-title" style={{textAlign: 'start'}}>
                <p>Aujourd’hui, une présence sur les réseaux sociaux est indispensable pour mieux communiquer, développer sa notoriété et fidéliser sa clientèle.</p>
                <p>Mais ce monde semble totalement inconnu ou vous n’arrivez pas à savoir quel réseau privilégier pour votre activité ou encore comment l’exploiter et améliorer votre visibilité pour ainsi augmenter votre CA.</p>
                <p>Grâce à nos formules de coaching, vous allez gérer votre présence sur les réseaux sociaux comme un.e pro !</p>
                <p>Nous vous accompagnons de la création de votre compte à la mise en place de votre stratégie digitale. L’agence peut également analyser votre compte existant et vous donner toutes les billes pour augmenter votre visibilité.</p>
                <p>Les coachings sont totalement personnalisés afin que vous puissiez également poser toutes vos questions.</p>
                <p>Avant chaque coaching, un social média manager fera un point avec vous de 5 à 10 minutes pour comprendre vos besoins et vos enjeux. A la suite de ce premier rendez-vous nous programmerons les différentes étapes et dates de coaching personnalisé.</p>
                
            </div>
        </div>

        <div className="cards-container-graphisme">
            <div className="card-graphisme"  style={{width: 'fit-content'}}>
                <h3>Nos différents coachings</h3>
                <ul>
                    <li>→ Coaching personnalisé : création du coaching 100% personnalisé selon vos besoins</li>
                    <div style={{lineHeight: '1rem', marginLeft: '30px', marginTop: '10px', fontSize: '0.8rem'}}>
                        <p><strong style={{color: '#fff',  fontSize: '0.9rem'}}>etape1:</strong>  1er RDV de 15 mins pour faire connaissance et comprendre vos besoins</p>
                        <p><strong  style={{color: '#fff',  fontSize: '0.9rem'}}>etape1:</strong>  nous créons un support personnalisé pour votre coaching afin de vous apporter toutes les réponses à vos problématiques</p>
                        <p><strong  style={{color: '#fff',  fontSize: '0.9rem'}}>etape1:</strong> nous programmons les séances de coaching (1h par séance)</p>
                    </div>
                    <li>→ Coaching Instagram ou TikTok : tout savoir pour développer son activité</li>
                    <li>→ Coaching Réseaux sociaux : Connaitre les fondamentaux pour se lancer ?</li>
                </ul>
            </div>
            
            <div className="card-graphisme"  style={{width: 'fit-content'}}>
                <h3>Nos modules de formation</h3>
                <ul>
                    <li>→ <strong>Réseaux sociaux :</strong> Mieux comprendre pour développer une stratégie efficace</li>
                    <li>→ <strong>Instagram : </strong>comment se développer naturellement et efficacement ?</li>
                    <li>→ <strong>Tiktok :</strong> comment développer sa marque ??</li>
                    <li>→ <strong>Canva :</strong> créer des visuels digitaux rapidement et facilement</li>
                    <li>→ <strong> Facebook ads :</strong> comment créer des campagnes efficaces et rentables ?</li>
                </ul>
            </div>

            <div className="card-graphisme budget-graphisme" style={{width: 'fit-content'}}>
                <h3>Budget responsable*</h3>
                <p>Nous vous offrons un coaching de 15min pour réaliser un audit gratuit de votre compte.</p>
                <p>Nos coachings durent en moyenne 1h. A partir de 150€ pour pourrez avoir les informations clés sur le thème choisi, poser toutes vos questions en direct avec notre social média expert et réussir par la suite gérer comme un.e pro.</p>
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

export default CoachingCommuniCationmarketing;  

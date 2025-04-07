import React from 'react';
import './page6.css';
import { portfolio, projet, projet2, projet3, projet4, projet5 } from '../../assets';

const Page6 = () => {
  
  return (
    <section className="container-projects">
        <h2>Les derniers projets réalisés</h2>
        <div className="project-container">
            <div className="project">
                <div className="project-content reveal-right">
                    <img  className="" src={projet} alt="Création de site internet" />
                    <div className="text reveal-top">
                        <span className="project-number">01</span>
                        <h3>Création de site internet</h3>
                        <p>Grâce à son nouveau site internet, notre client a pu développer son CA. Faites comme lui et obtenez un site web performant, qualitatif et rentable.</p>
                        <a href="#">Voir nos réalisations</a>
                    </div>
                </div>
            </div>
            <div className="project">
                <div className="project-content reveal-right">
                    <div className="text reveal-top">
                        <span className="project-number">02</span>
                        <h3>Consultante production OPS</h3>
                        <p>Grâce au Chef de projet senior en production d’OPS, nos clients ont réussi à fidéliser et renouveler des opérations cross média.</p>
                        <a href="#">Voir nos réalisations</a>
                    </div>
                    <img src={projet2} alt="Consultante production OPS" />
                    
                </div>
            </div>
            <div className="project">
                <div className="project-content reveal-right">
                    <img src={projet3} alt="Création de site internet" />
                    <div className="text reveal-top">
                        <span className="project-number">03</span>
                        <h3></h3>
                        <br />
                        <p>Grâce à la création de son compte Instagram et Facebook, notre client a réussi à se faire connaitre et vendre ses produits en livraison.</p>
                        <a href="#">Voir nos réalisations</a>
                    </div>
                </div>
            </div>
            <div className="project">
                <div className="project-content reveal-right">
                    <div className="text reveal-top">
                        <span className="project-number">04</span>
                        <h3>Chef de projet OPS</h3>
                        <p>Grâce à la présence d’un Chef de projet OPS, notre client a pu suivre et garantir la bonne réalisation de la vidéo promotionnelle pour son annonceur.</p>
                        <a href="#">Voir nos réalisations</a>
                    </div>
                    <img src={projet4} alt="Consultante production OPS" />
                    
                </div>
            </div>
            <div className="project">
                <div className="project-content reveal-right">
                    <img src={projet5} alt="Création de site internet" />
                    <div className="text reveal-top">
                        <span className="project-number">05</span>
                        <h3>Influenceur</h3>
                        <p>Grâce à notre maîtrise du monde de l’influence, nous savons cibler, rechercher et mettre en place des campagnes avec des influenceurs. Notre client à pu développer son activité et sa visibilité grâce à un partenariat totalement géré par l’agence.</p>
                        <a href="#">Voir nos réalisations</a>
                    </div>
                </div>
            </div>

            <div className="portfolio">
                <img src={portfolio} alt="" className='fade-in' />
            </div>
        </div>
    </section>
  );
};

export default Page6;

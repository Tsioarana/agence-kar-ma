
import React from "react";
import Header from "../components/Header";
import { img13 } from "../assets";
import { Link } from "react-router-dom";

const Newsletters = () => {
  return (
    <div>
        <Header />
        <div className="parallax-QuiSommeNous">
            <div className="QuiSommeNous-title" style={{textAlign: 'start', lineHeight: '1.2rem', maxWidth: '880px'}}>
                <h4 className="fade-in">Gagner du temps et augmenter votre CA !</h4>
                <p className="fade-in">Chez Kar’Ma, nous savons à quel point il peut être difficile de rester informé sur les dernières tendances en matière de campagnes publicitaires.</p>
                <p className="fade-in">C’est pourquoi nous avons décidé de vous offrir une newsletter hebdomadaire qui regroupe les opérations Brand Content du marché français. Grâce à cette newsletter, vous pourrez facilement identifier les opportunités qui s’offrent à vous et ainsi, faire gagner un temps précieux à vos équipes commerciales.</p>
                <br />
                <p className="fade-in">Forte de 13 ans d’expérience dans de grands groupes médias (Groupe Marie Claire, Prisma, Bayard Média Développement, Next Média Solutions etc.), l’agence a su développer une expertise unique sur la recherche, la mise en place et la conception d’opérations spéciales et Brand Content sur le digital.</p>
                <p className="fade-in">Aujourd’hui, nous vous proposons des Newsletters pour recevoir les opérations publicitaires sur votre secteur d’activité.</p>
                <br />
                <p className="fade-in">Des newsletters uniques sur le marché pour vous inspirer, découvrir, développer votre créativité, avoir plein d’idées, augmenter votre CA et soulager les équipes en interne (projets, sales, Ad Tech et Ad Ops… dans cet exercice de veille). Ils pourront continuer à faire leurs missions principales, tout en ayant une veille complète sur les OPS digitales et les infos clés du marché de la publicité.</p>
                <br />
                <p className="fade-in">Nous avons pensé au format « Newsletter » afin de créer un rendez-vous toutes les semaines avec vous.</p>
                <p className="fade-in">Mais nous sommes totalement flexible pour nous adapter à vos besoins :</p>
                <div style={{lineHeight: '0.9rem', marginLeft: '20px'}}>
                    <p><span>→</span> format PDF ou PPT</p>
                    <p><span>→</span> simple mail</p>
                    <p><span>→</span> présentation en visio ou dans vos locaux</p>
                </div>
            </div>
        </div>


        <div className="container-global" style={{justifyContent: 'center', minHeight: '500px'}}>
            <div className="container-ensemble-cards">
            <div className="cards">
                <div className="card-header header1" style={{fontSize: '1rem'}}>
                NEWSLETTERS - SUR-MESURE <br /> Veille OPS – Brand Content sur-mesure 
                </div>
                <div className="card-body body1">
                    <h3>Veille personnalisée</h3>
                    <p>Vous pourrez choisir les sites médias que vous voulez piger. Cette option vous permettra d’avoir une pige personnalisée et répondant parfaitement à votre secteur d’activité. </p>
                    <Link to="/newsletters/souscription-newsletters">En savoir plus</Link>
                </div>
            </div>
            <div className="cards">
                <div className="card-header header2" style={{fontSize: '1rem'}}>
                NEWSLETTERS - L'ESSENTIEL <br />Veille OPS – Brand Content quotidienne
                </div>
                <div className="card-body body2">
                    <h3>Chaque semaine</h3>
                    <p>Une newsletter gratuite pour découvrir chaque semaine une OPS média et les informations clés sur le marché (régies, agences, annonceurs etc.).</p>
                    <Link to="/newsletters/souscription-newsletters">Je souscris gratuitement</Link>
                </div>
            </div>
        </div>

        
    </div>
    <div className="hero-container" style={{padding: '0 0 0'}}>
          <div className="hero-info" style={{padding: '10px'}}>
            <h2 className='reveal-right' style={{fontSize: '1.5rem', textAlign: 'start', color: '#fff', textTransform: 'none', fontWeight: 'bold'}}>Pourquoi souscrire à l'une <br /> de nos Newsletters ?</h2>
            <p className='reveal-right' style={{fontSize: '0.9rem'}}>Vous allez soulager vos équipes en externalisant cette <br /> mission de veille,  tout en ayant plein d’idées.</p>
            <p className='reveal-right' style={{fontSize: '0.9rem'}}>Vous serez au courant des dernières tendances <br /> réalisées sur le marché.</p>
            <p className='reveal-right' style={{fontSize: '0.9rem'}}>Vos commerciaux pourront développer des nouvelles <br /> offres et ainsi augmenter le chiffre d’affaires.</p>
            {/* <a href="#" className="btn reveal-right">Voir nos prestations</a> */}
            <Link to="/newsletters/souscription-newsletters" className="btn reveal-right">Je souscris dès maintenant</Link>
          </div>
          <div className='hero-images'>
            <img src={img13} alt="" style={{maxWidth: '450px'}} className='reveal-bottom' />
          </div>
        </div>
    </div>
  );
};

export default Newsletters;  // Default export

import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import "./css/Qui-sommes-nous-2.css";
import { comm1, comm2, img13, img14 } from "../assets"; 

const QuiSommesNous = React.memo(() => {
  return (
    <div>
      <Header />

      <div className="qui-somme-nous">
        <h2 className="fade-in">Qui se cache derrière Kar'Ma ?</h2>
        <div className="container-qui-somme-nous">
          <div className="card-qui-somme-nous card1 reveal-right">
            <img src={img14} alt="Fondatrice de Kar'Ma" />
          </div>
          <div className="card-qui-somme-nous card2 reveal-top">
            <h4 >Je m’appelle Abiré et je suis la fondatrice de l’agence Kar’Ma.</h4>
            <p>
              Au cours des dix dernières années, j’ai acquis une expertise solide dans la <b>production d’Opérations Spéciales cross-média</b> 
              (groupe Marie Claire, Bayard, Prisma Média, Reworld Média, etc.), ce qui m’a permis de comprendre à quel point il est important 
              pour les annonceurs d’allier les notions <b>de valeur et d’éthique</b> dans leur business.
            </p>
            <p>
              C’est pourquoi j’ai créé l’agence Kar’Ma : pour <b>aider les entreprises à valoriser leurs idées</b> et contribuer à leur succès 
              en offrant un <b>accompagnement personnalisé et créatif.</b>
            </p>
            <p>
              Nous sommes une équipe d’experts en communication et en Marketing Digital, passionnés par notre métier et 
              <b> attachés aux valeurs de nos clients.</b>
            </p>
          </div>
        </div>
        <div className="parallax-QuiSommeNous">
        <div className="QuiSommeNous-title">
          <p className="fade-in">Notre approche est axée sur la <b>compréhension des enjeux de nos clients et de leurs valeurs,</b> afin de proposer des <b>solutions sur-mesure</b> qui répondent à leurs besoins spécifiques. Nous sommes à votre écoute et travaillons en étroite collaboration avec vous pour offrir une prestation de qualité.</p>
          <p className="fade-in">Chez Kar’Ma, nous sommes convaincus que la réussite d’une communication passe par <b>l’expression authentique de vos valeurs et de vos convictions</b>, sans oublier <b>vos enjeux commerciaux.</b></p>
          <p className="fade-in">Nous nous engageons donc à fournir des <b>prestations de qualité,</b> en accord avec les valeurs et la vision de nos clients, pour les aider à atteindre leurs objectifs. <b>Ensemble allons plus loin !</b></p>
          <h4 className="fade-in">Pourquoi le nom "Kar'Ma" ?</h4>
          <p className="fade-in">Kar’Ma est l’association des prénoms de mes enfants. Je voulais un nom qui me parle et qui me représente bien.</p>
          <p className="fade-in">Soucieuse de l’environnement et très engagée dans les actions RSE, l’agence a établi une <Link to="/notre-charte-de-responsabilite">« Charte de responsabilité »</Link> sur laquelle nous nous engageons.</p>
          <p className="fade-in">Nous invitons tous nos clients et partenaires à le suivre.</p>
          <p className="fade-in"><b>Enfin, l’agence verse une partie de son CA auprès de ses </b><Link to="/associations-partenaires">associations partenaires.</Link></p>
          <p className="fade-in">Cela reflète parfaitement ma personnalité.</p>
        </div>
      </div>
      <div className="hero-container">
          <div className="hero-info">
            <h2 className='reveal-right' style={{fontSize: '1.5rem', textAlign: 'start', color: '#fff'}}>Racontez-nous votre histoire, <br /> Kar’Ma s’occupe du reste.</h2>
            <p className='reveal-right' style={{fontSize: '0.9rem'}}>Kar’Ma est une agence de communication / marketing, spécialisée  <br /> dans les campagnes publicitaires (presse et digital).</p>
            <p className='reveal-right' style={{fontSize: '0.9rem'}}>Nous avons développé cinq axes pour vous offrir un <br /> accompagnement complet et personnalisé.</p>
            {/* <a href="#" className="btn reveal-right">Voir nos prestations</a> */}
            <Link to="/offres-et-prestations" className="btn reveal-right">Voir nos prestations</Link>
          </div>
          <div className='hero-images'>
            <img src={img13} alt="" style={{maxWidth: '450px'}} className='reveal-bottom' />
          </div>
        </div>
      </div>

      <section className="wrapper-QuiSommeNous">
        <h1 className="heading-QuiSommeNous">Construisons ensemble le projet qui vous ressemble</h1>
        <p className="description-QuiSommeNous">L’agence s’appuie sur l’expertise de nos prestataires en freelance pour vous apporter le meilleur dans chaque domaine.</p>
        <div className="timeline-container-QuiSommeNous">
            <div className="service-box-QuiSommeNous">
                <img className="service-image-QuiSommeNous" src={comm1} alt="Communication Presse" />
                <h2 className="title-QuiSommeNous">Communication digitale</h2>
                <p className="text-QuiSommeNous">Format publicitaire, Contenu SEO, Brand content, Community management, Social média, Campagnes influenceurs, Stratégie SEM, Jeu concours, Newsletters, Emailing, etc.</p>
            </div>
            <div className="service-box-QuiSommeNous">
                <h2 className="title-QuiSommeNous">Consulting</h2>
                <p className="text-QuiSommeNous">Accompagnement dans la mise en place de votre communication ; Suivi et coordination d’opération (digitales ou print) ; Bilan de performance ; Analyse des campagnes publicitaires ; Plan de communication ; Optimisations et recommandations stratégiques, Formations etc.</p>
                
            </div>
            <div className="service-box-QuiSommeNous">
                <img className="service-image-QuiSommeNous" src={comm2} alt="Consulting" />
                <h2 className="title-QuiSommeNous">Communication presse</h2>
                <p className="text-QuiSommeNous">Livre ; Catalogue, Facsimilé, Poster, Plaquette, Présentation, Flyer, Carte de visite, Carte de vœux, Carte de remerciement, Offre commerciale etc.</p>   
            </div>
        </div>
    </section>


     
    </div>
  );
});

export default QuiSommesNous;

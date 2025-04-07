
import React from "react";
import "./css/Graphisme-design-logo.css";
import "./css/Production-ops.css";
import { coaching } from "../assets";
import { Link } from "react-router-dom";

const Productionops = () => {
  return (
    <div style={{marginTop: '50px'}}>
       <section className="container-graphisme">
        <h1>BRAND CONTENT OPÉRATIONS PUBLICITAIRES</h1>
        <div className="content-graphisme">
            <img src={coaching} alt="Illustration Graphisme" />
            <div className="text-graphisme" style={{textAlign: 'start'}}>
                <h2>Besoin d’un accompagnement pour vos opérations Brand Content ?</h2>
                <p>Forte de 13 ans d’expérience dans de grands groupes médias <b>(Groupe Marie Claire, Psychologies, Prisma média, Reworld Media Connect,  Bayard Média Développement, Next Média Solutions etc.)</b>, l’agence est experte dans la création d’opérations, la coordination, la mise en place et la conception d’opérations spéciales et Brand Content <b>(publi-rédactionnel, OPS* cross média, display, podcast, presse, jeu-concours, marketing direct, réseaux sociaux, vidéo etc.).</b></p>
                <p>Vous aurez un <b>chef de projet Sénior indépendant</b> qui va soulager vos équipes dans la création de briefs sur-mesure et la coordination de vos projets multi-canaux. Il va coordonner pour vous tous les intervenants nécessaires à la bonne exécution de vos campagnes.</p>
                <p>Il assurera la pertinence des messages à partir du <b>brief créatif</b> sur les différents supports (presse, digital, radio, TV, affichage, vidéo etc.), en maitrisant le <b>retroplanning,</b> en respectant le <b>budget alloué</b> au projet, tout cela en étroite collaboration avec tous les intervenants.</p>
                <Link to="/Contact" className="btn-outline-graphisme" style={{textDecoration: 'none', width: '300px'}}>
                  VOIR QUELQUES REALISATIONS
                </Link>
          </div>
        </div>
        

        <div className="parallax-QuiSommeNous">
            <div className="QuiSommeNous-title" style={{textAlign: 'start'}}>
                <h4>Besoin d’un Chef de projet OPS
                efficace, motivé, agile et disponible ?</h4>
                <p><strong>Mission à temps plein ou à mi-temps</strong></p>
                <p>Un congé maternité ? Un arrêt maladie ? Un surplus d’activité ? Nous mettons à votre disposition un Chef de projet senior pour reprendre le suivi de vos opérations Brand Content.</p>
                <p><strong>Mission par opération</strong></p>
                <p>Pour soulager vos équipes, vous pouvez laisser entre des mains expertes la gestion d’opérations quelque soit le niveau de complexité.</p>
                <Link to="/Contact" className="btn-outline-graphisme" style={{textDecoration: 'none', maxWidth: '300px'}}>
                Demandez un devis
                </Link>
            </div>
        </div>
    </section>

    <div style={{textAlign: 'center'}}>
      <h4 style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#005f73'}}>Nos packs et abonnements</h4>
      <p style={{fontSize: '1.5rem', color: '#242525A1'}}>La garantie de rester toujours (pro)actif</p>
      <h4>⇓⇓⇓⇓</h4>
    </div>
    <br />

    <div className="production-ops-card-container">

    <div className="production-ops-card">
      <h1>Forfait "Only Brief"</h1>
      <p>Ce forfait vous accompagne dans la réflexion et la création d'une opération Brand Content selon le brief du client.</p>
      <p>On vous aide à concevoir un plan média sur-mesure.</p>
      <p>Il comprend une séance de brainstorming, une étude de faisabilité et la rédaction du brief.</p>

      <div className="production-ops-price-box">
        <h2><span>€</span>1 200**</h2>
        <p><i className="fas fa-file-alt"></i> Jusqu'à 2 briefs par mois</p>
        <hr />
        <p><i className="far fa-check-circle"></i> Brainstorming</p>
        <p><i className="far fa-check-circle"></i> Faisabilité</p>
        <p><i className="far fa-check-circle"></i> Rédaction du brief</p>
      </div>

      <Link to="/Contact" className="production-ops-btn">
        Contactez-nous
      </Link>
      <p className="production-ops-card-footer">Forfait modulable - Pour plus d'options contactez-nous !</p>
    </div>

    <div className="production-ops-card">
      <h1>Forfait "Only Perf"</h1>
      <p>Ce forfait vous accompagne dans la création de vos bilans de performance.</p>
      <p>Ce forfait vous accompagne dans la création
        de vos bilans de performance.
        Il comprend la récolte des résultats, la création du bilan,
        l'analyse des indicateurs de succès
        et les recommandations stratégiques pour fidéliser le client.</p>

      <div className="production-ops-price-box">
        <h2><span>€</span>1 200**</h2>
        <p><i className="fas fa-database"></i> Jusqu'à 2 bilans par mois</p>
        <hr />
        <p><i className="far fa-check-circle"></i> Récolte des résultats</p>
        <p><i className="far fa-check-circle"></i> Analyse</p>
        <p><i className="far fa-check-circle"></i>  Création du bilan</p>
        <p><i className="far fa-check-circle"></i>  Recommandations stratégiques</p>
      </div>

      <Link to="/Contact" className="production-ops-btn">
      Je souscris
      </Link>
      <p className="production-ops-card-footer">Forfait modulable - Pour plus d'options contactez-nous !</p>
    </div>

    <div className="production-ops-card">
      <h1>Forfait "Only Prod"</h1>
      <p>Ce forfait vous accompagne dans la mise en place de vos opérations Brand Content : Kick off, mise en place, pige et suivi de l'opération.</p>

      <div className="production-ops-price-box">
        <h2><span>€</span>2 000**</h2>
        <p><i className="fas fa-calendar-alt"></i> Jusqu'à 2 opérations par mois</p>
        <hr />
        <p><i className="far fa-check-circle"></i>  Kick off</p>
        <p><i className="far fa-check-circle"></i>  Retroplanning, planning</p>
        <p><i className="far fa-check-circle"></i>  Suivi et coordination</p>
        <p><i className="far fa-check-circle"></i>  Présence au tournage</p>
        <p><i className="far fa-check-circle"></i>  Interlocuteur principal</p>
        <p><i className="far fa-check-circle"></i>  Coordination avec intervenants</p>
        <p><i className="far fa-check-circle"></i>  Gestion du budget</p>
      </div>

      <Link to="/Contact" className="production-ops-btn">
      Je souscris
      </Link>
      <p className="production-ops-card-footer">Forfait modulable - Pour plus d'options contactez-nous !</p>
    </div>

  </div>


    <div className="OffresPrestation-info">
        <h3>Racontez-nous votre histoire, Kar’Ma s’occupe du reste.</h3>
        <p>*Une OPS (opération spéciale) est en générale une campagne « sur mesure » pour un annonceur, en collaboration avec une l’agence représentant l’annonceur et le support ou la régie du média concernée.</p>
        <p>Les opérations spéciales ont un impact plus fort et de meilleures retombées, que les campagnes traditionnelles (display).</p>
        <p>Une OPS raconte une histoire dans un écosystème en affinité avec ses valeurs. C’est une manière plus éditorialisée de faire de la publicité.</p>
        <br />
        <p>** Engagement minimum sur 6 mois. Renouvellement automatique.</p>
      </div>
    
    <div className="OffresPrestation-background">
        <div className="OffresPrestation-container">
          <div className="OffresPrestation-screen">
            <div className="OffresPrestation-screen-header">
              <div className="OffresPrestation-screen-header-left">
                <div className="OffresPrestation-screen-header-button OffresPrestation-close"></div>
                <div className="OffresPrestation-screen-header-button OffresPrestation-maximize"></div>
                <div className="OffresPrestation-screen-header-button OffresPrestation-minimize"></div>
              </div>
              <div className="OffresPrestation-screen-header-right">
                <div className="OffresPrestation-screen-header-ellipsis"></div>
                <div className="OffresPrestation-screen-header-ellipsis"></div>
                <div className="OffresPrestation-screen-header-ellipsis"></div>
              </div>
            </div>
            <div className="OffresPrestation-screen-body">
              <div className="OffresPrestation-screen-body-item">
                <div className="OffresPrestation-app-form">
                  <div className="OffresPrestation-app-form-group">
                    <h2>
                    LAISSEZ-NOUS UN MESSAGE</h2>
                  </div>
                  <div className="OffresPrestation-app-form-group">
                    <input className="OffresPrestation-app-form-control" placeholder="Nom" />
                  </div>
                  <div className="OffresPrestation-app-form-group">
                    <input className="OffresPrestation-app-form-control" placeholder="Prenom" />
                  </div>
                  <div className="OffresPrestation-app-form-group">
                    <input className="OffresPrestation-app-form-control" placeholder="Email" />
                  </div>
                  <div className="OffresPrestation-app-form-group message">
                    <input className="OffresPrestation-app-form-control" placeholder="Message" />
                  </div>
                  <div className="OffresPrestation-app-form-group buttons">
                    <a href="#" className="btn">Envoyer</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{textAlign: 'center'}}>
      <h4 style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#005f73'}}>Budget responsable*</h4>
      <p style={{fontSize: '0.8rem', color: '#242525A1'}}>Prestation facturée au TJM (temps journalier moyen) ou au forfait (selon le nombre d’OPS et la complexité des opérations). <br />
*en investissant chez nous, vous soutenez nos associations partenaires à qui nous versons une partie de notre CA.</p>
    </div>
    </div>
  );
};

export default Productionops;  

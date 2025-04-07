import React from "react";
import { Abire, ilyes, img1, imgc, imgc1, imgc2, imgc3, imgc4, jade, julia, profile } from "../assets";
import "./css/accompagnement-sur-loutil-canva.css";
import { Link } from "react-router-dom"; // assure-toi que tu utilises React Router



const formules = [
    {
      title: "Consultation ponctuelle",
      description:
        "Nos experts en design sont là pour répondre à toutes vos questions et vous donner des conseils personnalisés afin de créer des visuels professionnels et percutants. Que ce soit pour votre site web, vos réseaux sociaux ou vos supports de communication, nous sommes là pour vous aider. Consultation minimum 1 heure !",
      priceOld: "120€ HT",
      priceNew: "85€ HT",
      detail: "Prix à l’heure",
      link: "Je réserve",
      to: "https://calendly.com/agence-kar-ma/rdv-abire-sogoyou",
      iconClass: imgc1,
      color: "#fff5ec"
    },
    {
      title: "Coaching Identité Visuelle",
      description:
        "Session d’une heure par création :",
        sousdescription: "→ Votre palette de couleur",
        sousdescription1: "→ Votre logo",
        sousdescription2: "→ Votre charte graphique",
        sousdescription3: "→ Votre carte de visite",
        description2: "Au totale : 4 Heures de coaching personnalisé, établies selon votre temps et votre planning C’est le kit de base pour démarrer votre activité !",
      priceOld: "340€ HT",
      priceNew: "275€ HT",
      link: "Je réserve",
      to: "https://calendly.com/agence-kar-ma/rdv-abire-sogoyou",
      iconClass: imgc2,
      color: "#fff5ec"
    },
    {
      description:
        "Une assistance pour vous accompagner dans la réalisation de vos projets créatifs sur Canva. Vous bénéficierez d’une expertise professionnelle pour améliorer vos visuels, obtenir les réponses à vos questions et donner vie à toutes vos idées.",
      priceOld: "450€ HT",
      priceNew: "120€ HT",
      detail: "soit 40€/mois – engagement 3 mois",
      link: "Voir toutes les offres",
      to: "/assistance-sur-loutil-canva",
      iconClass: imgc3,
      color: "#fff5ec"
    },
    {
      title: "Formation complète sur Canva",
      description:
        "5 à 7 modules pour voler de vos propres ailes :",
        sousdescription: "→ Comprendre Canva pro",
        sousdescription1: "→ Création d’une identité de marque",
        sousdescription2: "→ Création d’un kit complet pour les réseaux sociaux",
        sousdescription3: "→ Création d’une vidéo etc.",
      priceOld: "720€ HT",
      priceNew: "550€ HT",
      link: "Je réserve",
      to: "https://calendly.com/agence-kar-ma/rdv-abire-sogoyou",
      iconClass: imgc4,
      color: "#f8fcff"
    },
    {
      title: "Coaching Création Réseaux Sociaux",
      description:
        "Création de 10 visuels sur-mesure à votre identité visuelle, pour sublimer vos réseaux sociaux. 10 visuels au choix :",
        sousdescription: "→ Story",
        sousdescription1: "→ publication simple",
      priceOld: "450€ HT",
      priceNew: "345€ HT",
      link: "Je réserve",
      to: "https://calendly.com/agence-kar-ma/rdv-abire-sogoyou",
      iconClass: imgc3,
      color: "#fff9f5"
    },
    {
      title: "Rejoignez notre groupe privé À VIE !",
      description:
        "Vous bénéficierez d’un accès continu à des ressources et à une communauté de personnes partageant les mêmes valeurs que vous. Soyez soutenu dans vos créations personnelles et professionnelles tout au long de votre parcours, et faites partie d’une communauté engagée et bienveillante.",
      link: "En savoir plus",
      iconClass: imgc,
      to: "/assistance-sur-loutil-canva",
      color: "#00e0ff",
      textColor: "#333"
    }
  ];
  
const Accompagnementsurloutilcanva = () => {
  return (
    <div className="loutil-canva-container">

      {/* HERO SECTION */}
      <section className="loutil-canva-hero">
        <div className="loutil-canva-hero-content">
          <div className="loutil-canva-hero-text">
            <h1>Booster votre <br /> créativité <br /> avec l'outil <br /> CANVA</h1>
            <button className="loutil-canva-btn">C'est parti !</button>
          </div>
          <div className="loutil-canva-hero-image">
            <img src={Abire} alt="Tech GIF" />
          </div>
        </div>
      </section>

      {/* CARDS SECTION */}
      <section className="loutil-canva-cards">
        <div className="loutil-canva-card">
          <div className="loutil-canva-icon">💡</div>
          <h3>Coachings CREATION</h3>
          <p>
            Découvrez nos offres de coaching sur mesure pour votre identité visuelle ou
            pour sublimer votre présence sur les réseaux sociaux.
          </p>
          <Link to="https://calendly.com/agence-kar-ma/rdv-abire-sogoyou">Je réserve ma place</Link>
        </div>

        <div className="loutil-canva-card">
          <div className="loutil-canva-icon">🎓</div>
          <h3>Formation COMPLETE</h3>
          <p>
          Notre programme vous permettra de maîtriser toutes les fonctionnalités de Canva et de créer des designs professionnels en un rien de temps.
          </p>
          <Link to="https://calendly.com/agence-kar-ma/rdv-abire-sogoyou">Je réserve ma place</Link>
        </div>

        <div className="loutil-canva-card">
          <div className="loutil-canva-icon">🧑‍💻</div>
          <h3>Assistance Canva</h3>
          <p>
          Ne soyez plus jamais seul face à vos créations visuelles ! Un expert en ligne est là pour vous aider à répondre à toutes vos questions et améliorer vos visuels en un rien de temps.
          </p>
          <Link to="https://calendly.com/agence-kar-ma/rdv-abire-sogoyou">Je réserve ma place</Link>
        </div>
      </section>


      <div className="parallax-QuiSommeNous">
            <div className="QuiSommeNous-title" style={{textAlign: 'start', lineHeight: '1.2rem', maxWidth: '880px'}}>
                <h4 style={{color: '#10708d'}}>Donner vie à toutes vos idées créatives et démarquez-vous de la concurrence !</h4>
                <p>Profitez de l’expertise de nos coachs et donnez vie à votre image de marque dès maintenant.</p>
                <p>Nos offres de coaching et formation pour Canva sont là pour vous aider à améliorer vos compétences en design et à créer des visuels professionnels en un rien de temps.</p>
                <br />
                <p>Que vous soyez débutant ou expérimenté, nous avons une solution adaptée à vos besoins : coaching pour créer votre identité visuelle, création de visuels sur-mesure, formation complète sur l’outil Canva… Tout est possible avec notre d’experte passionnée par le design.</p>
                <h4  style={{color: '#10708d'}}>Alors, prêt à voler de vos propres ailes et à faire décoller votre créativité ?</h4>
            </div>
        </div>



      {/* BLUR BACKGROUND INFO SECTION */}
      <section className="loutil-canva-blurbg">
        <div className="loutil-canva-info">
          <h2>Transformez vos idées en réalité !</h2>
          <div className="loutil-canva-info-text">
            <h3>Une Consultante experte en ligne</h3>
            <p>
              Avec notre offre d’assistance Canva, ne soyez plus jamais seul face à vos créations visuelles !
            </p>
            <p>
              Je serai à votre disposition, en ligne, pour vous aider à répondre à toutes vos questions et améliorer vos visuels en un rien de temps.
            </p>

            <h3>7/7 Assistance Online</h3>
            <p>Qu’il s’agisse de retouches, de conseils ou de modifications,</p>
            <p>
              notre équipe est à votre disposition pour vous permettre de donner vie à toutes vos idées. Simplifiez votre expérience de
            </p>
            <p>
              création avec notre offre assistance Canva et concentrez-vous sur l’essentiel : votre vision créative.
            </p>
          </div>
          <Link className="loutil-canva-btn" to="/assistance-sur-loutil-canva" style={{maxWidth: '250px', textAlign: 'center', textDecoration: 'none'}}>Je veux en savoir plus</Link>
        </div>

        <div className="loutil-canva-bg-radius">
          <img src={profile} alt="Background visuel" />
        </div>
       
      </section>
      


      

      <section className="formules-section">
      <h2>Nos formules coaching et formation :</h2>
      <div className="formules-grid">
        {formules.map((item, index) => (
          <div key={index} className="formule-card" style={{ backgroundColor: item.color, color: item.textColor || '#000' }}>
            {/* <i className={`formule-icon ${item.iconClass}`}></i> */}
            <img style={{maxWidth: '80px'}} src={item.iconClass} alt="" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div style={{lineHeight: '1', marginLeft: '20px', color: '#000'}}>
                <p>{item.sousdescription}</p>
                <p>{item.sousdescription1}</p>
                <p>{item.sousdescription2}</p>
                <p>{item.sousdescription3}</p>
            </div>
            <p>{item.description2}</p>
            {item.priceNew && (
              <p className="price">
                <span className="new">{item.priceNew} – </span>
                {item.priceOld && <span className="old" style={{textDecoration: 'line-through'}}>{item.priceOld}</span>}
              </p>
            )}
            {item.detail && <p className="detail">{item.detail}</p>}
             <Link to={item.to} className="link">{item.link}</Link>
          </div>
        ))}
      </div>
    </section>


      {/* TÉMOIGNAGES SECTION */}
      <section className="loutil-canva-temoignages">
        <h1 className="loutil-canva-section-title">Rejoignez la communauté des créateurs Canva !</h1>
        <div className="loutil-canva-createur-cards">

          {/* CARD 1 */}
          <div className="loutil-canva-card-createur">
            <div className="loutil-canva-icon"><i class="fas fa-quote-left"></i></div>
            <p>
              Abiré m’étonne par sa créativité, elle n’est jamais à court d’idées ! Un réel plaisir d’être coaché par elle.
            </p>
            <div className="loutil-canva-profile">
              <img className="loutil-canva-profile-img" src={jade} alt="Profil Jade F." />
              <div>
                <h4>Jade F.</h4>
                <i>★★★★★</i>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="loutil-canva-card-createur">
            <div className="loutil-canva-icon"><i class="fas fa-quote-left"></i></div>
            <p>
              Je n’ai pas beaucoup de temps et avoir ce service d’assistance m’a beaucoup aidé pour peaufiner des créations et surtout lorsque j’avais des questions pratico-pratique sur Canva.
            </p>
            <div className="loutil-canva-profile">
              <img className="loutil-canva-profile-img" src={ilyes} alt="Profil Jade F." />
              <div>
                <h4>Ilyes O.</h4>
                <i>★★★★★</i>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="loutil-canva-card-createur">
            <div className="loutil-canva-icon"><i class="fas fa-quote-left"></i></div>
            <p>
              Très fière d’avoir créé mes premiers visuels sur Canva avec l’accompagnement de l’agence Kar’Ma. Je ne pensais pas qu’on pouvait faire autant de choses !
            </p>
            <div className="loutil-canva-profile">
              <img className="loutil-canva-profile-img" src={julia} alt="Profil Jade F." />
              <div>
                <h4>Julia C.</h4>
                <i>★★★★★</i>
              </div>
            </div>
          </div>

        </div>
      </section>


    </div>
  );
};

export default Accompagnementsurloutilcanva;

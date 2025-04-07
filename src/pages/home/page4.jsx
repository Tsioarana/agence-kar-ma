import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./page4.css";

const slides = [
  {
    title: "AUDACE MAGAZINE",
    text: "Le magazine digital qui met en avant des entrepreneurs inspirants et audacieux.",
    buttonText: "En savoir plus !",
    link: "/audace-magazine",
  },
  {
    title: "Booster votre créativité et votre impact visuel",
    text: "Avec nos programmes personnalisés et nos conseils d'experts, vous pourrez créer des designs professionnels en un rien de temps !",
    buttonText: "C'est parti !",
    link: "/accompagnement-sur-loutil-canva",
  },
  {
    title: "N°1 de la veille des opérations Brand Content",
    text: "Grâce à cette newsletter, vous pourrez facilement identifier les opportunités qui s'offrent à vous et ainsi, faire gagner un temps précieux à vos équipes commerciales.",
    buttonText: "Inscrivez-vous !",
    link: "/newsletters-veille-ops",
  },
  {
    title: "Calendrier Social Média 2025",
    text: "En panne d'idées pour vos publications ? Ce calendrier deviendra un véritable allié pour votre stratégie Social Media!",
    buttonText: "Je télécharge maintenant",
    link: "/liens-utiles/calendrier-social-media-2025/",
  },
  {
    title: "Ne manquez pas les dernières tendances",
    text: "Restez informé des dernières tendances et des campagnes digitales réussies de vos concurrents pour saisir des opportunités commerciales !",
    buttonText: "Je souscris",
    link: "/newsletters-veille-ops",
  },
];

const Page4 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 80000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <div className="carousel-container">
        <div
          className="carousel"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.5s ease",
          }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="slide reveal-top">
              <h2>{slide.title}</h2>
              <p>{slide.text}</p>
              <Link to={slide.link} className="download-btn">
                {slide.buttonText}
              </Link>
            </div>
          ))}
        </div>
        <div className="nav-buttons">
          <button className="prev" onClick={prevSlide}>
            &#8592;
          </button>
          <button className="next" onClick={nextSlide}>
            &#8594;
          </button>
        </div>
        <div className="pagination">
          {slides.map((_, index) => (
            <span
              key={index}
              className={currentIndex === index ? "active" : ""}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>

      <div className="parallax-services">
        <div className="content-parallax">
          <div className="nos_services">
            <svg width="100%" height="100%">
              <text x="50%" y="60%" text-anchor="middle" className="reveal-bottom">
                NOS SERVICES
              </text>
            </svg>
            <p className="reveal-right">
              Vous êtes à la recherche d’un accompagnement complet et personnalisé pour votre projet
              communication ? Faites confiance à notre équipe expérimentée, forte de 10 ans d’expertise
              dans ce domaine.
            </p>
            <p className="bold fade-in">Ici, tout est pensé pour répondre à vos besoins spécifiques.</p>
            <p className="reveal-right">
              Que vous souhaitiez élaborer une <b>stratégie de communication sur-mesure,</b> mettre en place
              une <b>campagne publicitaire efficace</b> ou <b>optimiser votre présence en ligne,</b> notre équipe
              est là pour vous aider à atteindre vos objectifs.
            </p>
            <br />
            <p className="reveal-right">
              Nous travaillons en étroite collaboration avec vous pour comprendre <b>vos besoins et vos enjeux,</b>{" "}
              et pour vous proposer des <b>solutions innovantes</b> et adaptées à votre entreprise.
            </p>
            <br />
            <br />
            <p className="cta reveal-right">Rejoignez les nombreux clients qui nous font confiance.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page4;

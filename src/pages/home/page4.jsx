import React, { useEffect, useState } from 'react';
import './page4.css';

const slides = [
  {
    title: "AUDACE MAGAZINE",
    text: "Le magazine digital qui met en avant des entrepreneurs inspirants et audacieux.",
    buttonText: "En savoir plus !"
  },
  {
    title: "Booster votre créativité et votre impact visuel",
    text: "Avec nos programmes personnalisés et nos conseils d'experts, vous pourrez créer des designs professionnels en un rien de temps !",
    buttonText: "C'est parti !"
  },
  {
    title: "N°1 de la veille des opérations Brand Content",
    text: "Grâce à cette newsletter, vous pourrez facilement identifier les opportunités qui s'offrent à vous et ainsi, faire gagner un temps précieux à vos équipes commerciales.",
    buttonText: "Inscrivez-vous !"
  },
  {
    title: "Calendrier Social Média 2025",
    text: "En panne d'idées pour vos publications ? Ce calendrier deviendra un véritable allié pour votre stratégie Social Media!",
    buttonText: "Je télécharge maintenant"
  },
  {
    title: "Ne manquez pas les dernières tendances",
    text: "Restez informé des dernières tendances et des campagnes digitales réussies de vos concurrents pour saisir des opportunités commerciales !",
    buttonText: "Je souscris"
  }
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
        <div className="carousel" style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: 'transform 0.5s ease' }}>
          {slides.map((slide, index) => (
            <div key={index} className="slide reveal-top">
              <h2>{slide.title}</h2>
              <p>{slide.text}</p>
              <button className="download-btn">{slide.buttonText}</button>
            </div>
          ))}
        </div>
        <div className="nav-buttons">
          <button className="prev" onClick={prevSlide}>&#8592;</button>
          <button className="next" onClick={nextSlide}>&#8594;</button>
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
              <text x="50%" y="60%"  text-anchor="middle" className='reveal-bottom' >
              NOS SERVICES
              </text>
            </svg>
            <p className='reveal-right'>
              Vous êtes à la recherche d’un accompagnement complet et personnalisé pour votre 
              {/* <br /> */}
              projet communication ? Faites confiance à notre équipe expérimentée, forte de 10 ans 
              {/* <br /> */}
              d’expertise dans ce domaine.
            </p>
            <p className="bold fade-in">
              Ici, tout est pensé pour répondre à vos besoins spécifiques.
            </p>
            <p className='reveal-left'>
              Que vous souhaitiez élaborer une <b>stratégie de communication sur-mesure,</b> mettre en
               {/* <br /> */}
              place une <b>campagne publicitaire efficace</b> ou <b>optimiser votre présence en ligne,</b> notre
               {/* <br /> */}
              équipe est là pour vous aider à atteindre vos objectifs.
            </p>
            <br />
            <p className='reveal-right'>
              Nous travaillons en étroite collaboration avec vous pour comprendre <b>vos besoins et vos 
                {/* <br /> */}
              enjeux,</b> et pour vous proposer des <b>solutions innovantes</b> et adaptées à votre entreprise.
            </p>
            <br /><br />
            <p className='cta reveal-left'>
              Rejoignez les nombreux clients qui nous font confiance.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page4;

import React, { useEffect, useState } from "react";
import "./page2.css";

const Page2 = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const card = document.querySelector(".card");
      if (card) {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setAnimate(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container-card">
      <h1 className="reveal-left">Donc, vous voulez propulser <br /> votre entreprise ?</h1>
      <h2 className="reveal-left">L’agence qui valorise vos idées.</h2>
      <p className="subtitle reveal-left">
        Nous avons développé <strong>cinq axes</strong> pour vous offrir un <br />
        <strong>accompagnement complet et personnalisé :</strong>
      </p>

      <div className="card">
        <div className={`card-light ${animate ? "animate" : ""}`}>
          <p className="fade-in">
            <strong>La création d’une stratégie de communication <br /> sur-mesure</strong> en fonction de vos enjeux et de vos besoins spécifiques
          </p>
        </div>
        <div className={`card-dark ${animate ? "animate" : ""}`}>
          <p className="fade-in">
            La création et l’accompagnement de <strong>campagnes publicitaires Brand Content</strong> pour les annonceurs, les agences et les régies publicitaires
          </p>
        </div>
        <div className={`card-light ${animate ? "animate" : ""}`}>
          <p className="fade-in">
            <strong>Le développement web</strong> (site vitrine, e-commerce, blog, refonte de site etc.) pour faire rayonner votre entreprise sur la toile
          </p>
        </div>
        <div className={`card-dark ${animate ? "animate" : ""}`}>
          <p className="fade-in">
            <strong>La création graphique</strong> pour sublimer votre identité
          </p>
        </div>
        <div className={`card-light ${animate ? "animate" : ""}`}>
          <p className="fade-in">
            <strong>Les réseaux sociaux et l’influence</strong> pour être là où vos clients vous attendent
          </p>
        </div>
        <div className={`card-dark ${animate ? "animate" : ""}`}>
          <p className="fade-in">
            <strong>La formation et coaching</strong> pour partager et développer vos compétences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page2;

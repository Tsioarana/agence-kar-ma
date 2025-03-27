import React from 'react';
import './page3.css';
import { img13, karma, karma_flech } from '../../assets';


const Page3 = () => {
  
  return (
    <div>
        <div className="hero-container">
            <div className="hero-info">
              <p className='reveal-right'>L’agence est fière de sa <strong>charte de responsabilité</strong> <br /> et des dons qu’elle verse chaque année à ses <br />associations partenaires.</p>
              <p className='reveal-right'>Nous avons choisis de placer <strong>l’éthique et la <br /> durabilité</strong> au cœur de nos actions.</p>
              <h2 className='reveal-right'>Une démarche solidaire et pleine de <br /> valeur – Engagez-vous avec nous !</h2>
              <h2 className='reveal-right'>Faites une bonne action tout <br /> en bénéficiant d’un service de <br /> qualité.</h2>
              <a href="#" className="btn reveal-right">CONTACTEZ-NOUS !</a>
            </div>
            <div className='hero-images'>
              <img src={img13} alt="" className='reveal-bottom' />
            </div>
        </div>

        <section className="karma-services">
          <div className="container-services reveal-top">
              <div className="logo-karma-services ">
                <img src={karma_flech} alt="" className="logo-flech" />
                <img src={karma} alt="" className="logo-simple" />
              </div>
              
              <div id="marketing" className="element">Marketing Digital</div>
              <div id="formation" className="element">Formation</div>
              <div id="communication" className="element">Communication</div>
              <div id="strategie" className="element">Stratégie</div>
              <div id="brand" className="element">Brand Content</div>
          </div>
    </section>
    </div>
  );
};

export default Page3;

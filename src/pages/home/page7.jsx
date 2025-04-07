import React from 'react';
import './page7.css';

const Page7 = () => {
  return (
    <div className="container-line-time">
      <h1>Pourquoi choisir l'agence Kar'Ma ?</h1>
      <ul>
        <li style={{ '--accent-color': '#00a8a8' }} className='reveal-right'>
          <div className="numero">01</div>
          <div className="title">Agence éthique et responable</div>
          <div className="descr">
          Nous versons une partie de notre CA auprès de nos associations partenaires. De plus, nous avons établi une « Charte de responsabilité » sur laquelle nous nous engageons et invitons nos clients à la suivre.
          </div>
        </li>
        <li style={{ '--accent-color': '#0c6980' }} className='reveal-top'>
          <div className="numero">02</div>
          <div className="title">Budget engagé & respecté</div>
          <div className="descr">
          Nous tarifs sont compétitifs et chaque budget permettra de soutenir les associations partenaires de l’agence. Nos propositions sont claires et détaillées. Pas de frais cachés.
          </div>
        </li>
        <li style={{ '--accent-color': '#00a8a8' }} className='reveal-right'>
          <div className="numero">03</div>
          <div className="title">Gain de temps</div>
          <div className="descr">
          Votre temps est précieux ! Nous vous répondrons dans la journée. Nos délais de réalisation sont optimisés et respectés, et vos projets sont toujours livrés à temps.
          </div>
        </li>
        <li style={{ '--accent-color': '#0c6980' }} className='reveal-top'>
          <div className="numero">04</div>
          <div className="title">Accompagnement personnalisé</div>
          <div className="descr">
          Vous êtes conseillés et accompagnés par un expert métier, unique et dédié à votre projet.
          </div>
        </li>
        <li style={{ '--accent-color': '#00a8a8' }} className='reveal-right'>
          <div className="numero">05</div>
          <div className="title">Des experts à votre écoute</div>
          <div className="descr">
          Kar'Ma est une entreprise à taille humaine qui sollicite des freelances lorsque c'est nécessaire, afin de vous apporter les meilleurs conseils.
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Page7;

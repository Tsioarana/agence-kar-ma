import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';  // Importation du fichier CSS de Swiper
import './page8.css';
import { img13, logo1, logo10, logo11, logo12, logo13, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9 } from '../../assets';  // Assurez-vous que le chemin de l'image est correct
import { Link } from 'react-router-dom';

const Page8 = () => {
  return (
    <>
      {/* Section Banner */}
      <section className="banner-boutique">
        <div className="text-container fade-in">
          <h2>BOUTIQUE RESPONSABLE</h2>
          <p>Notre collection de produits <br /> responsables en édition limitée, <br /> vous attend.</p>
          <Link style={{padding: '10px', border: '3px solid #0c6980', borderRadius: '5px', color: '#fff', fontWeight: 'bold',}} to="/boutique-responsable" className="btn">
            JE DÉCOUVRE
          </Link>
        </div>
      </section>

      {/* Section Logo Carousel */}
      <div className="logo-carousel">
        <h2>Ils nous font confiance</h2>
        <Swiper
          slidesPerView={4}  // Affiche 4 slides à la fois
          spaceBetween={30}  // Espacement entre les slides
          loop={true}        // Active la boucle
          autoplay={{
            delay: 2000,      // Délai entre les slides
            disableOnInteraction: false,  // Maintient l'autoplay même après l'interaction
          }}
        >
          <SwiperSlide><img src={logo1} alt="Logo 1" /></SwiperSlide>
          <SwiperSlide><img src={logo2} alt="Logo 2" /></SwiperSlide>
          <SwiperSlide><img src={logo3} alt="Logo 3" /></SwiperSlide>
          <SwiperSlide><img src={logo4} alt="Logo 4" /></SwiperSlide>
          <SwiperSlide><img src={logo5} alt="Logo 5" /></SwiperSlide>
          <SwiperSlide><img src={logo6} alt="Logo 6" /></SwiperSlide>
          <SwiperSlide><img src={logo7} alt="Logo 7" /></SwiperSlide>
          <SwiperSlide><img src={logo8} alt="Logo 8" /></SwiperSlide>
          <SwiperSlide><img src={logo9} alt="Logo 9" /></SwiperSlide>
          <SwiperSlide><img src={logo10} alt="Logo 10" /></SwiperSlide>
          <SwiperSlide><img src={logo11} alt="Logo 11" /></SwiperSlide>
          <SwiperSlide><img src={logo12} alt="Logo 12" /></SwiperSlide>
          <SwiperSlide><img src={logo13} alt="Logo 13" /></SwiperSlide>
          {/* Ajoutez d'autres slides selon vos besoins */}
          <div className="swiper-pagination"></div>
        </Swiper>
        
      </div>

      
  <section className="conviction-parallax">
    <div className="conviction-quote">
      "Cela semble toujours impossible, jusqu'à ce qu'on le fasse."
      <strong>— Nelson Mandela</strong>
    </div>
    <div className="conviction-content">
      <h2>Nos convictions</h2>
      <p><span className="conviction-highlight">Kar'Ma est plus qu’une agence :</span> on vit le projet avec vous.</p>
      <p>Nos équipes s’investissent dans tous les projets que vous nous confiez, comme si c’était le nôtre.</p>
      <p>Vos besoins, votre personnalité, votre budget, etc. tout sera pris en compte pour <span className="conviction-highlight">construire ensemble un projet qui vous ressemble</span>.</p>
    </div>
  </section>

      <div style={{backgroundColor: '#0c6980', textAlign: 'center', color: "#ccc", padding: '50px 0' }}>
      <h1>Parlons de votre projet</h1>
      <div className='parlon-projet reveal-right' style={{ display: 'flex', justifyContent: 'center', margin: 0, alignItems: 'center', padding: '50px' }}>
        
        <div className='parlon-proje-container' style={{ width: '90%', maxWidth: '1000px', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <div>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <input type="text" placeholder="Nom Prénom" style={{ flex: 1, padding: '10px', border: '1px solid #ccc', borderRadius: '5px', width: '100%', background: '#0c6980' }} />
                    <input type="email" placeholder="Email" style={{ flex: 1, padding: '10px', border: '1px solid #ccc', borderRadius: '5px', width: '100%', background: '#0c6980' }} />
                </div>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '10px' }}>
                    <input type="tel" placeholder="Téléphone" style={{ flex: 1, padding: '10px', border: '1px solid #ccc', borderRadius: '5px', width: '100%', background: '#0c6980' }} />
                    <input type="text" placeholder="Société" style={{ flex: 1, padding: '10px', border: '1px solid #ccc', borderRadius: '5px', width: '100%', background: '#0c6980' }} />
                </div>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '10px' }}>
                    <input type="text" placeholder="Budget" style={{ flex: 1, padding: '10px', border: '1px solid #ccc', borderRadius: '5px', width: '100%', background: '#0c6980' }} />
                    <input type="file" style={{ flex: 1, padding: '10px', border: '1px solid #ccc', borderRadius: '5px', width: '100%', background: '#0c6980' }} />
                </div>
                <textarea placeholder="Message" style={{ width: '100%', height: '100px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', marginTop: '10px', background: '#0c6980' }}></textarea>
                <div style={{ marginTop: '10px' }}>
                    <label style={{ display: 'flex', alignItems: 'center', color: '#ccc' }}>
                        <input type="checkbox" style={{ marginRight: '5px' }} /> Je souhaite m'inscrire à la newsletter pour recevoir les actualités de l'agence
                    </label>
                </div>
                <div style={{ marginTop: '10px' }}>
                    <label style={{ display: 'flex', alignItems: 'center', color: '#ccc' }}>
                        <input type="checkbox" required style={{ marginRight: '5px'}} /> En cochant cette case, j’affirme avoir pris connaissance de la politique de confidentialité
                    </label>
                </div>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <a href="#" style={{ display: 'inline-block', background: '#0896A0FF', color: '#fff', padding: '10px 20px', borderRadius: '5px', fontSize: '18px', fontWeight: 'bold', textDecoration: 'none' }}>Envoyer</a>
                </div>
            </div>
        </div>
    </div>
      </div>
      
    </>
  );
};

export default Page8;

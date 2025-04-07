import React from "react";
import "./css/Contact.css";
import Header from "../components/Header";

const Contact = () => {

  return (
    <div>
      <Header />

      <div className="OffresPrestation-info">
        <h3 style={{marginBottom: '0', color: '#fff'}}>Une question ? Un projet ? Une idée ?</h3>
        <p style={{fontSize: '2.5rem', fontWeight: '100'}}>Ou juste nous faire un petit coucou…</p>
        <h2 style={{color: '#fff', fontSize: '2rem', fontWeight: 'bold'}}>Contactez-nous, on vous répond dans l’heure !</h2>
      </div>

      <div style={{textAlign: 'center', marginTop: '50px', lineHeight: '1.3rem', color: '#333333c0', fontFamily: 'Montserrat-regular'}}>
        <p>Notre objectif :</p>
        <p>Vous faire <strong>gagner du temps et de l’argent,</strong> tout en vous apportant un travail de qualité.</p>
        <p>Nos atouts : <strong>Flexibilité, réactivité, créativité et force de proposition.</strong></p>
        <p>Tous vos projets seront gérés comme si c’était les nôtres.</p>
        <p>Kar’Ma est une entreprise à <strong>taille humaine</strong> prête à vous chouchouter.</p>
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
        <div className="OffresPrestation-screen-body-item" style={{padding: '30px 0'}}>
          <div className="OffresPrestation-app-form">
            <div className="OffresPrestation-app-form-row" style={{display: 'flex', gap: '10px'}}>
              <div className="OffresPrestation-app-form-group" style={{flex: '1'}}>
                <input type="text" className="OffresPrestation-app-form-control" placeholder="Nom Prénom" style={{width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px'}} />
              </div>
              <div className="OffresPrestation-app-form-group" style={{flex: '1'}}>
                <input type="email" className="OffresPrestation-app-form-control" placeholder="Email" style={{width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px'}} />
              </div>
            </div>
            <div className="OffresPrestation-app-form-row" style={{display: 'flex', gap: '10px'}}>
              <div className="OffresPrestation-app-form-group" style={{flex: '1'}}>
                <input type="tel" className="OffresPrestation-app-form-control" placeholder="Téléphone" style={{width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px'}} />
              </div>
              <div className="OffresPrestation-app-form-group" style={{flex: '1'}}>
                <input type="text" className="OffresPrestation-app-form-control" placeholder="Société" style={{width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px'}} />
              </div>
            </div>
            <div className="OffresPrestation-app-form-row" style={{display: 'flex', gap: '10px'}}>
              <div className="OffresPrestation-app-form-group" style={{flex: '1'}}>
                <input type="text" className="OffresPrestation-app-form-control" placeholder="Budget" style={{width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px'}} />
              </div>
              <div className="OffresPrestation-app-form-group" style={{flex: '1'}}>
                <input type="file" className="OffresPrestation-app-form-control" style={{width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px'}} />
              </div>
            </div>
            <div className="OffresPrestation-app-form-group message" style={{marginTop: '10px'}}>
              <textarea className="OffresPrestation-app-form-control" placeholder="Message" style={{width: '100%', height: '100px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px'}}></textarea>
            </div>
            <div className="OffresPrestation-app-form-group checkbox" style={{textAlign: 'start', marginTop: '10px'}}>
              <label>
                <input type="checkbox" style={{marginRight: '5px'}} /> Je souhaite m'inscrire à la newsletter pour recevoir les actualités de l'agence
              </label>
            </div>
            <div className="OffresPrestation-app-form-group checkbox" style={{textAlign: 'start', marginTop: '10px'}}>
              <label>
                <input type="checkbox" required style={{marginRight: '5px'}} /> En cochant cette case, j’affirme avoir pris connaissance de la politique de confidentialité
              </label>
            </div>
            <div className="OffresPrestation-app-form-group buttons" style={{textAlign: 'center', marginTop: '20px'}}>
              <a href="#" className="btn" style={{display: 'inline-block', background: '#0c6980', color: '#fff', padding: '10px 20px', borderRadius: '5px', fontSize: '18px', fontWeight: 'bold', textDecoration: 'none'}}>Envoyer</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Contact;

import React, { useState } from "react";
import Header from "../components/Header";
import "./css/Boutique-responsable.css";
import { Link } from "react-router-dom";
import { boutique, boutique2, boutique3, boutique4, boutique5, boutique6 } from "../assets";

const BoutiqueResponsable = () => {

  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setAdded(true);
    }, 5000); // 5 seconds
  };

  return (
    <div>
        <Header />
        <div className="OffresPrestation-info">
            <h3>Procurez-vous nos produits responsable en édition limitée !</h3>
            <p>Nous devons tous être des entreprises responsable (RSE) : utiliser des technologies propres, mesures son impact sur l’environnement, favoriser la diversité, fabriquer des produits et des services verts, favoriser l’emploi, lutter contre la corruption… tout en étant économiquement viable.</p>
            <p>Notre agence vous aide à réaliser vos projets marketing et publicitaires (Digital ou Print), en ayant en tête tous les aspects de la RSE.</p>
            <p>Nous avons établi une <Link to="/notre-charte-de-responsabilite" style={{color: '#c36', textDecoration: 'none', fontWeight: 'bold'}}>« Charte de responsabilité »</Link> sur laquelle nous nous engageons.</p>
            <h3 style={{fontSize: '2.5rem'}}>ENGAGEZ-VOUS AVEC NOUS !</h3>
        </div>


        <div className="product-container">
            <div className="product-card">
                <div className="product-image">
                    <img src={boutique} alt="Produit 1" />
                </div>
                <div className="product-details">
                    <h3 className="product-title">Le guide pour booster ton business !</h3>
                    <div className="product-rating">
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    </div>
                    <div className="product-prices">
                    <span className="new-price">47,00€</span>
                    </div>
                    {!added ? (
                      <button className="add-to-cart" onClick={handleClick} disabled={loading}>
                        <span className="cart-icon">&#128722;</span>
                        {loading ? (
                          <span className="loading-text">Ajout en cours...</span>
                        ) : (
                          'Ajouter au panier'
                        )}
                      </button>
                    ) : (
                      <Link to="/panier" className="add-to-cart">
                        <span className="cart-icon">&#128722;</span> Voir panier
                      </Link>
                    )}
                </div>
            </div>
            
            <div className="product-card">
                <div className="product-image">
                    <span className="promo-tag">Promo</span>
                    <img src={boutique2} alt="Produit" />
                </div>
                <div className="product-details">
                    <h3 className="product-title">Formation complète sur Canva</h3>
                    <div className="product-rating">
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    </div>
                    <div className="product-prices">
                    <span className="old-price">720,00€</span> 
                    <span className="new-price">550,00€</span>
                    </div>
                    {!added ? (
                      <button className="add-to-cart" onClick={handleClick} disabled={loading}>
                        <span className="cart-icon">&#128722;</span>
                        {loading ? (
                          <span className="loading-text">Ajout en cours...</span>
                        ) : (
                          'Ajouter au panier'
                        )}
                      </button>
                    ) : (
                      <Link to="/panier" className="add-to-cart">
                        <span className="cart-icon">&#128722;</span> Voir panier
                      </Link>
                    )}
                </div>
            </div>

            <div className="product-card">
                <div className="product-image">
                    <span className="promo-tag">Promo</span>
                    <img src={boutique3} alt="Produit 2" />
                </div>
                <div className="product-details">
                    <h3 className="product-title">Coaching Création Réseaux Sociaux</h3>
                    <div className="product-rating">
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    </div>
                    <div className="product-prices">
                    <span className="old-price">450,00€</span>
                    <span className="new-price">345,00€</span>
                    </div>
                    {!added ? (
                      <button className="add-to-cart" onClick={handleClick} disabled={loading}>
                        <span className="cart-icon">&#128722;</span>
                        {loading ? (
                          <span className="loading-text">Ajout en cours...</span>
                        ) : (
                          'Ajouter au panier'
                        )}
                      </button>
                    ) : (
                      <Link to="/panier" className="add-to-cart">
                        <span className="cart-icon">&#128722;</span> Voir panier
                      </Link>
                    )}
                </div>
            </div>

            <div className="product-card">
                <div className="product-image">
                    <span className="promo-tag">Promo</span>
                    <img src={boutique4} alt="Produit 2" />
                </div>
                <div className="product-details">
                    <h3 className="product-title">Coaching Identité Visuelle sur Canva</h3>
                    <div className="product-rating">
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    </div>
                    <div className="product-prices">
                    <span className="old-price">340,00€</span>
                    <span className="new-price">275,00€</span>
                    </div>
                    {!added ? (
                      <button className="add-to-cart" onClick={handleClick} disabled={loading}>
                        <span className="cart-icon">&#128722;</span>
                        {loading ? (
                          <span className="loading-text">Ajout en cours...</span>
                        ) : (
                          'Ajouter au panier'
                        )}
                      </button>
                    ) : (
                      <Link to="/panier" className="add-to-cart">
                        <span className="cart-icon">&#128722;</span> Voir panier
                      </Link>
                    )}
                </div>
            </div>

            <div className="product-card">
                <div className="product-image">
                    <span className="promo-tag">Promo</span>
                    <img src={boutique5} alt="Produit 2" />
                </div>
                <div className="product-details">
                    <h3 className="product-title">Porte Badge / clef - Édition limitée</h3>
                    <div className="product-rating">
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    </div>
                    <div className="product-prices">
                    <span className="old-price">16,90€</span>
                    <span className="new-price">11,90€</span>
                    </div>
                    {!added ? (
                      <button className="add-to-cart" onClick={handleClick} disabled={loading}>
                        <span className="cart-icon">&#128722;</span>
                        {loading ? (
                          <span className="loading-text">Ajout en cours...</span>
                        ) : (
                          'Ajouter au panier'
                        )}
                      </button>
                    ) : (
                      <Link to="/panier" className="add-to-cart">
                        <span className="cart-icon">&#128722;</span> Voir panier
                      </Link>
                    )}
                </div>
            </div>

            <div className="product-card">
                <div className="product-image">
                    <span className="promo-tag">Promo</span>
                    <img src={boutique6} alt="Produit 2" />
                </div>
                <div className="product-details">
                    <h3 className="product-title">Tote bag - édition limitée</h3>
                    <div className="product-rating">
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    </div>
                    <div className="product-prices">
                    <span className="old-price">$40.00</span>
                    <span className="new-price">19,90€</span>
                    </div>
                    {!added ? (
                      <button className="add-to-cart" onClick={handleClick} disabled={loading}>
                        <span className="cart-icon">&#128722;</span>
                        {loading ? (
                          <span className="loading-text">Ajout en cours...</span>
                        ) : (
                          'Ajouter au panier'
                        )}
                      </button>
                    ) : (
                      <Link to="/panier" className="add-to-cart">
                        <span className="cart-icon">&#128722;</span> Voir panier
                      </Link>
                    )}
                </div>
            </div>

        </div>


        <div className="parallax-QuiSommeNous">
            <div className="QuiSommeNous-title" style={{textAlign: 'start', maxWidth: '880px'}}>
                <h4 className="fade-in">C'est éthique, c'est écologique, collaboratif et vous ferez plaisir en offrant nos produits.</h4>
                <br />
                <p className="fade-in"  style={{ fontSize: '1.1rem'}}>Chaque produit est fabriqué en France, à la main, par une couturière indépendante avec des tissus qu’elle n’utilise plus. En achetant nos produits, vous :</p>
                <div style={{marginLeft: '20px', fontSize: '2rem'}}>
                    <p style={{ fontSize: '1.1rem'}}><span>→</span> contribuez à la planète (produit recyclé)</p>
                    <p style={{ fontSize: '1.1rem'}}><span>→</span> vous faites travailler une indépendante (produits faits à la main, en France)</p>
                    <p style={{ fontSize: '1.1rem'}}><span>→</span> et vous faites un don à nos associations partenaires (1 vente = 1 don).</p>
                </div>
            </div>
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
                    Besoin d'information complémentaire ?</h2>
                  </div>
                  <div className="OffresPrestation-app-form-group">
                    <input className="OffresPrestation-app-form-control" placeholder="Nom Prenom" />
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
    </div>
  );
};

export default BoutiqueResponsable;  // Default export

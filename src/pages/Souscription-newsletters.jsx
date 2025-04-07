
import React from "react";
import "./css/Souscription-newsletters.css";
import { Link } from "react-router-dom";

const Souscription = () => {
  return (
    <div className="souscription-container">
        <h2 className="souscription-title">Faites votre choix !</h2><br />
        <h3 className="souscription-text-start">Sélectionnez ci-dessous, l’option à laquelle vous souhaitez souscrire.</h3>
        <br />
        <h5><strong>Newsletter Essentiel :</strong></h5>
        <p>Chaque semaine, recevez une opération publicitaire Brand Content + une opération avec un influenceur. Vous aurez également les dernières infos que le marché de la publicité.</p>
        <br />
        <h5><strong>Newsletter ACTU OPS :</strong></h5>
        <p>Cette Newsletter, vous offre différentes opérations publicitaires Brand Content sur le digital.</p>
        <p>Chaque semaine, vous recevrez une pige complète des opérations spéciales publicitaires, réalisées sur une 10aine de sites médias en France (la liste des sites est aléatoire et elle varie selon les envois).</p>
        <p><strong>Tarif unique 398€ht (au lieu de 598€ HT) pendant 1 mois (soit 4 Newsletters).</strong></p>
        <p>La veille est faite à la main, sans outil ou techno, afin que vous ayez toutes les informations nécessaires pour avoir plein d’idée et répondre aux briefs de manière sereine.</p>
        
        <div className="souscription-card">
            <table className="souscription-table">
                <thead>
                    <tr>
                        <th>Niveau</th>
                        <th>Montant</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Newsletter L’essentiel – GRATUITE</td>
                        <td>Gratuit</td>
                        <td><Link to="/newsletters/paiement-newsletters/?pmpro_level=3" className="souscription-btn" style={{textDecoration: 'none'}}>
                                Choisir
                            </Link></td>
                    </tr>
                    <tr>
                        <td>Newsletter ACTU OPS</td>
                        <td>398.00€ maintenant</td>
                        <td>
                            <Link to="/newsletters/paiement-newsletter/?pmpro_level=1" className="souscription-btn" style={{textDecoration: 'none'}}>
                                Choisir
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default Souscription;  

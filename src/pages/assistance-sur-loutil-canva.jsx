import React from "react";
import "./css/assistance-sur-loutil-canva.css";

const Assistancesurloutilcanva = () => {


  return (
    <div>
        <div class="canva-container">
            <h1>L'assistance Canva<br />C'est Quoi ?</h1>

            <div class="canva-cards">
            <div class="canva-card">
                <i class="far fa-check-circle"></i>
                <h3>Accès à un expert en ligne</h3>
                <p>Un professionnel vous accompagne dans vos créations et vous fait gagner du temps.</p>
            </div>

            <div class="canva-card">
                <i class="fas fa-pencil-alt"></i>
                <h3>Des retouches professionnelles</h3>
                <p>Un graphiste améliore vos visuels Canva pour un rendu plus impactant et harmonieux.</p>
            </div>

            <div class="canva-card">
                <i class="far fa-edit"></i>
                <h3>Création simplifiée</h3>
                <p>Recevez un retour rapide pour améliorer ou corriger vos visuels et les rendre plus performants.</p>
            </div>

            <div class="canva-card">
                <i class="far fa-comments"></i>
                <h3>Assistance à la demande</h3>
                <p>En fonction de vos besoins, vous êtes accompagné uniquement quand vous le souhaitez.</p>
            </div>

            <div class="canva-card">
                <i class="fas fa-euro-sign"></i>
                <h3>Économie de coûts</h3>
                <p>Un accompagnement à prix mini sans engager un graphiste à plein temps.</p>
            </div>

            <div class="canva-card">
                <i class="far fa-calendar-check"></i>
                <h3>Service personnalisé</h3>
                <p>Des conseils concrets adaptés à vos visuels, vos objectifs et votre identité graphique.</p>
            </div>
            </div>

            <div class="highlight">
            Notre équipe est disponible pour vous aider 6/7 jours pour répondre rapidement à toutes vos demandes.
            </div>

            <p style={{fontSize: '1.5rem'}}>
            Concentrez-vous sur l’essentiel : en laissant notre équipe s’occuper des détails techniques,
            vous pouvez vous concentrer sur votre vision créative et votre stratégie de communication.
            </p>
            

            <div class="highlight">
            Ne soyez plus jamais seul face à vos créations visuelles
            </div>
           
           <div>
            <p><strong>Conditions de l’offre d’assistance Canva :</strong></p>*
            <div style={{marginLeft: '20px'}}>
                <p>1- Nombre de retouches : L’offre comprend un nombre illimité de retouches pour chaque projet de création visuelle.</p>
                <p>2- Jours de l’assistance : L’assistance Canva est disponible 6 jours sur 7, du lundi au vendredi, de 9h à 18h et le samedi de 14h à 17h.</p>
                <p>3- Délais de réponse : Nous nous engageons à répondre à toutes les demandes d’assistance Canva dans un délai maximum de 24 heures ouvrées.</p>
                <p>4- Intégration d’un groupe privé : Les clients ayant souscrit à l’offre d’assistance Canva auront accès à un groupe privé sur lequel ils pourront poser toutes leurs questions et échanger avec d’autres utilisateurs de Canva.</p>
                <p>5- Durée de l’offre : L’offre d’assistance Canva est valable pour une durée minimum de 3 mois à compter de la date d’achat.</p>
                <p>6- Modalités de paiement :  Le paiement s’effectue en une seule fois lors de l’achat de l’offre (signature du devis au préalable)</p>
                <p>7- Annulation et remboursement : Les clients ayant souscrit à l’offre d’assistance Canva ont la possibilité d’annuler leur achat dans un délai de 14 jours à compter de la date d’achat et de demander un remboursement intégral. Au-delà de ce délai, aucun remboursement ne sera possible.</p>
            </div>
            <p>Nous nous engageons à fournir une assistance de qualité à nos clients afin de les accompagner dans la réalisation de leurs projets créatifs sur Canva. En souscrivant à cette offre, vous bénéficierez d’une expertise professionnelle pour améliorer vos visuels et donner vie à toutes vos idées.</p>
           </div>

            <div class="canva-pricing">
            <div class="canva-card">
                <h4>3 MOIS</h4>
                <p>Un visuel / semaine</p>
                <p>Conseils et retouches</p>
                <p style={{color: '#1B1B1BFF', fontWeight: 'bold', fontSize: '1.5rem'}}>120€ ht</p>
            </div>
            <div class="canva-card">
                <h4>6 MOIS</h4>
                <p>Un visuel / semaine</p>
                <p>Conseils et retouches</p>
                <p  style={{color: '#1B1B1BFF', fontWeight: 'bold', fontSize: '1.5rem'}}>210€ ht</p>
            </div>
            <div class="canva-card">
                <h4>9 MOIS</h4>
                <p>Un visuel / semaine</p>
                <p>Conseils et retouches</p>
                <p  style={{color: '#1B1B1BFF', fontWeight: 'bold', fontSize: '1.5rem'}}>270€ ht</p>
            </div>
            <div class="canva-card">
                <h4>1 AN</h4>
                <p>Un visuel / semaine</p>
                <p>Conseils et retouches</p>
                <p  style={{color: '#1B1B1BFF', fontWeight: 'bold', fontSize: '1.5rem'}}>240€ ht</p>
            </div>
            </div>

            <div style={{textAlign: 'center'}}>
            <a href="#" class="btn">Je signe où ? 😊</a>
            </div>
        </div>
    </div>
  );
};

export default Assistancesurloutilcanva; 

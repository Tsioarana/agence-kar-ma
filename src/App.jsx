import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Offres_prestations from "./pages/offre-prestation";
import Qui_sommes_nous from "./pages/qui-sommes-nous-2";
import Newsletters from "./pages/Newsletters-veille-ops";
import AudaceMagazine from "./pages/Audace-magazine";
import Souscription from "./pages/Souscription-newsletters";
import BoutiqueResponsable from "./pages/Boutique-responsable";
import Blogkarmarketing from "./pages/Blog-karmarketing";
import Charteresponsabilite from "./pages/Charte-de-responsabilite";
import Associationspartenaires from "./pages/Associations-partenaires";
import Graphismelogo from "./pages/Graphisme-design-logo";
import Strategiecommunicationmarketing from "./pages/strategie-communication-marketing";
import Productionops from "./pages/Production-ops";
import SocialMediaCommunityManager from "./pages/social-media-community-manager";
import CoachingCommuniCationmarketing from "./pages/coaching-communication-marketing";
import Cgv from "./pages/cgv";
import Siteweb from "./pages/Site-web-performant";
import AudaceUser from "./pages/AudaceUser";
import Contact from "./pages/Contact";
import NotFound from './components/NotFound';
import './index.css';
import ColitiqueConfidentialite from "./pages/politique-de-confidentialite";
import CharteETresponsabilite from "./pages/charte-et-responsabilite";
import Mentionslegales from "./pages/mentions-legales";
import Cart from "./pages/Panier";
import FormulaireInscription from "./pages/paiement-newsletter";
import FormulaireInscriptionG from "./pages/paiement-newsletter-gratuit";
import CalendrierSocialMedia from "./pages/calendrier-social-media";
import Assistancesurloutilcanva from "./pages/assistance-sur-loutil-canva";
import Accompagnementsurloutilcanva from "./pages/accompagnement-sur-loutil-canva";

const App = () => {
  const [loading, setLoading] = useState(true);

  const revealElements = () => {
    const elements = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-top, .reveal-bottom, .fade-in');
    const windowHeight = window.innerHeight;

    elements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop <= windowHeight * 0.8) {
        el.classList.add('reveal-visible');
        if (el.classList.contains("fade-in")) {
          el.classList.add("fade-in-visible");
        }
      } else {
        el.classList.remove('reveal-visible');
        el.classList.remove("fade-in-visible");
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', revealElements);
    revealElements(); 

    return () => {
      window.removeEventListener('scroll', revealElements);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return loading ? (
    <div className="loader">
      <img src="https://media.tenor.com/hlKEXPvlX48AAAAC/loading-loader.gif" alt="Loading" />
    </div>
  ) : (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offres-et-prestations" element={<Offres_prestations />} />
        <Route path="/qui-sommes-nous-2" element={<Qui_sommes_nous />} />
        <Route path="/audace-magazine" element={<AudaceMagazine />} />
        <Route path="/newsletters/souscription-newsletters" element={<Souscription />} />
        <Route path="/boutique-responsable" element={<BoutiqueResponsable />} />
        <Route path="/le-blog-karmarketing" element={<Blogkarmarketing />} />
        <Route path="/le-blog-karmarketing/:id?" element={<Blogkarmarketing />} />
        <Route path="/notre-charte-de-responsabilite" element={<Charteresponsabilite />} />
        <Route path="/associations-partenaires" element={<Associationspartenaires />} />
        <Route path="/strategie-communication-marketing" element={<Strategiecommunicationmarketing />} />
        <Route path="/graphisme-design-logo" element={<Graphismelogo />} />
        <Route path="/social-media-community-manager" element={<SocialMediaCommunityManager />} />
        <Route path="/coaching-communication-marketing" element={<CoachingCommuniCationmarketing />} />
        <Route path="/site-web-performant" element={<Siteweb />} />
        <Route path="/panier" element={<Cart />} />
        <Route path="/production-ops" element={<Productionops />} />
        <Route path="/newsletters-veille-ops" element={<Newsletters />} />
        <Route path="/politique-de-confidentialite" element={<ColitiqueConfidentialite />} />
        <Route path="/charte-de-responsabilite" element={<CharteETresponsabilite />} />
        <Route path="/mentions-legales" element={<Mentionslegales />} />
        <Route path="/newsletters/paiement-newsletter/" element={<FormulaireInscription />} />
        <Route path="/newsletters/paiement-newsletters/" element={<FormulaireInscriptionG />} />
        <Route path="/cgv" element={<Cgv />} />
        <Route path="/liens-utiles/calendrier-social-media-2025/" element={<CalendrierSocialMedia />} />
        <Route path="/Apropos" element={<About />} />
        <Route path="/assistance-sur-loutil-canva" element={<Assistancesurloutilcanva />} />
        <Route path="/accompagnement-sur-loutil-canva" element={<Accompagnementsurloutilcanva />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/audace-magazine/:year/:id/:name" element={<AudaceUser />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

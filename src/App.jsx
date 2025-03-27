import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from './components/NotFound';
import './index.css';

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
        <Route path="/Apropos" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

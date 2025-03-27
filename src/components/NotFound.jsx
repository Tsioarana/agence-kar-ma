// src/components/NotFound.js
import React from 'react';
import './NotFound.css'; // Assure-toi de lier le fichier CSS

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">Page not found</p>
      <a href="/" className="back-home">Retourner à la page d'accueil</a>
    </div>
  );
};

export default NotFound;

import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [fileName, setFileName] = useState("Aucun fichier choisi");

  const handleFileChange = (e) => {
    setFileName(e.target.files[0] ? e.target.files[0].name : "Aucun fichier choisi");
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2 className="contact-title">Parlons de votre projet</h2>
      </div>

      <form className="contact-form">
        <div className="form-row">
          <input type="text" placeholder="Nom" required />
          <input type="email" placeholder="Email" required />
        </div>

        <div className="form-row">
          <input type="tel" placeholder="Téléphone" required />
          <input type="text" placeholder="Société" />
        </div>

        <div className="form-row">
          <input type="text" placeholder="Budget (€)" required />
          <label className="file-input">
            <input type="file" onChange={handleFileChange} />
            <span>{fileName}</span>
          </label>
        </div>

        <div className="form-row full-width">
          <textarea placeholder="Votre message" required></textarea>
        </div>

        <button type="submit" className="send-btn">Envoyer</button>
      </form>
    </div>
  );
};

export default Contact;

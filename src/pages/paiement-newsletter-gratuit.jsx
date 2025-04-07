import React, { useState } from "react";
import "./css/Form.css"; // Assurez-vous d'ajouter les bonnes règles CSS pour le style.

const FormulaireInscriptionG = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    confirmEmail: "",
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    country: "United States",
    phone: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
    discountCode: ""
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePasswordVisibility = (field) => {
    if (field === "password") {
      setPasswordVisible(!passwordVisible);
    } else if (field === "confirmPassword") {
      setConfirmPasswordVisible(!confirmPasswordVisible);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
  };


  const [showCodeForm, setShowCodeForm] = useState(false);

  const toggleCodeForm = (e) => {
    e.preventDefault();
    setShowCodeForm(true);
  };
  return (
    <div className="form-container">
      <div style={{border: '3px solid #0c6980', padding: '10px', borderRadius: '5px'}}>
        <h2>Inscrivez-vous !</h2>
        <h4>Membership Information</h4>
        <p>You have selected the <strong>Newsletter L'essentiel – GRATUITE</strong> membership level. Restez au courant des dernières opérations spéciales digitales, en recevant notre Newsletter « L’essentiel ». Dans cette newsletter, vous recevrez chaque semaine une opération spéciale digitale + un outil adtech + des informations clés sur le marché du digital. <strong> Notre objectif : inspirer vos commerciaux, soulager les équipes (projets et sales) et vous aider à développer votre créativité et ainsi augmenter votre chiffre d’affaires.</strong></p>
        <p>Le coût de l’adhésion est de <strong>0.00€..</strong></p>

        {/* Ce paragraphe disparaît quand showCodeForm est true */}
      <p className={`code ${showCodeForm ? "hidden" : ""}`}>
        Avez-vous un code de réduction ?{" "}
        <a href="#" onClick={toggleCodeForm}>
          Cliquez ici pour entrer votre code de réduction
        </a>
      </p>

      {/* Ce bloc s'affiche uniquement si showCodeForm est true */}
      {showCodeForm && (
        <div className="form-row code-form">
          <div className="form-group" style={{ display: "flex", gap: "20px" }}>
            <input
              type="text"
              name="discountCode"
              placeholder="Code de remise"
              onChange={handleChange}
            />
            <button type="submit">Soumettre</button>
          </div>
        </div>
      )}
      </div>
      <br /><br />
      <form onSubmit={handleSubmit} >
        {/* Informations du compte */}
        <fieldset style={{border: '3px solid #0c6980', padding: '15px', borderRadius: '5px'}}>
          <legend>Informations du compte</legend>
          <div className="form-row">
            <div className="form-group">
              <input type="text" name="username" placeholder="Nom d'utilisateur" onChange={handleChange} required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                placeholder="Mot de passe"
                onChange={handleChange}
                required
              />
              <span className="password-icon" onClick={() => handlePasswordVisibility("password")}>
                {passwordVisible ? "👁️" : "👁️‍🗨️"}
              </span>
            </div>

            <div className="form-group">
              <input
                type={confirmPasswordVisible ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirmer le mot de passe"
                onChange={handleChange}
                required
              />
              <span className="password-icon" onClick={() => handlePasswordVisibility("confirmPassword")}>
                {confirmPasswordVisible ? "👁️" : "👁️‍🗨️"}
              </span>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <input type="email" name="email" placeholder="Adresse courriel" onChange={handleChange} required />
            </div>

            <div className="form-group">
              <input type="email" name="confirmEmail" placeholder="Confirmer l'email" onChange={handleChange} required />
            </div>
          </div>
            <br /><br />
          <p>Vous avez déjà un compte ? <a href="" style={{color: '#c36'}}>Connectez-vous ici</a></p>
        </fieldset>

        <button type="submit">Soumettre et payer</button>
      </form>
    </div>
  );
};

export default FormulaireInscriptionG;

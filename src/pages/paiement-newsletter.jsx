import React, { useState } from "react";
import "./css/Form.css"; // Assurez-vous d'ajouter les bonnes règles CSS pour le style.

const FormulaireInscription = () => {
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
        <p>You have selected the <strong>Newsletter ACTU OPS</strong> membership level. La Newsletter actu OPS, vous offre différentes opérations publicitaires Brand Content sur le digital. Chaque semaine, vous recevrez une pige complète des opérations spéciales publicitaires, réalisées sur une 10aine de sites médias en France (la liste des sites est aléatoire et elle varie selon les envois). <strong> Tarif unique 398€ht (au lieu de 598€ HT) pendant 1 mois (soit 4 Newsletters).</strong> La veille est faite à la main, sans outil ou techno, afin que vous ayez toutes les informations nécessaires pour avoir plein d’idée et répondre aux briefs de manière sereine.</p>
        <p>Le coût de l’adhésion est de <strong>398.00€..</strong></p>
        <p>L’adhésion expire après 1 Mois.</p>

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

        {/* Adresse de facturation */}
        <fieldset  style={{border: '3px solid #0c6980', padding: '15px', borderRadius: '5px'}}>
          <legend>Adresse de facturation</legend>
          <div className="form-row">
            <div className="form-group">
              <input type="text" name="firstName" placeholder="Prénom" onChange={handleChange} required />
            </div>

            <div className="form-group">
              <input type="text" name="lastName" placeholder="Nom" onChange={handleChange} required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <input type="text" name="address1" placeholder="Adresse 1" onChange={handleChange} required />
            </div>

            <div className="form-group">
              <input type="text" name="address2" placeholder="Adresse 2" onChange={handleChange} />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <input type="text" name="city" placeholder="Ville" onChange={handleChange} required />
            </div>

            <div className="form-group">
              <input type="text" name="state" placeholder="Province" onChange={handleChange} />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <input type="text" name="zip" placeholder="Code postal" onChange={handleChange} required />
            </div>

            <div className="form-group">
              <input type="text" name="phone" placeholder="Téléphone" onChange={handleChange} required />
            </div>
          </div>

          {/* <div className="form-row">
            <div className="form-group">
              <select name="country" onChange={handleChange} required>
                <option>United States</option>
                <option>France</option>
                <option>Canada</option>
              </select>
            </div>
          </div> */}
        </fieldset>

        {/* Informations de paiement */}
        <fieldset style={{border: '3px solid #0c6980', padding: '15px', borderRadius: '5px'}}>
          <legend>Information de paiement</legend>
          <div className="form-row">
            <div className="form-group">
              <input type="text" name="cardNumber" placeholder="Numéro de la carte" onChange={handleChange} required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <select name="expiryMonth" onChange={handleChange} required>
                <option value="">Mois</option>
                {[...Array(12).keys()].map((m) => (
                  <option key={m + 1} value={m + 1}>{m + 1}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <select name="expiryYear" onChange={handleChange} required>
                <option value="">Année</option>
                {[...Array(10).keys()].map((y) => (
                  <option key={y} value={2024 + y}>{2024 + y}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <input type="text" name="cvv" placeholder="Code CVV" onChange={handleChange} required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group" style={{display: 'flex', gap: '20px'}}>
              <input type="text" name="discountCode" placeholder="Code de remise" onChange={handleChange} />
              <button type="submit">Soumettre</button>
            </div>
          </div>
        </fieldset>

        <button type="submit">Soumettre et payer</button>
      </form>
    </div>
  );
};

export default FormulaireInscription;

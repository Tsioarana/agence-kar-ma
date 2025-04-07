import React from "react";
import { Link } from "react-router-dom";
import "./css/Audace-magazine.css";
import { audace, AUDACEmagazine } from "../assets";
import { magazines } from "../constants";

const AudaceMagazine = () => {
  return (
    <div className="audace">
      <div className="audace-magazine">
        <div className="audace-header">
          <h1>AUDACE MAGAZINE</h1>
          <img src={audace} alt="Audace Logo" />
        </div>

        <div className="audace-feminin">
          <a href="#">
            <h1>Découvrez le numéro de Mars</h1>
          </a>
          <span
            style={{ fontSize: "3rem", marginBottom: "20px", color: "#056987" }}
            className="fas fa-arrow-down"
          ></span>
          <a href="#">
            <img src={AUDACEmagazine} alt="Numéro de Mars" />
          </a>
        </div>

        <div className="magazine-gallery">
          {magazines.map((mag) => {
            const year = mag.date.split(" ")[1]; // Extraire l'année
            return (
              <div className="magazine" key={mag.id}>
                <img src={mag.image} alt={mag.name} />
                <h3>{mag.date}</h3>
                <p>{mag.name}</p>
                <Link
                  to={`/audace-magazine/${year}/${mag.id}/${encodeURIComponent(mag.name)}`}
                  className="btn"
                >
                  {mag.btn}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AudaceMagazine;

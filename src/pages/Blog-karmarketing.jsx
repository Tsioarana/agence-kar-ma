import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";
import { articles } from "../constants";
import "./css/Blog-karmarketing.css";

const Blogkarmarketing = () => {
  const { id } = useParams(); // Récupère l'ID de l'URL
  const navigate = useNavigate();

  const currentPage = id ? parseInt(id) : 1; // Si pas d'ID, page = 1
  const articlesPerPage = 41;
  const columnsPerPage = 3;
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  return (
    <div>
      <Header />

      <div className="audace audace-feminin" style={{ textAlign: "center", display: "block" }}>
        <h1>
          Tout savoir sur la communication, <br /> le marketing, les opérations <br /> spéciales digitales et le Brand <br /> Content !
        </h1>
        <span style={{ fontSize: "3rem", marginBottom: "20px", color: "#056987" }} className="fas fa-arrow-down"></span>
        <h1 style={{ fontSize: "1.5rem" }}>Lisez nos articles</h1>
      </div>

      {/* Afficher uniquement la page active */}
      {Array.from({ length: totalPages }).map((_, i) => {
        const pageIndex = i + 1;
        const indexOfLastArticle = pageIndex * articlesPerPage;
        const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
        const pageArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

        return (
          <div
            key={pageIndex}
            className={`blog-container ${currentPage === pageIndex ? "active" : "hidden"}`}
          >
            <div className="grid-container">
              {pageArticles.map((article, index) => (
                <div key={article.id} className={`article-card ${(index % columnsPerPage) + 1}`}>
                  <img src={article.image} alt={article.title} />
                  <a href="" style={{textDecoration: 'none'}}><h3>{article.title}</h3></a>
                  <p>{article.description}</p>
                  <hr />
                  <span>{article.date}</span>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {/* Pagination toujours affichée */}
      <div className="pagination">
        {Array.from({ length: totalPages }).map((_, i) => {
          const pageIndex = i + 1;
          return (
            <Link
              key={i}
              to={pageIndex === 1 ? "/le-blog-karmarketing" : `/le-blog-karmarketing/${pageIndex}`}
              className={currentPage === pageIndex ? "active" : ""}
            >
              {pageIndex}
            </Link>
          );
        })}
      </div>

      <div className="parallax-QuiSommeNous">
            <div className="QuiSommeNous-title" style={{textAlign: 'start', maxWidth: '880px'}}>
                <h4>Vous avez un nouveau produit/service à lancer ?</h4>
                <p style={{ fontSize: '1.8rem', textAlign: 'center'}}>Et vous avez besoin d’être accompagné dans votre <strong>stratégie de communication ?</strong></p>
                <p style={{ fontSize: '1.3rem'}}>Nous construisons et réfléchissons pour vous, sur <strong>la communication</strong> la plus adaptée pour <strong>développer votre activité.</strong></p>
                <p style={{ fontSize: '1.3rem'}}>Nous vous conseillons, réalisons vos supports de communication et suivons l’ensemble de vos campagnes publicitaires.</p>
                <p style={{ fontSize: '1.3rem', marginBottom: '50px'}}>Un suivi de qualité avec une personne disponible et dédiée pour vous.</p>
                <Link to="/Contact" style={{padding: '10px', border: '3px solid #0c6980', borderRadius: '5px', color: '#fff', fontWeight: 'bold',}}>Contactez-vous</Link>
            </div>
        </div>
    </div>
  );
};

export default Blogkarmarketing;

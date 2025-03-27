import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import "./home/page1.css";
import { img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12 } from "../assets";
import Page1 from './home/page1';
import Page2 from './home/page2';
import Page3 from './home/page3';
import Page4 from './home/page4';
const image = [
  { imageUrl: img1 },
  { imageUrl: img2 },
  { imageUrl: img3 },
  { imageUrl: img4 },
  { imageUrl: img5 },
  { imageUrl: img6 },
  { imageUrl: img7 },
  { imageUrl: img8 },
  { imageUrl: img9 },
  { imageUrl: img10 },
  { imageUrl: img11 },
  { imageUrl: img12 },
];

const Home = () => {
  const [isVisible, setIsVisible] = useState(false); // For the hero-image visibility
  const [headerVisible, setHeaderVisible] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);

  const heroImageRef = useRef(null); // Reference to the entire hero-image div
  const headerRef = useRef(null);
  const buttonRef = useRef(null);

  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true); // Set visibility to true when the hero-image div is visible
        observer.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    if (heroImageRef.current) {
      observer.observe(heroImageRef.current);
    }

    const handleElementVisibility = (ref, setter) => {
      const elementObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setter(true);
            elementObserver.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.5,
      });

      if (ref.current) {
        elementObserver.observe(ref.current);
      }
    };

    handleElementVisibility(headerRef, setHeaderVisible);
    handleElementVisibility(buttonRef, setButtonVisible);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <div className="hero-text" ref={headerRef}>
            <h1 className={headerVisible ? "reveal" : ""}>Valoriser vos idées</h1>
            <button className={`hero-btn ${buttonVisible ? "reveal" : ""}`} ref={buttonRef}>
              Voir plus
            </button>
          </div>
          <div className="hero-image" ref={heroImageRef}>
            <div className={`wapper ${isVisible ? "reveal" : ""}`}>
              {image.slice(0, 5).map((hero_img, index) => (
                <img
                  src={hero_img.imageUrl}
                  alt="Tech GIF"
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
    </>
  );
};

export default Home;

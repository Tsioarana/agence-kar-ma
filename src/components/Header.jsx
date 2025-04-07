import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Header.css";
import headerImage from "../assets/images/headerbg.jpg";
import contact from "../assets/images/Contact.png";
import newsletters from "../assets/images/7.png";
import Boutique from "../assets/images/Portolio-KarMa.png";
import Blogkarmarketing from "../assets/images/team.jpg";
import Chartresponsable from "../assets/images/charteresponsabilite.png";

const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const location = useLocation();

    const getHeaderData = (path) => {
        if (path.startsWith('/le-blog-karmarketing')) {
            return {
                text: 'Le blog Kar’marketing',
                backgroundImage: Blogkarmarketing
            };
        }

        switch (path) {
            case '/qui-sommes-nous-2':
                return {
                    text: 'Qui sommes nous',
                    backgroundImage: headerImage
                };
            case '/Contact':
                return {
                    text: 'Contact',
                    backgroundImage: contact
                };
            case '/newsletters-veille-ops':
                return {
                    text: 'Newsletters veille OPS',
                    backgroundImage: newsletters
                };
            case '/charte-de-responsabilite':
            return {
                text: 'Charte de responsabilité',
                backgroundImage: Chartresponsable
            };
            case '/boutique-responsable':
                return {
                    text: 'BOUTIQUE RESPONSABLE',
                    backgroundImage: Boutique
                };
            case '/offres-et-prestations':
                return {
                    text: 'Offres et prestations',
                    backgroundImage: headerImage
                };
            default:
                return {
                    text: 'Offres et prestations',
                    backgroundImage: headerImage
                };
        }
    };

    const { text, backgroundImage } = getHeaderData(location.pathname);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY * 0.3);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <div
                className="parallax-header"
                style={{
                    backgroundPosition: `center ${scrollPosition}px`,
                    backgroundImage: `url(${backgroundImage})`
                }}
            >
                <svg width="100%" height="100%">
                    <text x="50%" y="60%" textAnchor="middle" className="reveal-bottom">
                        {text}
                    </text>
                </svg>
            </div>
        </div>
    );
};

export default Header;

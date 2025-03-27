import React from 'react';
import './page1.css';
import { img_1 } from '../../assets';

const Page1 = () => {
  


  return (
    <div className="container-propulser">
      <div className="top-bar"></div>
      <div className="content">
        <div className="image-container fade-in">
          <img src={img_1} alt="Image" />
        </div>
      </div>
    </div>
  );
};

export default Page1;

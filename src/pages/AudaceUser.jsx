import React from "react";
import { useParams } from "react-router-dom";
import { magazines } from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./css/AudaceUser.css";

const AudaceUser = () => {
  const { id } = useParams();
  const magazine = magazines.find((mag) => mag.id === parseInt(id));

  if (!magazine) {
    return <h2>Magazine introuvable</h2>;
  }

  // Assuming the magazine object contains an array of image URLs (e.g. magazine.images)
  const currentImages = magazine.images || [];  // Replace 'images' with the actual field in your magazine object that contains the image URLs

  return (
    <div className="audace-user">
      <h1>{magazine.name_id}</h1>
      <h2>{magazine.titre}</h2>
      <h3>{magazine.sous_titre}</h3>
      <h5>{magazine.title}</h5>
      <p>{magazine.description}</p>
      <p>{magazine.descriptionbr}</p>
      <h5>{magazine.title2}</h5>
      <p>{magazine.description2}</p>
      <p>{magazine.descriptionbr2}</p>
      <h5>{magazine.title3}</h5>
      <p>{magazine.description3}</p>
      <p>{magazine.descriptionbr3}</p>
      <h5>{magazine.title4}</h5>
      <p>{magazine.description4}</p>
      <p>{magazine.descriptionbr4}</p>
      <h5>{magazine.title5}</h5>
      <p>{magazine.description5}</p>
      <p>{magazine.descriptionbr5}</p>
      <h5>{magazine.title6}</h5>
      <p>{magazine.description6}</p>
      <p>{magazine.descriptionbr6}</p>
      <h5>{magazine.title7}</h5>
      <p>{magazine.description7}</p>
      <p>{magazine.descriptionbr7}</p>

      <div className="image-gallery">
        <Swiper spaceBetween={10} slidesPerView={1} loop={true}>
          {currentImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Magazine ${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  );
};

export default AudaceUser;

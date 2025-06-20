import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/img/dining/aero-stag.JPG';
import img2 from '../../assets/img/dining/dine-1.jpg';
import img3 from '../../assets/img/dining/udaan.jpg';
import img4 from '../../assets/img/dining/zaika.jpg';

const dine = [
  {
    name: "AERO-STAG",
    type: "Aero Stag offers a unique dining experience with both elegant indoor seating and breezy poolside ambiance.",
    image: img1,
    link: "/aero-stag-booking"
  },
  {
    name: "SAFAR",
    type: "A Safar is our signature indoor restaurant serving a delightful blend of traditional and modern cuisine.",
    image: img2,
    link: "/safar-booking"
  },
  {
    name: "UDAAN",
    type: "Just like flights soaring high, Udaan lifts your dining experience with delicious food and a welcoming ambiance.",
    image: img3,
    link: "/udaan-booking"
  },
  {
    name: "ZAIKA",
    type: "Our skilled chefs craft each dish using time-honoured recipes and authentic spices, delivering a true culinary experience.",
    image: img4,
    link: "/zaika-booking"
  }
];

const DiningCards = () => {
  return (
    <section className="arch-dine-section">
      <div className="arch-dine-header">
        <h2>EXQUISITE DINING OPTIONS</h2>
        <p>Savor our culinary masterpieces</p>
      </div>

      <div className="arch-card-container">
        {dine.map((dine, index) => (
          <div className="arch-card" key={index}>
            <div className="arch-image-wrapper">
              <img 
                src={dine.image} 
                alt={dine.name} 
                loading="lazy"
                onError={(e) => {
                  e.target.src = '/assets/img/dine/default.jpg';
                }} 
              />
            </div>
            <div className="arch-card-info glass">
              <h3>{dine.name}</h3>
              <p>{dine.type}</p>
              <Link to={dine.link} className="arch-book-button">RESERVE TABLE</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DiningCards;
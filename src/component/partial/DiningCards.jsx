import React from 'react';
import { Link } from 'react-router-dom';
import { diningImages } from '../../Data';

const dine = [
  {
    name: 'AERO-STAG',
    type: 'Aero Stag offers a unique dining experience with both elegant indoor seating and breezy poolside ambiance.',
    link: '/dining',
    imageKey: 'aerostag',
  },
  {
    name: 'SAFAR',
    type: 'A Safar is our signature outdoor restaurant serving a delightful blend of traditional and modern cuisine.',
    link: '/dining',
    imageKey: 'safar',
  },
  {
    name: 'UDAAN',
    type: 'Just like flights soaring high, Udaan lifts your dining experience with delicious food and a welcoming ambiance.',
    link: '/dining',
    imageKey: 'udaan',
  },
  {
    name: 'ZAIKA',
    type: 'Our skilled chefs craft each dish using time-honoured recipes and authentic spices, delivering a true culinary experience.',
    link: '/dining',
    imageKey: 'zaika',
  },
];

const DiningCards = () => {
  return (
    <section className="arch-dine-section">
      <div className="arch-dine-header">
        <h2>EXQUISITE DINING OPTIONS</h2>
        <p>Savor our culinary masterpieces</p>
      </div>

      <div className="arch-card-container">
        {dine.map((restaurant, index) => {
          const imgData = diningImages[restaurant.imageKey]?.main;
          const imageSrc = imgData?.src || '/assets/img/dine/default.jpg';
          const imageAlt = imgData?.alt || `${restaurant.name} Restaurant`;

          return (
            <div className="arch-card" key={`${restaurant.imageKey}-${index}`}>
              <div className="arch-image-wrapper">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  title={imageAlt}
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = '/assets/img/dine/default.jpg';
                    e.target.alt = 'Default restaurant image';
                  }}
                  className="img-fluid"
                />
              </div>
              <div className="arch-card-info glass">
                <h3>{restaurant.name}</h3>
                <p>{restaurant.type}</p>
                <Link to={restaurant.link} className="arch-book-button">
                  RESERVE TABLE
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DiningCards;

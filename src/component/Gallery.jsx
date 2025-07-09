import { useState, useMemo } from 'react';
import { allImages } from './../Data';
// import { Helmet } from 'react-helmet-async';

const categoryMap = {
  all: 'All',
  rooms: 'Rooms',
  dining: 'Dining',
  lawn: 'Outside',
  gallery: 'Hotel',
};

const shuffleArray = (array) => {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

export default function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [visibleCount, setVisibleCount] = useState(8);

  const getImages = () => {
    let images = [];

    const pushImage = (imgObj) => {
      if (imgObj?.src) {
        images.push({
          src: imgObj.src,
          alt: imgObj.alt || 'Hotel image',
        });
      }
    };

    if (selectedCategory === 'all') {
      // Rooms
      Object.values(allImages.rooms).forEach((room) => {
        pushImage(room.bg);
        room.images?.forEach(pushImage);
      });

      // Dining
      Object.values(allImages.dining).forEach((d) => {
        pushImage(d.bg);
        if (d.main && d.main !== d.bg) pushImage(d.main);
      });

      // Lawn
      Object.values(allImages.lawn).forEach(pushImage);

      // Gallery
      if (Array.isArray(allImages.gallery.hotel)) {
        allImages.gallery.hotel.forEach(pushImage);
      }
      if (allImages.gallery.superDeluxeWashroom) {
        pushImage(allImages.gallery.superDeluxeWashroom);
      }

    } else {
      const data = allImages[selectedCategory];
      if (!data) return [];

      if (selectedCategory === 'rooms') {
        Object.values(data).forEach((room) => {
          pushImage(room.bg);
          room.images?.forEach(pushImage);
        });
      } else if (selectedCategory === 'dining') {
        Object.values(data).forEach((d) => {
          pushImage(d.bg);
          if (d.main && d.main !== d.bg) pushImage(d.main);
        });
      } else if (selectedCategory === 'lawn') {
        Object.values(data).forEach(pushImage);
      } else if (selectedCategory === 'gallery') {
        if (Array.isArray(data.hotel)) {
          data.hotel.forEach(pushImage);
        }
        if (data.superDeluxeWashroom) {
          pushImage(data.superDeluxeWashroom);
        }
      }
    }

    return shuffleArray(images);
  };

  const shuffledImages = useMemo(getImages, [selectedCategory]);
  const visibleImages = shuffledImages.slice(0, visibleCount);
  const allShown = visibleCount >= shuffledImages.length;

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setVisibleCount(8);
  };

  return (
    <>
         <title>Explore Our Gallery — A Glimpse into Comfort and Style</title>
      <meta 
        name="description" 
        content="Step inside V Hotel The Shoba State Gold through our photo gallery. From calm rooms and the refreshing outdoor pool to cozy corners and inviting dining spaces, each photo captures the spirit of your stay with us. Take a look around and discover what makes us feel like a peaceful pause near IGI Airport." 
      />
      <meta property="og:title" content="Explore Our Gallery — A Glimpse into Comfort and Style" />
        <meta property="og:description" content="Step inside V Hotel The Shoba State Gold through our photo gallery. From calm rooms and the refreshing outdoor pool to cozy corners and inviting dining spaces, each photo captures the spirit of your stay with us. Take a look around and discover what makes us feel like a peaceful pause near IGI Airport." />
    <div className="container photo-gallery-container" style={{ paddingTop: '6rem' }}>
      {/* Category Buttons */}
      <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
        {Object.entries(categoryMap).map(([key, label]) => (
          <button
            key={key}
            className={`btn ${selectedCategory === key ? 'btn-gold' : 'btn-gold-outline'}`}
            onClick={() => handleCategoryChange(key)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="row g-3">
        {visibleImages.map((img, idx) => (
          <div className="col-6 col-md-3" key={idx}>
            <div className="gallery-img-wrapper">
              <img
                src={img.src}
                alt={img.alt || 'Hotel image'}
                className="img-fluid gallery-img"
                loading="lazy"
                onError={(e) => {
                  e.target.src = '/assets/img/gallery/default.jpg';
                  e.target.alt = 'Default hotel image';
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* View More / View Less */}
      <div className="text-center mt-4">
        {!allShown ? (
          <button className="btn btn-gold" onClick={() => setVisibleCount((v) => v + 8)}>
            View More
          </button>
        ) : shuffledImages.length > 8 ? (
          <button className="btn btn-gold-outline" onClick={() => setVisibleCount(8)}>
            View Less
          </button>
        ) : null}
      </div>
    </div>
    </>
  );
}

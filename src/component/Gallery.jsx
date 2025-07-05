import { useState, useMemo } from 'react';
import { allImages } from './../Data';

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

    if (selectedCategory === 'all') {
      // Rooms
      Object.values(allImages.rooms).forEach((room) => {
        images.push(room.bg, ...room.images);
      });

      // Dining
      Object.values(allImages.dining).forEach((d) => {
        if (d.bg) images.push(d.bg);
        if (d.main && d.main !== d.bg) images.push(d.main);
      });

      // Lawn
      Object.values(allImages.lawn).forEach((img) => images.push(img));

      // Gallery
      if (Array.isArray(allImages.gallery.hotel)) {
        images.push(...allImages.gallery.hotel);
      }
      if (allImages.gallery.superDeluxeWashroom) {
        images.push(allImages.gallery.superDeluxeWashroom);
      }
    } else {
      const data = allImages[selectedCategory];
      if (!data) return [];

      if (selectedCategory === 'rooms') {
        images = Object.values(data).flatMap((room) => [room.bg, ...room.images]);
      } else if (selectedCategory === 'dining') {
        images = Object.values(data).flatMap((d) => {
          const imgs = [];
          if (d.bg) imgs.push(d.bg);
          if (d.main && d.main !== d.bg) imgs.push(d.main);
          return imgs;
        });
      } else if (selectedCategory === 'lawn') {
        images = Object.values(data);
      } else if (selectedCategory === 'gallery') {
        images = [];
        if (Array.isArray(data.hotel)) images.push(...data.hotel);
        if (data.superDeluxeWashroom) images.push(data.superDeluxeWashroom);
      }
    }

    return shuffleArray(images); // Shuffle before returning
  };

  const shuffledImages = useMemo(getImages, [selectedCategory]);

  const visibleImages = shuffledImages.slice(0, visibleCount);
  const allShown = visibleCount >= shuffledImages.length;

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setVisibleCount(8);
  };

  return (
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
        {visibleImages.map((src, idx) => (
          <div className="col-6 col-md-3" key={idx}>
            <div className="gallery-img-wrapper">
              <img src={src} alt={`gallery-${idx}`} className="img-fluid gallery-img" />
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
  );
}

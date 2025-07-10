import React, { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight, FaClock } from 'react-icons/fa';
import { allImages } from './../Data';

const diningData = [
  {
    id: 1,
    name: 'AERO-STAG',
    bgImage: allImages.dining.aerostag.bg.src,
    bgAlt: allImages.dining.aerostag.bg.alt || 'Aero Stag Background',
    descImage: allImages.dining.aerostag.main.src,
    descAlt: allImages.dining.aerostag.main.alt || 'Aero Stag Main View',
    description:
      'Aero Stag offers a unique dining experience with both elegant indoor seating and breezy poolside ambiance. Enjoy live music, TV shows, and cricket on a wide screen or turn the space into your own private cinema hall.',
    openingHours: '07:00 AM - 11:00 PM',
  },
  {
    id: 2,
    name: 'SAFAR',
    bgImage: allImages.dining.safar.bg.src,
    bgAlt: allImages.dining.safar.bg.alt || 'Safar Background',
    descImage: allImages.dining.safar.main.src,
    descAlt: allImages.dining.safar.main.alt || 'Safar Main View',
    description:
      'Safar is our signature indoor restaurant serving a delightful blend of traditional and modern cuisine. With warm interiors and attentive service, it offers a cozy setting to enjoy delicious meals.',
    openingHours: '07:00 AM - 11:00 PM',
  },
  {
    id: 3,
    name: 'UDAAN',
    bgImage: allImages.dining.udaan.bg.src,
    bgAlt: allImages.dining.udaan.bg.alt || 'Udaan Background',
    descImage: allImages.dining.udaan.main.src,
    descAlt: allImages.dining.udaan.main.alt || 'Udaan Main View',
    description:
      "Udaan, located near the airport, lifts your dining experience with delicious food and a welcoming ambiance. Whether you're arriving, departing, or just craving great taste.",
    openingHours: '07:00 AM - 11:00 PM',
  },
  {
    id: 4,
    name: 'ZAIKA',
    bgImage: allImages.dining.zaika.bg.src,
    bgAlt: allImages.dining.zaika.bg.alt || 'Zaika Background',
    descImage: allImages.dining.zaika.main.src,
    descAlt: allImages.dining.zaika.main.alt || 'Zaika Main View',
    description:
      'Zaika brings the bold and diverse tastes of Delhi to your plate, with a special emphasis on irresistible non-vegetarian specialities crafted using authentic spices.',
    openingHours: '07:00 AM - 11:00 PM',
  },
];

const Dining = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer || !isMobile) return;

    const handleScroll = () => {
      const containerWidth = scrollContainer.offsetWidth;
      const scrollPosition = scrollContainer.scrollLeft + containerWidth / 2;

      const activeIndex = itemRefs.current.findIndex((item) => {
        if (!item) return false;
        const itemLeft = item.offsetLeft;
        const itemRight = itemLeft + item.offsetWidth;
        return scrollPosition >= itemLeft && scrollPosition < itemRight;
      });

      if (activeIndex !== -1 && activeIndex !== selectedIndex) {
        setSelectedIndex(activeIndex);
      }
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, [isMobile, selectedIndex]);

  const handlePrev = () => {
    const newIndex = (selectedIndex - 1 + diningData.length) % diningData.length;
    setSelectedIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (selectedIndex + 1) % diningData.length;
    setSelectedIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const scrollToIndex = (index) => {
    if (!isMobile || !scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const item = itemRefs.current[index];

    if (item) {
      const containerWidth = container.offsetWidth;
      const itemLeft = item.offsetLeft;
      const itemWidth = item.offsetWidth;
      const scrollTo = itemLeft - containerWidth / 2 + itemWidth / 2;

      container.scrollTo({
        left: scrollTo,
        behavior: 'smooth',
      });
    }
  };

  const handleItemClick = (index) => {
    setSelectedIndex(index);
    if (isMobile) {
      scrollToIndex(index);
    }
  };

  const selectedDining = diningData[selectedIndex];

  return (
    <>
      <title>Simple Food, Clean Space — Right Near IGI Airport</title>
      <meta name="description" content="Sometimes, you just need a clean place to sit and have a proper meal. No noise, no rush. That’s what we’ve tried to build here. The food’s fresh, not too fancy, and the space stays spotless. If you're coming from the airport or heading that way, we’ll even sort your ride — pick and drop’s on us. It’s nothing over the top. Just good food, peace, and a spot that feels right." />
      <meta property="og:title" content="Simple Food, Clean Space — Right Near IGI Airport" />
      <meta property="og:description" content="Sometimes, you just need a clean place to sit and have a proper meal. No noise, no rush. That’s what we’ve tried to build here. The food’s fresh, not too fancy, and the space stays spotless. If you're coming from the airport or heading that way, we’ll even sort your ride — pick and drop’s on us. It’s nothing over the top. Just good food, peace, and a spot that feels right." />
      <div className="dining-page">
        {/* Top banner with background image and alt (visually hidden alternative) */}
        <div
          className="top-banner"
          style={{ backgroundImage: `url(${selectedDining.bgImage})` }}
          aria-label={selectedDining.bgAlt}
        />

        <div className="dining-name-selector">
          {isMobile && (
            <button className="scroll-btn left" onClick={handlePrev}>
              <FaChevronLeft />
            </button>
          )}

          <div
            ref={scrollContainerRef}
            className={`dining-name-container ${isMobile ? 'mobile-view' : 'desktop-view'}`}
            style={
              isMobile
                ? { overflowX: 'auto', scrollSnapType: 'x mandatory', whiteSpace: 'nowrap' }
                : {}
            }
          >
            {diningData.map((dining, i) => (
              <div
                key={`${dining.name}-${i}`}
                ref={(el) => (itemRefs.current[i] = el)}
                className={`dining-name-item ${i === selectedIndex ? 'active' : ''}`}
                onClick={() => handleItemClick(i)}
                style={
                  isMobile
                    ? {
                      display: 'inline-block',
                      scrollSnapAlign: 'center',
                      width: '100vw',
                      maxWidth: '400px',
                      textAlign: 'center',
                      padding: '10px 0',
                      boxSizing: 'border-box',
                    }
                    : {
                      flex: 1,
                      textAlign: 'center',
                      padding: '12px 16px',
                    }
                }
              >
                {dining.name}
              </div>
            ))}
          </div>

          {isMobile && (
            <button className="scroll-btn right" onClick={handleNext}>
              <FaChevronRight />
            </button>
          )}
        </div>

        <h1 className="dining-title">{selectedDining.name}</h1>

        <div className="dining-info-section">
          <div className="dining-card with-image image-left description-card">
            <div className="image-wrapper border-right-bottom">
              <img
                src={selectedDining.descImage}
                alt={selectedDining.descAlt}
                className="dining-desc-img"
              />
            </div>
            <div className="text">
              <p>{selectedDining.description}</p>

              <div className="opening-hours">
                <FaClock className="clock-icon" />
                <span>{selectedDining.openingHours}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="dining-actions">
          <a href="https://www.vhotelthegrandshoba.com/query" className="reserve-btn" target="_blank"rel="noopener noreferrer">
            Reserve a Table
          </a>
          <a href="https://www.vhotelthegrandshoba.com/menu" className="menu-btn"target="_blank"rel="noopener noreferrer">
            View Menu
          </a>
        </div>
      </div>
    </>
  );
};

export default Dining;

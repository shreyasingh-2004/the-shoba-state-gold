import React, { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight, FaClock } from 'react-icons/fa';
import { allImages } from './../Data'

const diningData = [
  {
    id: 1, 
    name: 'AERO-STAG', 
    bgImage: allImages.dining.aerostag.bg, 
    descImage: allImages.dining.aerostag.main,
    description: "Aero Stag offers a unique dining experience with both elegant indoor seating and breezy poolside ambiance. Enjoy live music, TV shows, and cricket on a wide screen or turn the space into your own private cinema hall.",
    openingHours: '07:00 AM - 11:00 PM'
  },
  {
    id: 2, 
    name: 'SAFAR', 
    bgImage: allImages.dining.safar.bg, 
    descImage: allImages.dining.safar.main,
    description: "Safar is our signature indoor restaurant serving a delightful blend of traditional and modern cuisine. With warm interiors and attentive service, it offers a cozy setting to enjoy delicious meals.",
    openingHours: '07:00 AM - 11:00 PM'
  },
  {
    id: 3, 
    name: 'UDAAN', 
    bgImage: allImages.dining.udaan.bg, 
    descImage: allImages.dining.udaan.main,
    description: "Udaan, located near the airport, lifts your dining experience with delicious food and a welcoming ambiance. Whether you're arriving, departing, or just craving great taste.",
    openingHours: '07:00 AM - 11:00 PM'
  },
  {
    id: 4, 
    name: 'ZAIKA', 
    bgImage: allImages.dining.zaika.bg, 
    descImage: allImages.dining.zaika.main,
    description: "Zaika brings the bold and diverse tastes of Delhi to your plate, with a special emphasis on irresistible non-vegetarian specialities crafted using authentic spices.",
    openingHours: '07:00 AM - 11:00 PM'
  }
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
      const scrollPosition = scrollContainer.scrollLeft + (containerWidth / 2);
      
      const activeIndex = itemRefs.current.findIndex(item => {
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
      const scrollTo = itemLeft - (containerWidth / 2) + (itemWidth / 2);
      
      container.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  const handleItemClick = (index) => {
    setSelectedIndex(index);
    if (isMobile) {
      scrollToIndex(index);
    }
  };

  return (
    <div className="dining-page">
      <div className="top-banner" style={{ backgroundImage: `url(${diningData[selectedIndex].bgImage})` }} />

      <div className="dining-name-selector">
        {isMobile && (
          <button className="scroll-btn left" onClick={handlePrev}>
            <FaChevronLeft />
          </button>
        )}

        <div 
          ref={scrollContainerRef}
          className={`dining-name-container ${isMobile ? 'mobile-view' : 'desktop-view'}`}
          style={isMobile ? { overflowX: 'auto', scrollSnapType: 'x mandatory', whiteSpace: 'nowrap' } : {}}
        >
          {diningData.map((dining, i) => (
            <div
              key={`${dining.name}-${i}`}
              ref={el => itemRefs.current[i] = el}
              className={`dining-name-item ${i === selectedIndex ? 'active' : ''}`}
              onClick={() => handleItemClick(i)}
              style={isMobile ? {
                display: 'inline-block',
                scrollSnapAlign: 'center',
                width: '100vw',
                maxWidth: '400px',
                textAlign: 'center',
                padding: '10px 0',
                boxSizing: 'border-box'
              } : {
                flex: 1,
                textAlign: 'center',
                padding: '12px 16px',
              }}
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

      <h1 className="dining-title">{diningData[selectedIndex].name}</h1>

      <div className="dining-info-section">
        <div className="dining-card with-image image-left description-card">
          <div className="image-wrapper border-right-bottom">
            <img src={diningData[selectedIndex].descImage} alt={diningData[selectedIndex].name} />
          </div>
          <div className="text">
            <p>{diningData[selectedIndex].description}</p>
            
            <div className="opening-hours">
              <FaClock className="clock-icon" />
              <span>{diningData[selectedIndex].openingHours}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="dining-actions">
        <a href="/reservations" className="reserve-btn">Reserve a Table</a>
        <a href="/menu" className="menu-btn">View Menu</a>
      </div>
    </div>
  );
};

export default Dining;
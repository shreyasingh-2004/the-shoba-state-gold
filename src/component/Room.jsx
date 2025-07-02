import React, { useRef, useState, useEffect, useCallback } from 'react';
import { FaChevronLeft, FaChevronRight, FaMugHot, FaSwimmingPool, FaShuttleVan, FaEllipsisH } from 'react-icons/fa';
import { allImages } from './../Data';
import Testimonial from './Testimonial';

const iconMap = {
  'Breakfast & tea': <FaMugHot />,
  'Swimming Pool': <FaSwimmingPool />,
  'Pickup & Drop': <FaShuttleVan />,
  '10 more': <FaEllipsisH />
};

const roomsData = [
  {
    id: 1, 
    name: 'Classic Room', 
    bgImage: allImages.rooms.classic.bg, 
    descImage: allImages.rooms.classic.images[0], 
    amenitiesImage: allImages.rooms.classic.images[1],
    description: "The Classic Room offers comfort, modern amenities, & thoughtful essentials to ensure a relaxing & enjoyable experience throughout your stay, blending timeless elegance with convenience for both business & leisure travelers.",
    amenities: ['Breakfast & tea','Swimming Pool','Pickup & Drop','10 more']
  },
  {
    id: 2, 
    name: 'Executive Room', 
    bgImage: allImages.rooms.executive.bg, 
    descImage: allImages.rooms.executive.images[0], 
    amenitiesImage: allImages.rooms.executive.images[1],
    description: "Experience the elegance of space, style, & serenity all in one executive retreat, where sophistication meets comfort. Enjoy a refined ambiance, modern amenities, & a tranquil atmosphere designed to elevate your stay, whether for business or leisure, offering a perfect balance of luxury & relaxation in every moment.",
    amenities: ['Breakfast & tea','Swimming Pool','Pickup & Drop','10 more']
  },
  {
    id: 3, 
    name: 'Deluxe Room', 
    bgImage: allImages.rooms.deluxe.bg, 
    descImage: allImages.rooms.deluxe.images[0], 
    amenitiesImage: allImages.rooms.deluxe.images[1],
    description: "Experience the elegance of space, style, & serenity – all in one deluxe retreat designed for ultimate comfort & luxury. With refined interiors, premium amenities, & a peaceful ambiance, this retreat offers a perfect escape for both business & leisure travelers seeking sophistication, relaxation, & a truly memorable stay.",
    amenities: ['Breakfast & tea','Swimming Pool','Pickup & Drop','10 more']
  },
  {
    id: 4, 
    name: 'Super Deluxe Room', 
    bgImage: allImages.rooms.superDeluxe.bg, 
    descImage: allImages.rooms.superDeluxe.images[0], 
    amenitiesImage: allImages.rooms.superDeluxe.images[1],
    description: "More than just a room – it's a bespoke experience of rest, elegance, & impeccable service. Every detail is thoughtfully curated to provide unmatched comfort & sophistication. From luxurious interiors to personalized hospitality, indulge in a stay that redefines relaxation & leaves a lasting impression of grace & refinement.",
    amenities: ['Breakfast & tea','Swimming Pool','Pickup & Drop','10 more']
  },
  {
    id: 5, 
    name: 'Suite Room', 
    bgImage: allImages.rooms.suite.bg, 
    descImage: allImages.rooms.suite.images[0], 
    amenitiesImage: allImages.rooms.suite.images[1],
    description: "A suite that redefines living — thoughtfully designed for moments that matter. Blending luxury, comfort, & functionality, every element is crafted to elevate your experience. Whether for work or leisure, enjoy spacious elegance, modern amenities, & a serene atmosphere that turns ordinary stays into extraordinary memories worth cherishing.",
    amenities: ['Breakfast & tea','Swimming Pool','Pickup & Drop','10 more']
  },
  {
    id: 6, 
    name: 'Family Suite Room', 
    bgImage: allImages.rooms.familySuite.bg, 
    descImage: allImages.rooms.familySuite.images[0], 
    amenitiesImage: allImages.rooms.familySuite.images[1],
    description: "The Family Suite — generously appointed for comfort, connection, & convenience. Designed with ample space & thoughtful amenities, it offers a perfect setting for families to relax, bond, & enjoy quality time together. Experience a harmonious blend of luxury & practicality, ensuring every family moment is memorable & stress-free.",
    amenities: ['Breakfast & tea','Swimming Pool','Pickup & Drop','10 more']
  }
];

const Room = () => {
    const scrollRef = useRef(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isInitialized, setIsInitialized] = useState(false);
  
    const scrollToIndex = useCallback((index) => {
      const wrapper = scrollRef.current;
      if (!wrapper) return;
      
      const item = wrapper.children[index];
      if (!item) return;
      
      const wrapperCenter = wrapper.offsetWidth / 2;
      const itemCenter = item.offsetLeft + item.offsetWidth / 2;
      
      wrapper.scrollTo({
        left: itemCenter - wrapperCenter,
        behavior: 'smooth'
      });
    }, []);
  
    const handleItemClick = useCallback((index) => {
      setSelectedIndex(index);
      scrollToIndex(index);
    }, [scrollToIndex]);
  
    const handleScroll = useCallback(() => {
      const wrapper = scrollRef.current;
      if (!wrapper) return;
      
      const scrollPosition = wrapper.scrollLeft + (wrapper.offsetWidth / 2);
      const items = Array.from(wrapper.children);
      
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (scrollPosition >= item.offsetLeft && 
            scrollPosition < item.offsetLeft + item.offsetWidth) {
          if (i !== selectedIndex) {
            setSelectedIndex(i);
          }
          break;
        }
      }
    }, [selectedIndex]);
  
    const handlePrev = useCallback(() => {
      const newIndex = (selectedIndex - 1 + roomsData.length) % roomsData.length;
      handleItemClick(newIndex);
    }, [selectedIndex, handleItemClick]);
  
    const handleNext = useCallback(() => {
      const newIndex = (selectedIndex + 1) % roomsData.length;
      handleItemClick(newIndex);
    }, [selectedIndex, handleItemClick]);
  
    useEffect(() => {
      if (!isInitialized && scrollRef.current) {
        scrollToIndex(selectedIndex);
        setIsInitialized(true);
      }
    }, [isInitialized, selectedIndex, scrollToIndex]);
  
    return (
      <div className="rooms-page">
        <div className="top-banner" style={{ backgroundImage: `url(${roomsData[selectedIndex].bgImage})` }}>
          <a href="/booking" className="book-now-btn">Book Now</a>
        </div>
  
        <div className="room-name-selector">
          <button className="scroll-btn left" onClick={handlePrev}>
            <FaChevronLeft />
          </button>
  
          <div 
            className="scroll-wrapper" 
            ref={scrollRef} 
            onScroll={handleScroll}
          >
            {roomsData.map((room, i) => (
              <div
                key={`${room.name}-${i}`}
                className={`room-name-item ${i === selectedIndex ? 'active' : ''}`}
                onClick={() => handleItemClick(i)}
              >
                {room.name}
              </div>
            ))}
          </div>
  
          <button className="scroll-btn right" onClick={handleNext}>
            <FaChevronRight />
          </button>
        </div>
  
        <h1 className="room-title">{roomsData[selectedIndex].name}</h1>
  
        <div className="room-info-section">
          <div className="room-card with-image image-left description-card">
            <div className="image-wrapper border-right-bottom">
              <img src={roomsData[selectedIndex].descImage} alt="Description" />
            </div>
            <div className="text">
              <h3>Description</h3>
              <p>{roomsData[selectedIndex].description}</p>
            </div>
          </div>
  
          <div className="room-card with-image image-right">
            <div className="text">
              <h3>Amenities</h3>
              <ul>
                {roomsData[selectedIndex].amenities.map((item, i) => (
                  <li key={i}>
                    <span className="icon">{iconMap[item]}</span>
                    <span className="label">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="image-wrapper border-left-top">
              <img src={roomsData[selectedIndex].amenitiesImage} alt="Amenities" />
            </div>
          </div>
        </div>
        <a href="/booking" className="mobile-book-now-btn">Book Now</a>
        <Testimonial/>
      </div>
    );
};
  
export default Room;
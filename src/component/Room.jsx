import React, { useRef, useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaMugHot, FaSwimmingPool, FaShuttleVan, FaEllipsisH } from 'react-icons/fa';
import { allImages } from './../Data';
// import { Helmet } from 'react-helmet-async';
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
    bgImage: allImages.rooms.classic.bg, // { src, alt }
    descImage: allImages.rooms.classic.images[0], // { src, alt }
    amenitiesImage: allImages.rooms.classic.images[1], // { src, alt }
    description: "The Classic Room offers comfort, modern amenities, & thoughtful essentials to ensure a relaxing & enjoyable experience throughout your stay, blending timeless elegance with convenience for both business & leisure travelers.",
    amenities: ['Breakfast & tea', 'Swimming Pool', 'Pickup & Drop', '10 more']
  },
  {
    id: 2,
    name: 'Deluxe Room',
    bgImage: allImages.rooms.deluxe.bg,
    descImage: allImages.rooms.deluxe.images[0],
    amenitiesImage: allImages.rooms.deluxe.images[1],
    description: "Experience the elegance of space, style, & serenity – all in one deluxe retreat designed for ultimate comfort & luxury. With refined interiors, premium amenities, & a peaceful ambiance, this retreat offers a perfect escape for both business & leisure travelers seeking sophistication, relaxation, & a truly memorable stay.",
    amenities: ['Breakfast & tea', 'Swimming Pool', 'Pickup & Drop', '10 more']
  },
  {
    id: 3,
    name: 'Super Deluxe Room',
    bgImage: allImages.rooms.superDeluxe.bg,
    descImage: allImages.rooms.superDeluxe.images[0],
    amenitiesImage: allImages.rooms.superDeluxe.images[1],
    description: "More than just a room – it's a bespoke experience of rest, elegance, & impeccable service. Every detail is thoughtfully curated to provide unmatched comfort & sophistication. From luxurious interiors to personalized hospitality, indulge in a stay that redefines relaxation & leaves a lasting impression of grace & refinement.",
    amenities: ['Breakfast & tea', 'Swimming Pool', 'Pickup & Drop', '10 more']
  },
  {
    id: 4,
    name: 'Suite Room',
    bgImage: allImages.rooms.suite.bg,
    descImage: allImages.rooms.suite.images[0],
    amenitiesImage: allImages.rooms.suite.images[1],
    description: "A suite that redefines living — thoughtfully designed for moments that matter. Blending luxury, comfort, & functionality, every element is crafted to elevate your experience. Whether for work or leisure, enjoy spacious elegance, modern amenities, & a serene atmosphere that turns ordinary stays into extraordinary memories worth cherishing.",
    amenities: ['Breakfast & tea', 'Swimming Pool', 'Pickup & Drop', '10 more']
  },
];

const Room = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const itemRefs = useRef([]);

  const handleNavigation = (direction) => {
    let newIndex;
    if (direction === 'left') {
      newIndex = selectedIndex > 0 ? selectedIndex - 1 : roomsData.length - 1;
    } else {
      newIndex = selectedIndex < roomsData.length - 1 ? selectedIndex + 1 : 0;
    }
    setSelectedIndex(newIndex);
  };

  const handleItemClick = (index) => {
    setSelectedIndex(index);
  };

  // Scroll selected item into view on mobile
  useEffect(() => {
    if (itemRefs.current[selectedIndex]) {
      itemRefs.current[selectedIndex].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, [selectedIndex]);

  return (
    <>
        <title>Rooms Close to IGI Airport – Nothing Fancy, Just Right</title>
        <meta name="description" content="If you’re flying in or out of Delhi, this place makes things easy. Rooms are clean, quiet, and you get a decent bed. Not trying to impress, just a good spot to sleep and breathe for a bit. After a long trip or before an early flight, that’s all you really need, right?" />
        <meta property="og:title" content="Rooms Close to IGI Airport – Nothing Fancy, Just Right" />
        <meta property="og:description" content="If you’re flying in or out of Delhi, this place makes things easy. Rooms are clean, quiet, and you get a decent bed. Not trying to impress, just a good spot to sleep and breathe for a bit. After a long trip or before an early flight, that’s all you really need, right?" />
      <div className="rooms-page">
        <div
          className="top-banner"
          style={{ backgroundImage: `url(${roomsData[selectedIndex].bgImage.src})` }}
          aria-label={roomsData[selectedIndex].bgImage.alt}
        >
          <a href="/booking" className="book-now-btn">Book Now</a>
        </div>

        <div className="room-name-selector">
          <div className="mobile-arrows">
            <button className="scroll-btn left" onClick={() => handleNavigation('left')}>
              <FaChevronLeft />
            </button>
            <button className="scroll-btn right" onClick={() => handleNavigation('right')}>
              <FaChevronRight />
            </button>
          </div>

          <div className="room-name-container">
            {roomsData.map((room, i) => (
              <div
                key={`${room.name}-${i}`}
                ref={(el) => (itemRefs.current[i] = el)}
                className={`room-name-item ${i === selectedIndex ? 'active' : ''}`}
                onClick={() => handleItemClick(i)}
              >
                {room.name}
              </div>
            ))}
          </div>
        </div>

        <h1 className="room-title">{roomsData[selectedIndex].name}</h1>

        <div className="room-info-section">
          <div className="room-card with-image image-left description-card">
            <div className="image-wrapper border-right-bottom">
              <img
                src={roomsData[selectedIndex].descImage.src}
                alt={roomsData[selectedIndex].descImage.alt || 'Room Description'}
              />
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
              <img
                src={roomsData[selectedIndex].amenitiesImage.src}
                alt={roomsData[selectedIndex].amenitiesImage.alt || 'Room Amenities'}
              />
            </div>
          </div>
        </div>

        <a href="/booking" className="mobile-book-now-btn">Book Now</a>

        <Testimonial />
      </div>
    </>
  );
};

export default Room;

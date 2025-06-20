import React, { useState } from 'react';
import img from './../assets/img/rooms/classic.jpg';

const roomsData = [
  {
    id: 1,
    name: 'Deluxe Double Room',
    bgImage: img,
    descImage: img,
    amenitiesImage: img,
    description: 'Elegant, spacious, newly refurbished rooms perfect for families or weekend breaks.',
    amenities: ['Luxurious Linens', 'Iron & Ironing Board', 'WiFi', 'Flat-screen TV']
  },
  {
    id: 2,
    name: 'Superior King Room',
    bgImage: img,
    descImage: img,
    amenitiesImage: img,
    description: 'Regal experience with king-size bed, rich fabrics, and calming views.',
    amenities: ['King Bed', 'Coffee Maker', 'Bathrobe & Slippers', 'Room Service']
  },
  {
    id: 3,
    name: 'Manor House Suite',
    bgImage: img,
    descImage: img,
    amenitiesImage: img,
    description: 'Timeless luxury in a suite with private lounge, heritage décor, and indulgent features.',
    amenities: ['Private Lounge', 'Jacuzzi', 'Mini Bar', 'Butler Service']
  },
  {
    id: 4,
    name: 'Executive Room',
    bgImage: img,
    descImage: img,
    amenitiesImage: img,
    description: 'Modern executive spaces perfect for business travelers with elegant comfort.',
    amenities: ['Workspace', 'Fast WiFi', 'Coffee Station', 'Concierge Access']
  },
  {
    id: 5,
    name: 'Family Suite',
    bgImage: img,
    descImage: img,
    amenitiesImage: img,
    description: 'Spacious family suite with multiple beds, child-safe features, and living area.',
    amenities: ['Family Bed Setup', 'TV + Netflix', 'Mini Kitchenette', 'Childproof Amenities']
  }
];

const Room = () => {
  const [selectedRoom, setSelectedRoom] = useState(roomsData[0]);

  return (
    <div className="rooms-page">
      <div className="top-banner" style={{ backgroundImage: `url(${selectedRoom.bgImage})` }} />

      <div className="room-name-selector">
        <div className="scroll-wrapper">
          {roomsData.map(room => (
            <div
              key={room.id}
              className={`room-name-item ${room.id === selectedRoom.id ? 'active' : ''}`}
              onClick={() => setSelectedRoom(room)}
            >
              {room.name}
            </div>
          ))}
        </div>
      </div>

      <h1 className="room-title">{selectedRoom.name}</h1>

      <div className="room-info-section">
        <div className="room-card with-image image-left">
          <img src={selectedRoom.descImage} alt={`${selectedRoom.name} decor`} />
          <div className="text">
            <h3>Description</h3>
            <p>{selectedRoom.description}</p>
          </div>
        </div>

        <div className="room-card with-image image-right">
          <div className="text">
            <h3>Amenities</h3>
            <ul>
              {selectedRoom.amenities.map((item, i) => (
                <li key={i}>🛎️ {item}</li>
              ))}
            </ul>
          </div>
          <img src={selectedRoom.amenitiesImage} alt={`${selectedRoom.name} amenities`} />
        </div>
      </div>
    </div>
  );
};

export default Room;

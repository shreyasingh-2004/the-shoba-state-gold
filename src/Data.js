// Extra images
import hotelImg1 from './assets/img/gallery/hotel-img.jpg';
import hotelImg2 from './assets/img/gallery/Hotel-image.jpg';

// Rooms Images
import classicbg from './assets/img/rooms/classic.jpg';
import classic1 from './assets/img/rooms/classic-room.JPG';
import classic2 from './assets/img/rooms/classic_room.jpg';

// import executivebg from './assets/img/rooms/executive.jpg';
// import executive1 from './assets/img/rooms/executive-room.jpg';
// import executive2 from './assets/img/rooms/executive_room.jpg';

import deluexbg from './assets/img/rooms/deluxe.jpg';
import deluex1 from './assets/img/rooms/deluxe-room.jpg';
import deluxe2 from './assets/img/rooms/deluxe_room.jpg';

import superdeluxebg from './assets/img/rooms/super-deluxe.jpg';
import superdeluxe1 from './assets/img/rooms/superdeluxe-room.jpg';
import superdeluxe2 from './assets/img/rooms/superdeluxe_room.jpg';

import suitebg from './assets/img/rooms/suite.jpg';
import suite1 from './assets/img/rooms/suite-room.jpg';
import suite2 from './assets/img/rooms/suite_room.jpg';

// import familysuitebg from './assets/img/rooms/family-suite.jpg';
// import familysuite1 from './assets/img/rooms/family-suite-room.jpg';
// import familysuite2 from './assets/img/rooms/family-suite_room.jpg';

// Dining Images
import aerostagBg from './assets/img/dining/aero_stag.jpg';
import safarBg from './assets/img/dining/safar-dine.jpg';
import udaanBg from './assets/img/dining/udaan-dine.jpg';
import zaikaBg from './assets/img/dining/zaika-dine.jpg';

import aerostag from './assets/img/dining/aero-stag.JPG';
import safar from './assets/img/dining/safar.jpg';
import udaan from './assets/img/dining/udaan.jpg';
import zaika from './assets/img/dining/zaika.jpg';

// Other Images
import aboutBg from './assets/img/lawn.JPG';

export const roomImages = {
  classic: {
    bg: { src: classicbg, alt: 'Classic room' },
    images: [
      { src: classic1, alt: 'Classic room' },
      { src: classic2, alt: 'Classic room' }
    ]
  },
  // executive: {
  //   bg: { src: executivebg, alt: 'Executive room' },
  //   images: [
  //     { src: executive1, alt: 'Executive room' },
  //     { src: executive2, alt: 'Executive room ' }
  //   ]
  // },
  deluxe: {
    bg: { src: deluexbg, alt: 'Deluxe room' },
    images: [
      { src: deluex1, alt: 'Deluxe room' },
      { src: deluxe2, alt: 'Deluxe room' }
    ]
  },
  superDeluxe: {
    bg: { src: superdeluxebg, alt: 'Super Deluxe room' },
    images: [
      { src: superdeluxe1, alt: 'Super Deluxe room' },
      { src: superdeluxe2, alt: 'Super Deluxe room' }
    ]
  },
  suite: {
    bg: { src: suitebg, alt: 'Suite room' },
    images: [
      { src: suite1, alt: 'Suite room' },
      { src: suite2, alt: 'Suite room' }
    ]
  },
  // familySuite: {
  //   bg: { src: familysuitebg, alt: 'Family Suite room background' },
  //   images: [
  //     { src: familysuite1, alt: 'Family Suite room' },
  //     { src: familysuite2, alt: 'Family Suite room' }
  //   ]
  // }
};

export const diningImages = {
  aerostag: {
    bg: { src: aerostagBg, alt: 'Aero Stag dining' },
    main: { src: aerostag, alt: 'Aero Stag dining' }
  },
  safar: {
    bg: { src: safarBg, alt: 'Safar dining' },
    main: { src: safar, alt: 'Safar dining' }
  },
  udaan: {
    bg: { src: udaanBg, alt: 'Udaan dining' },
    main: { src: udaan, alt: 'Udaan dining' }
  },
  zaika: {
    bg: { src: zaikaBg, alt: 'Zaika dining' },
    main: { src: zaika, alt: 'Zaika dining' }
  }
};

export const LawnImages = {
  aboutBg: { src: aboutBg, alt: 'Hotel lawn area' }
};

export const galleryImages = {
  hotel: [
    { src: hotelImg1, alt: 'Front view of the hotel' },
    { src: hotelImg2, alt: 'Hotel view' }
  ]
};


export const allImages = {
  rooms: roomImages,
  dining: diningImages,
  lawn: LawnImages,
  gallery: galleryImages
};

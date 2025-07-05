// Extra images
import hotelImg1 from './assets/img/gallery/hotel-img.jpg';
import hotelImg2 from './assets/img/gallery/Hotel-image.jpg';

// Rooms Images
import classicbg from './assets/img/rooms/classic.jpg';
import classic1 from './assets/img/rooms/classic1.JPG';
import classic2 from './assets/img/rooms/classic2.jpg';

import executivebg from './assets/img/rooms/executive.jpg';
import executive1 from './assets/img/rooms/executive1.jpg';
import executive2 from './assets/img/rooms/executive2.jpg';

import deluexbg from './assets/img/rooms/deluxe.jpg';
import deluex1 from './assets/img/rooms/deluxe1.jpg';
import deluxe2 from './assets/img/rooms/deluxe2.jpg';

import superdeluxebg from './assets/img/rooms/super-deluxe.jpg';
import superdeluxe1 from './assets/img/rooms/superdeluxe1.jpg';
import superdeluxe2 from './assets/img/rooms/superdeluxe2.jpg';

import suitebg from './assets/img/rooms/suite.jpg';
import suite1 from './assets/img/rooms/suite1.jpg';
import suite2 from './assets/img/rooms/suite2.jpg';

import familysuitebg from './assets/img/rooms/family-suite.jpg';
import familysuite1 from './assets/img/rooms/familt-suite1.jpg';
import familysuite2 from './assets/img/rooms/familt-suite2.jpg';

// Dining Images
import aerostagBg from './assets/img/dining/aero-stag.JPG';
import safarBg from './assets/img/dining/safar1.jpg';
import udaanBg from './assets/img/dining/udaan1.jpg';
import zaikaBg from './assets/img/dining/zaika1.jpg';

import aerostag from './assets/img/dining/aero-stag.JPG';
import safar from './assets/img/dining/safar.jpg';
import udaan from './assets/img/dining/udaan.jpg';
import zaika from './assets/img/dining/zaika.jpg';

// Other Images
import aboutBg from './assets/img/lawn.JPG';

export const roomImages = {
  classic: {
    bg: classicbg,
    images: [classic1, classic2]
  },
  executive: {
    bg: executivebg,
    images: [executive1, executive2]
  },
  deluxe: {
    bg: deluexbg,
    images: [deluex1, deluxe2]
  },
  superDeluxe: {
    bg: superdeluxebg,
    images: [superdeluxe1, superdeluxe2]
  },
  suite: {
    bg: suitebg,
    images: [suite1, suite2]
  },
  familySuite: {
    bg: familysuitebg,
    images: [familysuite1, familysuite2]
  }
};

export const diningImages = {
  aerostag: {
    bg: aerostagBg,
    main: aerostag
  },
  safar: {
    bg: safarBg,
    main: safar
  },
  udaan: {
    bg: udaanBg,
    main: udaan
  },
  zaika: {
    bg: zaikaBg,
    main: zaika
  }
};

export const LawnImages = {
  aboutBg
};

export const galleryImages = {
  hotel: [hotelImg1, hotelImg2],
};


export const allImages = {
  rooms: roomImages,
  dining: diningImages,
  lawn: LawnImages,
  gallery: galleryImages
};

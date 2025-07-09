import React from 'react';
import VideoHero from './partial/VideoHero';
import AboutUs from './partial/AboutUs';
import DiningCards from './partial/DiningCards';
import RoomGallery from './partial/RoomGallery';

export default function Homepage() {
  return (
    <>
      <title>Relaxed Luxury Near IGI Airport - Design for Transit and Comfort</title>
      <meta 
        name="description" 
        content="Just a short drive from Delhi's IGI Airporty, V Hotel The Shoba State Gold is an ideal stop for travelers on the move - whether it's a business trip or short break. The rooms are open and comfortable, the pool is perfect for a quick refresh, and the outdoor lounge offfers space to simply breathe. You'll also find a choice of dining spots to match your mood. It's a quiet,well-designed place to rest before or after a journey." 
      />
      <meta property="og:title" content="Relaxed Luxury Near IGI Airport - Design for Transit and Comfort" />
    <meta property="og:description" content="Just a short drive from Delhi's IGI Airporty, V Hotel The Shoba State Gold is an ideal stop for travelers on the move - whether it's a business trip or short break. The rooms are open and comfortable, the pool is perfect for a quick refresh, and the outdoor lounge offfers space to simply breathe. You'll also find a choice of dining spots to match your mood. It's a quiet,well-designed place to rest before or after a journey." /> 
      <VideoHero/>
      <AboutUs/>
      <RoomGallery/>
      <DiningCards/>
    </>
  );
}
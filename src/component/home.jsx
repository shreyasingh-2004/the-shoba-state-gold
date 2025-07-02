import React from 'react'
import VideoHero from './partial/VideoHero'
import AboutUs from './partial/AboutUs'
import DiningCards from './partial/DiningCards'
import RoomGallery from './partial/RoomGallery'

export default function home() {
  return (
    <>
    <VideoHero/>
    <AboutUs/>
    <RoomGallery/>
    <DiningCards/>
    </>
  )
}

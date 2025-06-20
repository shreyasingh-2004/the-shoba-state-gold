import React from 'react';
import video from'../../assets/video/ShobaVideo.mp4'
const VideoHero = () => {
  return (
    <div className="video-hero">
      <div className="video-container">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="responsive-video"
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="video-overlay"></div>
    </div>
  );
};

export default VideoHero;
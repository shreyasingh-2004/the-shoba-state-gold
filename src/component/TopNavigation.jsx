import React, { useEffect, useRef } from 'react';
import MainNavbar from './MainNavbar';

const TopNavigation = () => {
  const navContainerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
  
      if (navContainerRef.current) {
        const height = navContainerRef.current.offsetHeight;
        document.documentElement.style.setProperty('--navbar-height-mobile', `${height}px`);
      }
    };
  
    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="nav-container" ref={navContainerRef}>
        <MainNavbar/>
    </div>
  );
};

export default TopNavigation;

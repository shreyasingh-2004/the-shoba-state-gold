import React, { useState, useEffect, useRef } from 'react';
import img1 from '../../assets/img/rooms/classic.jpg';
import img2 from '../../assets/img/rooms/executive.jpg';
import img3 from '../../assets/img/rooms/deluxe.jpg';
import img4 from '../../assets/img/rooms/super-deluxe.jpg';
import img5 from '../../assets/img/rooms/suite.jpg';
import img6 from '../../assets/img/rooms/family-suite.jpg';

const images = [
    {
        src: img1,
        title: 'Classic Room',
        caption: 'The Classic Room offers comfort modern amenities and thoughtful essentials throughout your stay.',
    },
    {
        src: img2,
        title: 'Executive Room',
        caption: 'Experience the Elegance of Space, Style, and Serenity – All in One Executive Retreat.',
    },
    {
        src: img3,
        title: 'Deluxe Room',
        caption: 'Experience the Elegance of Space, Style, and Serenity – All in One Deluxe Retreat.',
    },
    {
        src: img4,
        title: 'Super Deluxe Room',
        caption: 'More Than Just a Room A Bespoke Experience of Rest, Elegance, and Impeccable Service.',
    },
    {
        src: img5,
        title: 'Suite Room',
        caption: 'A Suite That Redefines Living Thoughtfully Designed for Moments That Matter.',
    },
    {
        src: img6,
        title: 'Family Suite Room',
        caption: 'The Family Suite — Generously Appointed for Comfort, Connection, and Convenience.',
    },
];

const RoomGallery = () => {

    const [activeIndex, setActiveIndex] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const galleryRef = useRef(null);

    useEffect(() => {
        const checkDevice = () => {
            const width = window.innerWidth;
            setIsMobile(width <= 768);
            setIsTablet(width > 768 && width <= 1024);
        };

        checkDevice();
        window.addEventListener('resize', checkDevice);

        return () => window.removeEventListener('resize', checkDevice);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (galleryRef.current) {
                galleryRef.current.style.transition = 'transform 0.5s ease';
            }
        }, 500);

        return () => clearTimeout(timer);
    }, [currentSlide]);

    const handlePrev = () => {
        setCurrentSlide(prev => {
            if (prev === 0) {
                galleryRef.current.style.transition = 'none';
                galleryRef.current.style.transform = `translateX(-${images.length * 100}%)`;
                void galleryRef.current.offsetWidth;
                galleryRef.current.style.transition = 'transform 0.5s ease';
                return images.length - 1;
            }
            return prev - 1;
        });
    };

    const handleNext = () => {
        setCurrentSlide(prev => {
            if (prev === images.length - 1) {
                galleryRef.current.style.transition = 'none';
                galleryRef.current.style.transform = `translateX(100%)`;
                void galleryRef.current.offsetWidth;
                galleryRef.current.style.transition = 'transform 0.5s ease';
                return 0;
            }
            return prev + 1;
        });
    };

    const handleItemClick = (index) => {
        if (isTablet) {
            setActiveIndex(activeIndex === index ? null : index);
        }
    };

    if (isMobile) {
        return (
            <section className="gallery-container">
                <div className="title">
                    <h2>OUR ROOMS AND DINE</h2>
                    <p >Experience our exquisite rooms and suites</p>
                </div>
                <div className="gallery-slider">
                    <div
                        className="slider-container"
                        ref={galleryRef}
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {images.map((item, index) => (
                            <div
                                key={index}
                                className="slider-item"
                                style={{ backgroundImage: `url(${item.src})` }}
                            >
                                <div className="item-overlay">
                                    <h3>{item.title}</h3>
                                    <p>{item.caption}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="slider-nav prev" onClick={handlePrev}>&#10094;</button>
                    <button className="slider-nav next" onClick={handleNext}>&#10095;</button>
                    <div className="slider-dots">
                        {images.map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${currentSlide === index ? 'active' : ''}`}
                                onClick={() => setCurrentSlide(index)}
                            />
                        ))}
                    </div>
                </div>
                </section>
                );
    }

                return (
                <section className="gallery-container">
                    <div className="title">
                        <h2>OUR ROOMS AND DINE</h2>
                        <p >Experience our exquisite rooms and suites</p>
                    </div>
                    <div className="gallery-horizontal">
                        {images.map((item, index) => (
                            <div
                                key={index}
                                className={`gallery-item ${activeIndex === index ? 'expanded' : ''}`}
                                onMouseEnter={() => !isTablet && setActiveIndex(index)}
                                onMouseLeave={() => !isTablet && setActiveIndex(null)}
                                onClick={() => handleItemClick(index)}
                                style={{ backgroundImage: `url(${item.src})` }}
                            >
                                <div className="item-overlay">
                                    <h3>{item.title}</h3>
                                    <p>{item.caption}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                );
};

                export default RoomGallery;
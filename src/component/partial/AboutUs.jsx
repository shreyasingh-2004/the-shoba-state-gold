import React from 'react';
import aboutBg from '../../assets/img/lawn.JPG';


const AboutUs = () => {
    return (
        <section className="about-section" style={{ backgroundImage: `url(${aboutBg})` }}>
            <div className="about-overlay"></div>

            <div className="about-container">
                <div className="about-content">
                    <h2 className="section-subtitle">Our Story</h2>
                    <h3 className="section-title">Welcome to Luxery Hotel</h3>
                    <div className="divider"></div>

                    <div className="about-text">
                        <p>
                        Located just minutes from Indira Gandhi International Airport near Terminals 2 and 3. V Hotel The Grand Shoba in Mahipalpur and Vasant Kunj offers ideal convenience for international, domestic, and connecting flight travelers.
                        Our luxury hotel features 100 elegant rooms and suites with modern amenities, perfect for business and leisure stays.
                        </p>
                        <p>
                        Dine at our signature restaurants—Safar, Zaika, Aerostag, and Udaan—serving global and Indian cuisine curated by expert chefs.
                        Host unforgettable weddings, meetings, or events in our banquet and conference halls near IGI Airport. Relax by the infinity pool or unwind at our wellness club. With exceptional service and comfort, your stay is designed to be both memorable and seamless.
                        A Grand Icon of Indian Hospitality
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
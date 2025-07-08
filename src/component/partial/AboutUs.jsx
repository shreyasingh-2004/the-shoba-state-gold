import React from 'react';
import aboutBg from '../../assets/img/lawn.JPG';


const AboutUs = () => {
    return (
        <section className="about-section" style={{ backgroundImage: `url(${aboutBg})` }}>
            <div className="about-overlay"></div>

            <div className="about-container">
                <div className="about-content">
                    <h2 className="section-subtitle">Our Story</h2>
                    <h3 className="section-title">Welcome to Luxery Haven</h3>
                    <div className="divider"></div>

                    <div className="about-text">
                        <p>
                        The Shoba State Gold is a renowned business-class hotel made to serve the new professional
                         and discerning traveler. It presents an unparalleled combination of cutting-edge design, 
                         careful amenities, and genuine hospitality in a serene, well-placed setting.
                        </p>
                        <p>
                        With tastefully appointed rooms, rapid connectivity, fully serviced meeting areas, and attentive
                         service, it creates a foundation for successful stays and upscale comfort. For pleasure or business, 
                         The Shoba State Gold offers a hassle-free experience characterized by comfort, ease, and uncompromised quality.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
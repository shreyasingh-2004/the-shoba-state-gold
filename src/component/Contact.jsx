import React from 'react'
import { Container } from 'react-bootstrap'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaEarthAmericas } from "react-icons/fa6";

export default function Contact() {
  return (
    <>
      <div className="contact-hero">
        <div className="overlay">
          <Container className="text-white text-center hero-text">
            <h1 className="display-5 fw-bold" style={{
              fontSize: '4rem',
              fontWeight: 'bold',
              color: '#fff',
              textAlign: 'center',
              marginTop: '2rem',
              marginBottom: '1.5rem',
              fontFamily: 'system-ui,cursive,sans-serif',
            }}>Contact Us</h1>
          </Container>

        </div>
      </div>

         <section className="py-5  contact-section">
      <div className="container text-center">
        <h2 className="mb-5 fw-bold text-uppercase " style={{color:"#d4af37"}}>Contact Us</h2>
        <div className="row g-4">
          {/* Call */}
          <div className="col-md-6 col-lg-3">
            <div className="contact-card">
              <div className="icon bounce">
                <FaPhoneAlt className='fs-2'  />
              </div>
              <h5 className="mt-3">Call Us</h5>
              <p className="mb-0">+91 9811320209</p>
              <p>+91 9811226576</p>
            </div>
          </div>
      <section className="py-5  contact-section">
        <div className="container text-center">
          <h2 className="mb-5 fw-bold text-uppercase " style={{ color: "#d4af37" }}>Contact Us</h2>
          <div className="row g-4">
            {/* Call */}
            <div className="col-md-6 col-lg-3">
              <div className="contact-card">
                <div className="icon bounce">
                  <FaPhoneAlt className='fs-2' />
                </div>
                <h5 className="mt-3">Call Us</h5>
                <p className="mb-0">+91 9811320209</p>
                <p>+91 9811226576</p>
              </div>
            </div>

            {/* Email */}
            <div className="col-md-6 col-lg-3">
              <div className="contact-card">
                <div className="icon bounce">
                  <MdOutlineMail />
                </div>
                <h5 className="mt-3">Email Us</h5>
                <p>info@vhotelthegrandshoba.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="col-md-6 col-lg-3">
              <div className="contact-card">
                <div className="icon bounce">
                  <IoLocationOutline />
                </div>
                <h5 className="mt-3">Address</h5>
                <p>
                  1031, Mahipalpur, Vasant Kunj Bypass Road,<br />
                  Mahipalpur Extension, New Delhi
                </p>
              </div>
            </div>

            {/* Website */}
            <div className="col-md-6 col-lg-3">
              <div className="contact-card">
                <div className="icon bounce">
                  <FaEarthAmericas className='fs-2' />
                </div>
                <h5 className="mt-3">Website</h5>
                <p>
                  <a
                    href="https://www.vhotelthegrandshoba.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    www.vhotelthegrandshoba.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

       <section className="py-5 ">
      <div className="container">
        <div className="row g-4 align-items-stretch">
          {/* Google Map */}
          <div className="col-lg-6">
            <div className="map-wrapper shadow rounded overflow-hidden h-100">
              <iframe
                title="V Hotel Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.020370246228!2d77.11758611508342!3d28.62895798241632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1ca3b9cd67bb%3A0x8bb5ef22fdb780ec!2sV%20Hotel%20The%20Grand%20Shoba%20(Delhi%20Airport)!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
      <section className="py-5 ">
        <div className="container">
          <div className="row g-4 align-items-stretch">
            {/* Google Map */}
            <div className="col-lg-6">
              <div className="map-wrapper shadow rounded overflow-hidden h-100">
                <iframe
                  title="V Hotel Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.020370246228!2d77.11758611508342!3d28.62895798241632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1ca3b9cd67bb%3A0x8bb5ef22fdb780ec!2sV%20Hotel%20The%20Grand%20Shoba%20(Delhi%20Airport)!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>

          {/* Contact Form */}
          <div className="col-lg-6">
            <div className="form-box p-4 h-100">
              <h4 className="mb-4 text-center " style={{color:"#d4af37"}}>Contact Details</h4>
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name*"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email*"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Your Mobile Number*"
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Your Comment*"
                    required
                  ></textarea>
                </div>
                <div className="d-grid" >
                  <button type="submit" className="btn btn-gold" style={{backgroundColor:"#d4af37" , color:"white"}}>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
            {/* Contact Form */}
            <div className="col-lg-6">
              <div className="form-box p-4 h-100">
                <h4 className="mb-4 text-center " style={{ color: "#d4af37" }}>Contact Details</h4>
                <form>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name*"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email*"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Your Mobile Number*"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Your Comment*"
                      required
                    ></textarea>
                  </div>
                  <div className="d-grid" >
                    <button type="submit" className="btn btn-gold" style={{ backgroundColor: "#d4af37", color: "white" }}>
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

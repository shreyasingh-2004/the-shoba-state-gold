import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaEarthAmericas } from "react-icons/fa6";
import Formvalidators from './FormValidator';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  let [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })

  let [errorMessage, setErrorMessage] = useState({
    name: "Name Field Is Required",
    phone: "Phone Field Is Required",
    email: " Email Field Is Required",
  })
  let [show, setShow] = useState(false)
  let navigate = useNavigate()
  const getInputData = (e) => {
    let { value, name } = e.target

    setErrorMessage((old) => {
      return {
        ...old,
        [name]: Formvalidators(e)
      }
    })

    setData((x) => {
      return {
        ...x,
        [name]: value
      }
    })
  }

  const postData = async (e) => {
    try {
      e.preventDefault();
      let error = Object.values(errorMessage).find((x) => x !== "");
      if (error) {
        setShow(true);
      } else {
        let response = await fetch("https://vhotelthegrandshoba.com/api/contactus", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        });

        let result = await response.json();
        if (result.result === "Done") {
          toast.success("Message Send Successfully")
          navigate("/")

        }
        else
          alert("Internal Server Error ")
      }

    } catch (error) {
      console.error("POST error:", error);
    }
  };


  return (
    <>
      <div className="contact-hero">
        <div className="overlay">
          <Container className="text-white text-center hero-text">
            <h1 className="display-5 fw-bold">Contact Us</h1>
          </Container>

        </div>
      </div>

      <section className="py-5  contact-section" style={{ background: "#0b0c10" }}>
        <div className="container text-center">
          <h2 className="mb-5 fw-bold text-uppercase " style={{ color: "wheat" }}>Contact Us</h2>
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

      <section className="py-5 " style={{ background: "#0b0c10" }}>
        <div className="container">
          <div className="row g-4 align-items-stretch">
            {/* Google Map */}
            <div className="col-lg-6">
              <div className="map-wrapper shadow rounded overflow-hidden h-100">
                <iframe
                  title="V Hotel Map"
                  src="https://www.google.com/maps/embed/v1/place?q=V+Hotel+The+Grand+Shoba+(Delhi+Airport)+1031,+Mahipalpur+,+Vasant+kunj+Bypass,+Road,+Mahipalpur+Extension,+New+Delhi,+delhi,+Delhi+110037&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
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
              <div className="form-box shadow p-4 rounded h-100">
                <h4 className="mb-4 text-center " style={{ color: "wheat" }}>Contact Details</h4>
                <form onSubmit={postData}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name*"
                      name="name"
                      onChange={getInputData}
                    />
                  </div>
                                  {show && errorMessage.name?<p className='text-danger'>{errorMessage.name}</p>:""}
                  <div className="mb-3">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Your Email*"
                      onChange={getInputData}
                    />
                  </div>
                  {show && errorMessage.email ? <p className='text-danger'>{errorMessage.email}</p> : ""}
                  <div className="mb-3">
                    <input
                      name="phone"
                      type="number"
                      className="form-control"
                      placeholder="Your Mobile Number*"
                      onChange={getInputData}
                    />
                  </div>
                  {show && errorMessage.phone ? <p className='text-danger'>{errorMessage.phone}</p> : ""}
                  <div className="mb-3">
                    <textarea
                      name='message'
                      className="form-control"
                      rows="4"
                      placeholder="Your Comment*"
                      onChange={getInputData}
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
  )
}
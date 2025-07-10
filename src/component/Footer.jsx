import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-bg">
      <div className="container py-4">
        <div className="row">

          {/* About */}
          <div className="col-md-4 mb-4">
            <h5>About Us</h5>
            <p>
              Experience the essence of ageless luxury and warm hospitality at our beautiful hotels and banquets, where comfort is combined with luxury to build lasting moments, celebrations, events, and precious memories that last an eternity with matchless service.
            </p>
            <div className="d-flex footer-social mt-3">
              <a href="https://www.facebook.com/people/Vhotel-The-Grand-Shoba/61576868909506/?rdid=zf8iSXaAYZXlWgng&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16iPHYr1yE%2F" className="social-icon" target="_blank"rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://www.instagram.com/vhotelthegrandshoba/?igsh=MTZjc3Bxb25ndWFqcw%3D%3D#" className="social-icon" target="_blank"rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://www.youtube.com/watch?v=UixEVGN09YU" className="social-icon" target="_blank"rel="noopener noreferrer"><FaYoutube /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5>Quick Links</h5>
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/about" className="footer-link">About Us</Link>
            <Link to="/rooms" className="footer-link">Rooms</Link>
            <Link to="/dining" className="footer-link">Dining</Link>
            <Link to="/contact" className="footer-link">Contact</Link>
          </div>

          {/* Newsletter / Contact */}
          <div className="col-md-4 mb-4">
            <h5>Newsletter</h5>
            <p>Subscribe for updates, offers, and news.</p>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
              <button className="btn" type="button">Subscribe</button>
            </div>

            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li className="d-flex align-items-center mb-2">
                <FaMapMarkerAlt style={{ color: '#d4af37', marginRight: '10px' }} />
                <a
                  href="https://www.google.com/maps/place/PERFECT+GLOBAL+CONSULTANCY/@28.6507653,77.1807411,15z/data=!4m10!1m2!2m1!1sB-4,+First+Floor,+Prehlad+Market,+DB+Gupta+Rd,+Karol+Bagh,+New+Delhi,+110005!3m6!1s0x390d03f178f101b9:0x1ea0ab9076b37328!8m2!3d28.6546314!4d77.1896802!15sCkxCLTQsIEZpcnN0IEZsb29yLCBQcmVobGFkIE1hcmtldCwgREIgR3VwdGEgUmQsIEthcm9sIEJhZ2gsIE5ldyBEZWxoaSwgMTEwMDA1WkgiRmIgNCBmaXJzdCBmbG9vciBwcmVobGFkIG1hcmtldCBkYiBndXB0YSByZCBrYXJvbCBiYWdoIG5ldyBkZWxoaSAxMTAwMDWSAQpjb25zdWx0YW50mgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVJRTldORFlsOTNSUkFCqgGxAQoIL20vMGRsdjAKCC9tLzBsN184CggvbS8wbjA3MxABKiIiHmIgNCBmaXJzdCBmbG9vciBwcmVobGFkIG1hcmtldCgAMh8QASIb7tsteeTHA5gYSd0VOPjAsfG3e1RLcumoYtDUMkoQAiJGYiA0IGZpcnN0IGZsb29yIHByZWhsYWQgbWFya2V0IGRiIGd1cHRhIHJkIGthcm9sIGJhZ2ggbmV3IGRlbGhpIDExMDAwNeABAPoBBAgAEDg!16s%2Fg%2F11y9d0fxg4?entry=ttu&g_ep=EgoyMDI1MDYwOS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link mb-0"
                >
                  1031, Mahipalpur , Vasant kunj Bypass, Road, Mahipalpur Extension, New Delhi
                </a>
              </li>
              {/* Phone */}
              <li className="d-flex align-items-start mb-2">
                <div className="me-2" style={{ marginTop: '3px' }}>
                  <FaPhoneAlt style={{ color: '#d4af37' }} />
                </div>
                <div className="footer-contact-group gap-3">
                  <a href="tel:+919811320209" className="footer-link mb-0">+91 9811320209</a>
                  <a href="tel:+919811226576" className="footer-link mb-0">+91 9811226576</a>
                </div>
              </li>

              {/* Email */}
              <li className="d-flex align-items-start">
                <div className="me-2" style={{ marginTop: '3px' }}>
                  <FaEnvelope style={{ color: '#d4af37' }} />
                </div>
                <div className="footer-contact-group">
                  <a href="mailto:info@vhotelthegrandshoba.com" className="footer-link mb-0" target="_blank"rel="noopener noreferrer">info@vhotelthegrandshoba.com</a>
                  <a href="mailto:booking@vhotelthegrandshoba.com" className="footer-link mb-0" target="_blank"rel="noopener noreferrer">booking@vhotelthegrandshoba.com</a>
                </div>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom Divider */}
        <hr className="border-top" />
        <p className="text-center mt-3 mb-0" style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)" }}>
          © {new Date().getFullYear()} The Grand Shoba. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-bg">
      <div className="container py-4">
        <div className="row">

          {/* About */}
          <div className="col-md-4 mb-4">
            <h5>About Us</h5>
            <p>
            Live the experience of timeless luxury and gracious hospitality at our stunning hotels and banquets, where luxury is matched with comfort to create unforgettable moments, celebrations, events, and treasured memories that last a lifetime with unparalleled service.
            </p>
            <div className="d-flex footer-social mt-3">
              <a href="https://facebook.com" className="social-icon"><FaFacebookF /></a>
              <a href="https://instagram.com" className="social-icon"><FaInstagram /></a>
              <a href="https://x.com/Anupkhanna9971" className="social-icon"><FaTwitter /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5>Quick Links</h5>
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/about" className="footer-link">About Us</Link>
            <Link to="/rooms" className="footer-link">Rooms</Link>
            <Link to="dining" className="footer-link">Dining</Link>
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
                  FIRST FLOOR, PREHLAD MARKET, B-4, Block 52, Karol Bagh, New Delhi, Delhi, 110005
                </a>
              </li>
              <li className="d-flex align-items-center mb-2">
                <FaPhoneAlt style={{ color: '#d4af37', marginRight: '10px' }} />
                <a href="tel:+919971522879" className="footer-link mb-0">
                  +91 9971522879
                </a>
              </li>
              <li className="d-flex align-items-center">
                <FaEnvelope style={{ color: '#d4af37', marginRight: '10px' }} />
                <a href="mailto:info@perfectconsultancy.co" className="footer-link mb-0">
                info@perfectconsultancy.co
                </a>
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

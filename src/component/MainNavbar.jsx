import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import logo from "../assets/img/logo.svg";

const MainNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setExpanded(false); // Close menu on route change
  }, [location]);

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'gallery', label: 'Gallery', path: '/gallery' },
    { id: 'room', label: 'Rooms', path: '/room' },
    { id: 'dining', label: 'Dining', path: '/dining' },
    { id: 'corportae', label: 'Corporate', path: '/corporate'},
    { id: 'contact', label: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      <Navbar
        expand="lg"
        className={`main-navbar ${scrolled ? 'scrolled shadow-sm' : ''}`}
        fixed="top"
      >
        <Container className="navbar-container-custom">
          <Navbar.Brand as={Link} to="/" className="p-0">
            <img src={logo} alt="Hotel The Grand Shoba" className="navbar-logo" />
          </Navbar.Brand>

          <Button
            as={Link}
            to="/room"
            className="book-now-btn-mobile d-lg-none me-2"
            variant="primary"
          >
            BOOK NOW
          </Button>

          <Navbar.Toggle
            aria-controls="main-navbar"
            className="border-0 d-lg-none"
            onClick={() => setExpanded(!expanded)}
          >
            <div className={`navbar-toggler-animated ${expanded ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </Navbar.Toggle>

          <Navbar.Collapse id="main-navbar" className="d-none d-lg-block">
            <Nav className="ms-auto align-items-lg-center">
              {navItems.map((item) => (
                <Nav.Link
                  key={item.id}
                  as={Link}
                  to={item.path}
                  className={`nav-link-custom ${location.pathname === item.path ? 'active' : ''}`}
                >
                  <span className="nav-link-wrapper">
                    <span className="nav-link-text">{item.label}</span>
                    <span className="nav-link-underline"></span>
                  </span>
                </Nav.Link>
              ))}
              <Button
                as={Link}
                to="/room"
                className="book-now-btn ms-lg-3 mt-3 mt-lg-0"
                variant="primary"
              >
                BOOK NOW
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Mobile Dropdown Menu */}
      <div className={`mobile-slide-down-menu ${expanded ? 'open' : ''}`}>
        <Nav className="flex-column p-4">
          {navItems.map((item) => (
            <Nav.Link
              key={item.id}
              as={Link}
              to={item.path}
              className={`nav-link-custom ${location.pathname === item.path ? 'active' : ''}`}
              onClick={() => setExpanded(false)}
            >
              {item.label}
            </Nav.Link>
          ))}
          <Button
            as={Link}
            to="/booking"
            className="book-now-btn mt-3"
            variant="primary"
            onClick={() => setExpanded(false)}
          >
            BOOK NOW
          </Button>
        </Nav>
      </div>
    </>
  );
};

export default MainNavbar;

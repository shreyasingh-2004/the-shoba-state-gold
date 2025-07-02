import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Booking = () => {
    const [formData, setFormData] = useState({
        checkIn: '',
        checkOut: '',
        adults: 1,
        children: 0,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleGuestChange = (key, value) => {
        setFormData(prev => ({
            ...prev,
            [key]: Math.max(0, prev[key] + value),
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Booking from ${formData.checkIn} to ${formData.checkOut} for ${formData.adults} adults and ${formData.children} children.`);
    };

    return (
        <div className="booking-hero">
            <div className="overlay">
                <Container className="text-white text-center hero-text">
                    <h1 className="display-5 fw-bold">Book Your Stay</h1>
                    <p className="lead mb-4">Where Comfort Meets Elegance</p>
                </Container>

                <Container className="form-container shadow-lg">
                    <Form onSubmit={handleSubmit} className="form-wrapper">
                        <Row className="g-4">
                            <Col xs={12} md={6} lg={3}>
                                <Form.Label>Check-In</Form.Label>
                                <Form.Control type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} required />
                            </Col>
                            <Col xs={12} md={6} lg={3}>
                                <Form.Label>Check-Out</Form.Label>
                                <Form.Control type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} required />
                            </Col>
                            <Col xs={12} md={6} lg={2}>
                                <Form.Label>Adults</Form.Label>
                                <div className="guest-control">
                                    <Button variant="outline-dark" size="sm" onClick={() => handleGuestChange('adults', -1)}>-</Button>
                                    <span>{formData.adults}</span>
                                    <Button variant="outline-dark" size="sm" onClick={() => handleGuestChange('adults', 1)}>+</Button>
                                </div>
                            </Col>
                            <Col xs={12} md={6} lg={2}>
                                <Form.Label>Children</Form.Label>
                                <div className="guest-control">
                                    <Button variant="outline-dark" size="sm" onClick={() => handleGuestChange('children', -1)}>-</Button>
                                    <span>{formData.children}</span>
                                    <Button variant="outline-dark" size="sm" onClick={() => handleGuestChange('children', 1)}>+</Button>
                                </div>
                            </Col>
                            <Col xs={12} lg={2} className="d-grid align-items-end">
                                <Button type="submit" className="btn btn-dark w-100">Book Now</Button>
                            </Col>
                        </Row>
                    </Form>

                </Container>
            </div>
        </div>
    );
};

export default Booking;

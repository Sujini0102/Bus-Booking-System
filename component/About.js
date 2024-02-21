// About.jsx

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';
const About = () => {
  return (

    <Container className='AboutPage'>
    <Container className="mt-5">
      <Row>
        <Col md={6}>
        <i class="fa-solid fa-circle-info fa-sm"></i>
          <h2>About Us</h2>
          <p>
            Welcome to Urban Roamer! We strive to provide a seamless and convenient
            platform for booking bus tickets. Our mission is to make travel easy and enjoyable
            for everyone.
          </p>
        </Col>
       
        <Col md={12}>
        <i class="fa-solid fa-phone-volume fa-sm"></i>
          <h2>Contact</h2>
          <ul>
            <li>Phone Number:9585451963</li>
            <li>Telephone:0422 1800 1800</li>
            
          </ul>
        </Col>

      </Row>
    </Container>
    </Container>
    


    
  );
};

export default About;

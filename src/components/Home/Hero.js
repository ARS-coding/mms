import React from 'react'
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const Hero = () => {
    return (
        <section className="flex align-center justify-start hero">
            <div className="over-lay-bg-color"></div>

            <Container className=''>
                <Row>
                    <Col>
                        <p className="hero-subtext">We are the solution for your restaurant's <span className="bg-light colored">.Branches</span></p>
                        <h2 className="hero-title">Manage You menu's meals.</h2>
                        <Button className="bg-dark btn-custom hero-btn">Get Started</Button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Hero

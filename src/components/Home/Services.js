import React from 'react'
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Figure } from 'react-bootstrap';
import servicesImg from './../../assets/images/services.svg';

const services = () => {
    return (
        <section className="services">
            <Container>
                <Row>
                    <Col md={12} lg={6}>
                        <Figure>
                            <Figure.Image
                                width={'100%'}
                                height={'100%'}
                                alt="171x180"
                                src={servicesImg}
                            />
                        </Figure>
                    </Col>
                    <Col md={12} lg={6}>
                        <h3 className="services-title"><span className="bg-dark light-colored">.Our Services</span> for your restaurant</h3>
                        <p className="services-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto at quidem blanditiis minima assumenda molestias magni deserunt, accusamus accusantium quae hic. Facilis in est necessitatibus?</p>
                        <p className="services-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto at quidem blanditiis minima assumenda molestias magni deserunt, accusamus accusantium quae hic. Facilis in est necessitatibus?</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default services

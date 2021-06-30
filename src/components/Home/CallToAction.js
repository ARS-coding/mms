import React from 'react'
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
const CallToAction = () => {
    return (
        <section className="flex align-center justify-start over-layed">
            <div className="over-lay-bg-color"></div>
            <Container className=''>
                <Row>
                    <Col md={8}>
                        <h2 className="call-to-action-title ">Buy our product.</h2>
                        <p className="call-to-action-text">MMS is the best product of it's industry and is gonna help your bussinnes to thrive.</p>
                        <Button className="bg-dark call-to-action-btn-custom">Buy now</Button>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CallToAction

import React from "react";
import { Twitter } from 'react-bootstrap-icons';
import { Github } from 'react-bootstrap-icons';
import { Linkedin } from 'react-bootstrap-icons';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="custom-footer">
            <Container>
                <Row>
                    <Col>
                        <div className="flex align-center">

                            <small className="footer-item">
                                Developed By: <span>Mohammed Zakaria</span>
                            </small>
                            <Link to={{ pathname: "https://github.com/MohammaZakaria" }} target={"_blank"}><Github className="footer-item custom-icon" /></Link>
                            <Link to={{ pathname: "https://www.linkedin.com/in/mohammad-al-alaya/" }} target={"_blank"} > <Linkedin className="footer-item custom-icon" /></Link>
                            <Link to={{ pathname: "https://twitter.com/ZakariaMo7ammad?s=09" }} target={"_blank"} > <Twitter className="footer-item custom-icon" /></Link>
                        </div>
                    </Col>
                    <Col className="text-right">
                        <div>
                            <Link to={{ pathname: "https://twitter.com/ARS_coding" }} target={"_blank"}><Twitter className="footer-item custom-icon" /></Link>
                            <Link to={{ pathname: "https://www.linkedin.com/in/ali-r%C4%B1za-%C5%9Fahin-3a5721202/" }} target={"_blank"}><Linkedin className="footer-item custom-icon" /></Link>
                            <Link to={{ pathname: "https://github.com/ARS-coding" }} target={"_blank"}><Github className="footer-item custom-icon" /></Link>
                            <small className="footer-item ">
                                Developed By: <span>Ali Rıza Şahin</span>
                            </small>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;
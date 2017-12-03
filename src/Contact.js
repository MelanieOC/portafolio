import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact">
            <div className="titleContact">Contáctame</div>
            <section className="container redes-sociales">
                <Row>
                    <Col lg={3} md={6} sm={6} xs={12} >
                        <a className="enlace" href="tel:987880986">
                            <i className="icon fa fa-phone-square"></i>
                            <div className="datos">+51 987880986</div>
                        </a>
                    </Col>
                    <Col lg={3} md={6} sm={6} xs={12}>
                        <a className="enlace" href="mailto:melanie.ocharan@gmail.com" >
                            <i className="icon fa fa-envelope-square"></i>
                            <div className="datos">melanie.ocharan@gmail.com</div>
                        </a>
                    </Col>
                    <Col lg={3} md={6} sm={6} xs={12}>
                        <a className="enlace" href="https://github.com/melanieoc" target="_blank">
                            <i className="icon fa fa-git-square" ></i>
                            <div className="datos">MelanieOC</div>
                        </a>
                    </Col>
                    <Col lg={3} md={6} sm={6} xs={12}>
                        <a className="enlace" href="https://www.linkedin.com/in/melanie-ocharan-cardenas/" target="_blank">
                            <i className="icon fa fa-linkedin-square" ></i>
                            <div className="datos">Melanie Ocharan</div>
                        </a>
                    </Col>
                </Row>
            </section>
        </section >
    )
}

export default Contact;
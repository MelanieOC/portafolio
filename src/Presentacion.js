import React from 'react';
import foto from './img/IMG_4168.JPG';
import './Presentacion.css';
import { Row, Col, Image } from 'react-bootstrap';

const Presentacion = () => {
    return (
        <div align='center'>
            <h1 style={{color: '#ed4e6e'}}>¡Hola!</h1>
            <div className='description'>
                <Row className="text-center">
                    <Col lg={8} md={8} xs={12} sm={6} className='words'>
                        <div >
                            <p>Mi nombre es Melanie Ocharan Cardenas. Egresada de Laboratoria y egresada de Ingeniería Química en la UNSA.</p>
                            <p>Me encanta programar, principalmente cuando se necesita pensar en un algoritmo. Uno de mis pasatiempos en resolver asertijos, rompecabezas y juegos mentales.</p>
                            <p>Me gusta los retos, soy competitiva, y siempre doy lo mejor de mí. Prueba de ello son los reconocimientos que he logrado.</p>
                        </div>
                    </Col>
                    <Col lg={4} md={4} xs={12} sm={6} align='center'>
                        <Image src={foto} responsive style={{ transform: 'rotate(5deg)' }} />
                    </Col>
                </Row>

            </div>
        </div>

    )
}

export default Presentacion;
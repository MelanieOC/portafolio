import React, { Component } from 'react';
import './Trabajo.css';
import cinco from './img/5_mejores.png';
import unicornio from './img/unicornio.png';
import rocking from './img/ROCKING.png';
import squad from './img/mejor_squad.png';
import { Row, Col } from 'react-bootstrap';

const Caja = ({ item }) => {
    return (
        <Col lg={3} md={3} sm={4} xs={6} s>
            <div className='cajita'>
                <i class={"fa fa-" + item.icon} aria-hidden="true"></i>
                <h3>{item.name}</h3>
                <div className='caja_trans'>
                    <div>
                        {
                            item.description.map((a, i) => <p key={i}>{a}</p>)
                        }
                    </div>
                </div>
            </div>
        </Col>
    )
}
const Trabajo = () => {
    const lista = [
        { name: 'Excelencia', icon: 'graduation-cap', description: ['Siempre doy lo mejor de mí','Enfoque a los resultados'] },
        { name: 'Agile', icon: 'code', description: ['Generar valor continuamente','Rápido y eficaz'] },
        { name: 'Creatividad', icon: 'lightbulb-o', description: ['"Pensando fuera de la caja"', ' Buscar soluciones de forma diferente'] },
        { name: 'Diseño web', icon: 'laptop', description: [''] },
        { name: 'Trabajo en equipo', icon: 'users', description: ['"Compartir es aprender"', 'Me gusta escuchar las ideas de otros y aprender de ello.'] },
        { name: 'Diseño Responsive', icon: 'mobile', description: ['¿Quién no usa un smartphone?'] },
        { name: 'Autodidacta', icon: 'search ', description: ['"Aprender a aprender"', 'Aprendizaje continuo'] },
        { name: 'Feedback', icon: 'refresh', description: ['Retroalimentación','Mejora continua del proyecto'] }]
    const reconocimientos = [
        { name: 'Top 5', img: cinco },
        { name: 'La más tech', img: unicornio },
        { name: 'Mejor squad', img: squad },
        { name: 'La rompes', img: rocking }
    ]

    return (
        <div id='trabajo'>
            <h1>Mi forma de trabajo</h1>
            <Row>
                {
                    lista.map((item, index) => <Caja item={item} key={index} />)
                }
            </Row>
        </div>
    )
}

export default Trabajo;
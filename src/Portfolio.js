import React from 'react';
import proyectos from './Proyectos.js';
import { Row, Col, Grid, Image } from 'react-bootstrap';
import './Portfolio.css';
const Proyect = ({ proyecto, reverso }) => {
    return (
        <Row>
            {
                reverso ?
                    <Col lg={6} lgPush={6} md={6} mdPush={6} xs={12} sm={12}>
                        <Image src={proyecto.img} alt={proyecto.name} responsive />
                    </Col>
                    :
                    <Col lg={6} md={6} xs={12} sm={12}>
                        <Image src={proyecto.img} alt={proyecto.name} responsive />
                    </Col>
            }
            {
                reverso ?
                    <Col lg={6} lgPull={6} md={6} mdPull={6} xs={12} sm={12}>
                        <h2>{proyecto.name}</h2>
                        <div>
                            {
                                proyecto.icons.map((item, index) => <i class={"fa fa-" + item} key={index}></i>)
                            }
                        </div>
                        <div className='descrip'>
                            {
                                proyecto.description.map((a, i) => <p key={i}>{a}</p>)
                            }
                        </div>
                        <div className='buttons'>
                            <a href={proyecto.code} className='btn btn-large' target="_new33">Github</a>
                            <a href={proyecto.demo} className='btn btn-large' target="_new3">Demo</a>
                        </div>
                    </Col>
                    :
                    <Col lg={6} md={6} xs={12} sm={12}>
                        <h2>{proyecto.name}</h2>
                        <div>
                            {
                                proyecto.icons.map((item, index) => <i class={"fa fa-" + item} key={index}></i>)
                            }
                        </div>
                        <div className='descrip'>
                            {
                                proyecto.description.map((a, i) => <p key={i}>{a}</p>)
                            }
                        </div>
                        <div className='buttons'>
                            <a href={proyecto.code} className='btn btn-large' target="_new33">Github</a>
                            <a href={proyecto.demo} className='btn btn-large' target="_new3">Demo</a>
                        </div>
                    </Col>
            }

        </Row>
    )
}

const Portfolio = () => {
    return (
        <Grid id='proyectos'>
            <h1>Proyectos</h1>
            <h3>Te demuestro que puedo hacer</h3>
            <div className='trabajos'>
                {proyectos.map((a, i) => {
                    if (i % 2) {
                        return <Proyect proyecto={a} key={i} reverso />
                    } else {
                        return <Proyect proyecto={a} key={i} />
                    }
                })}
            </div>
        </Grid>
    );
}

export default Portfolio;
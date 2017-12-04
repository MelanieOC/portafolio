import React, { Component } from 'react';
import './App.css';
import Contact from './Contact';
import Skills from './Skills.js';
import Portfolio from './Portfolio';
import Presentacion from './Presentacion';
import Navbar from './Navbar';
import Trabajo from './Trabajo';
import Responsive from 'react-responsive';
import MediaQuery from 'react-responsive';

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

const Angle = ({ direccion }) => {
  const mesures = { top_left: '0, 200 0, 0 200, 0', bottom_left: '200, 200 0, 200 0, 0', bottom_right: '200, 0 200, 200 0, 200', top_right: '0, 0 200, 0 200, 200' }
  return (
    <div className={'angle_' + direccion}>
      <svg viewBox='0 0 200 200' preserveAspectRatio='none'>
        <polygon points={mesures[direccion]}></polygon>
      </svg>
    </div>
  );
}

const Intro = ({ altura }) => {
  console.log(altura);
  return (
    <div className='inner-container' >
      <div className='name reverso'>
        <h1>MELANIE </h1>
        <h1 style={{ fontSize: '2em' }}>OCHARAN</h1>
        <p>Front-end Developer Jr.</p>
      </div>
    </div>
  )
}
//<Navbar2 page={altura} />
const App = () => {
  const altura = window.screen.height;
  return (
    <div>
      <section className='outer-container' id='intro'>
        <MediaQuery query="(max-device-width: 768px)">
          <Navbar page={altura - 110} />        
        </MediaQuery>
        <MediaQuery query="(min-device-width: 769px)">
          <Navbar page={altura - 250} />
        </MediaQuery>
        <Intro  />
      </section>
      <section className='outer-container' id='aboutme'>
        <Angle direccion='top_right' />
        <div className='inner-container'>
          <Presentacion />
        </div>
        <Angle direccion='bottom_right' />
      </section>
      <section className='outer-container' id='how'>
        <div className='color-wrapper'>
          <div className='inner-container' align='center'>
            <Trabajo />
          </div>
          <Angle direccion='bottom_left' />
        </div>
      </section>
      <section className='outer-container' id='skills'>
        <div className='inner-container'>
          <Skills />
        </div>
        <Angle direccion='bottom_right' />
      </section>
      <section className='outer-container' id='portfolio'>
        <div className='inner-container'>
          <Portfolio />
        </div>
      </section>
      <section id='contact'>
        <Angle direccion='top_left' />
        <div className='inner-container'>
          <Contact />
        </div>
      </section>
    </div>
  );
}



export default App;

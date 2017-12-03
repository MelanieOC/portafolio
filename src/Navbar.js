import React, { Component } from 'react';
import './Navbar.css';
import logo from './img/MO-LOGO-.png';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            change: false
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', () => {
            if (this.props.page - 100 < window.pageYOffset) {
                this.setState({
                    change: true
                })
            } else {
                this.setState({
                    change: false
                });
            }
        })
    }
    render() {
        const change = () => {
            this.setState({
                open: !this.state.open
            })
        }
        return (
            <div className='nav2' >
                <div id="toggle" className={this.state.open ? this.state.change ? "pink on" : 'on' : this.state.change ? "pink" : ''} onClick={change}><span></span></div>
                <div id="menu">
                    <ul>
                        <li><a className='logo' href="#intro">
                            <img src={logo} alt='logo'/>
                        </a></li>
                        <li><a className='btn-2' href="#aboutme">Quién soy</a></li>
                        <li><a className='btn-2' href="#how">Cómo lo hago</a></li>
                        <li><a className='btn-2' href="#skills">Con qué lo hago</a></li>
                        <li><a className='btn-2' href="#portfolio">Qué se hacer</a></li>
                        <li><a className='btn-2' href="#contact">Como encontrarme</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navbar;
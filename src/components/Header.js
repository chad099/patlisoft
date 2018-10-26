import React from 'react';
import logo from '../styles/images/logo.png';
import computer from '../styles/images/computer.png';

const Header = () => {
    return (
        <div>
            <header className="banner">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="#">
                            <img src={logo} width="200px" alt="logo"/>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="fa fa-bars"></span>
                        </button>
                        
                        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About </a>
                                </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="#">Project</a>
                                </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="/services">Services</a>
                                </li>
                                    
                                    <li className="nav-item">
                                    <a className="nav-link" href="#">Contect</a>
                                </li>    
                            </ul>
                        </div>
                    </nav>
                    </div>
                    </header>
        
                    <div className="banner-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="banner-content-detail">
                                        <h2>MOBILE DEVELOPMENT</h2>
                                        <p>Patlisoft specializes in Mobile development for both requirements B2B and B2C. We focus on continuous development process and discipline which provides dividends in terms of quality and effectiveness.</p>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                <div className="computer-img">
                                    <img src={computer} />
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default Header;

import React from 'react';
import computer from '../styles/images/computer.png';

const Header = () => {
    return (
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
                                <img src={computer} alt="computer"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    );
};
export default Header;

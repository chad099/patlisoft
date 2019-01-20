import React from 'react';
import icon1 from '../styles/images/icon-1.png';
import icon2 from '../styles/images/icon-2.png';
import icon3 from '../styles/images/icon-3.png';
import icon4 from '../styles/images/icon-4.png';
import icon5 from '../styles/images/icon-5.png';
import icon6 from '../styles/images/icon-6.png';

const Project = () => {
    return (
        <div className="service-section">
            <div className="services-headings">
                <div className="right-heading">
                    <h1>Project</h1>
                </div>
                <div className="l-heading">
                    <div className="left-heading"> 
                        <h4>Our Project</h4>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                        <div className="services-detaile">
                            <img src={icon1}  alt="icon1"/>
                            <h5>Web Designing</h5>
                            <p>Patlisoft is a Professional Web design company and specializes in serving cutting edge design results for website.</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                        <div className="services-detaile">
                            <img src={icon2}  alt="icon2"/>
                            <h5>Web Development</h5>
                            <p>Web site gives a glance over online image and business. Website should be developed in such a way that delivers message to potential customers. </p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                        <div className="services-detaile">
                            <img src={icon3}  alt="icon3"/>
                            <h5>Internet Marketing</h5>
                            <p>Internet marketing is the process of mark- eting a brand using the Internet. Whether business is purely an online entity or a traditional business.</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                        <div className="services-detaile">
                            <img src={icon4}  alt="icon4"/>
                            <h5>SEO</h5>
                            <p>We take care of all the SEO services that company requires and integrate them into Web and IT solutions.</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                        <div className="services-detaile">
                            <img src={icon5}  alt="icon5"/>
                            <h5>Mobile Application</h5>
                            <p>We are one of the leading Mobile App development company in India. We have a professional team that is well experienced in making applications for Android as well as IOS.</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                        <div className="services-detaile">
                             <img src={icon6}  alt="icon6"/>
                            <h5>Responsive Design</h5>
                            <p>We have been on the front with our excellent experience in responsive web development using industry standard frameworks.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Project;
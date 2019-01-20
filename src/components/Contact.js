import React from 'react';
import locationicon from '../styles/images/location-icon.png';
import address from '../styles/images/address.png';
import phonecall from '../styles/images/phone-call.png';

const Contact = () => {
    return (
        <div>
        <div className="contect-us-section">
                        <div className="services-headings">
                            <div className="right-heading">
                                <h1>Contact Us</h1>
                            </div>
                            <div className="l-heading">
                                <div className="left-heading"> 
                                    <h4>Touch with us</h4>
                                </div>
                            </div>
                        </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                        <div className="contect-box">
                            <div className="contect-inner-content">
                            <div className="blue-background">
                            </div>
                            <div className="overlay-white-box">
                                <img src={locationicon} alt="locationicon"/>
                                <h4>Address</h4>
                                <p>Our Office</p>
                                <p> F-174, Phase 8-B, Industrial Area,
                                Mohali, Punjab (160055) India</p>

                            </div>
                        </div>
                        </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                        <div className="contect-box">
                            <div className="contect-inner-content">
                            <div className="blue-background">
                            </div>
                            <div className="overlay-white-box">
                                <img src={address}  alt="address"/>
                                <h4>Email</h4>
                                <p>Email Us</p>
                                <p>  info@rexwebsolutions.com</p>

                            </div>
                        </div>
                        </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                        <div className="contect-box">
                            <div className="contect-inner-content">
                            <div className="blue-background">
                            </div>
                            <div className="overlay-white-box">
                                <img src={phonecall}  alt="phonecall"/>
                                <h4>Phone</h4>
                                <p> Call Us</p>
                                <p> +91 98135-65288 <br/>
                                    1-800-123-4121</p>

                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="drop-heading">
                <div className="services-headings">
                    <div className="right-heading">
                        <h1>DROP US A LINE</h1>
                    </div>
                    <div className="l-heading">
                    <div className="left-heading"> 
                    <h4>Touch with us</h4>
                    </div>
                
                    </div>
                </div>
            <div className="patlisoft-form-section">
                <div className="container">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <div className="request-form">
                            <h6>We would love to hear from you. </h6>
                                    <form>
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="email" className="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Subject</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Message</label>
                                            <textarea type="text" className="form-control"> </textarea> 
                                        </div>

                                        </form>
                                <a href="javascript:void" className="sub-btn">Send</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>    
        </div>  
    );
};
export default Contact;

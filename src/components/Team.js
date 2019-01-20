import React from 'react';
import client from '../styles/images/client.png';

const Team = () => {
    return (
      <div className="custmor-feedback">
    <div className="services-headings">
          <div className="right-heading">
            <h1>Portfolio</h1>
         </div>
          <div className="l-heading">
           <div className="left-heading"> 
          <h4>Client Feedback</h4>
         </div>
      
         </div>
    </div>
    <div className="container">
           <div className="feedback-container">
              <div className="row">
                <div className="col-lg-12">
            <div className="feedback owl-carousel owl-theme">
            <div className="item">
              <div className="feedback-box">
              <div className="row">
              <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                  <div className="client-view">
                      <img src={client}  alt="client"/>
                  </div>
              </div>
              <div className="col-12 col-sm-6 col-md-8 col-lg-8 col-xl-8">
                <div className="client-comment">
                     <p>Patlisoft , was an absolute pleasure to work with. He is a highly skilled graphics/web designer and was able to take our loose ideas and suggestions and turn them into very professional, elegant designs. We hope to work with him again in the near future. Once again, Patlioft delivers the goods! Thanks Mamta! "</p>
                     <span className="client-name">- Adam gilli</span>
                  </div>
              </div>
            </div>
          </div>
            </div>
            <div className="item">
              <div className="feedback-box">
              <div className="row">
              <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                  <div className="client-view">
                    <img src={client} alt="client"/>
                  </div>
              </div>
              <div className="col-12 col-sm-6 col-md-8 col-lg-8 col-xl-8">
                <div className="client-comment">
                     <p>Patlisoft , was an absolute pleasure to work with. He is a highly skilled graphics/web designer and was able to take our loose ideas and suggestions and turn them into very professional, elegant designs. We hope to work with him again in the near future. Once again, Patlioft delivers the goods! Thanks Mamta! "</p>
                     <span className="client-name">- Adam gilli</span>
                  </div>
              </div>
            </div>
          </div>
            </div>
            <div className="item">
              <div className="feedback-box">
              <div className="row">
              <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                  <div className="client-view">
                  <img src={client} alt="client"/>
                  </div>
              </div>
              <div className="col-12 col-sm-6 col-md-8 col-lg-8 col-xl-8">
                <div className="client-comment">
                     <p>Patlisoft , was an absolute pleasure to work with. He is a highly skilled graphics/web designer and was able to take our loose ideas and suggestions and turn them into very professional, elegant designs. We hope to work with him again in the near future. Once again, Patlioft delivers the goods! Thanks Mamta! "</p>
                     <span className="client-name">- Adam gilli</span>
                  </div>
              </div>
            </div>
          </div>
            </div>
            <div className="item">
              <div className="feedback-box">
              <div className="row">
              <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                  <div className="client-view">
                      <img src={client} alt="client"/>
                  </div>
              </div>
              <div className="col-12 col-sm-6 col-md-8 col-lg-8 col-xl-8">
                <div className="client-comment">
                     <p>Patlisoft , was an absolute pleasure to work with. He is a highly skilled graphics/web designer and was able to take our loose ideas and suggestions and turn them into very professional, elegant designs. We hope to work with him again in the near future. Once again, Patlioft delivers the goods! Thanks Mamta! "</p>
                     <span className="client-name">- Adam gilli</span>
                  </div>
              </div>
            </div>
          </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
  
    );
};

export default Team;
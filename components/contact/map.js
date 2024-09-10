import React from 'react';

const ContactMap = () => {
  return (
    <div className="container">
      <div className="row mt-lg-5 mt-md-5 mt-3 pb-5">
        <div className="col-lg-6 col-md-6 col-12">
          <div className="map-one mt-lg-5 mt-md-5 mt-3 clearfix">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <img
                  src="img/map-one.png"
                  alt="Map Location One"
                  className="img-fluid aos-init aos-animate"
                  data-aos="fade-down"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="aos-init aos-animate" data-aos="fade-up">
                  <div className="map-contact mt-lg-4 mt-md-4 mt-3 clearfix">
                    <span className="loc-i">
                      <img src="img/loc.png" alt="Location Icon" className="img-fluid" />
                    </span>
                    <p className="loc-con">
                      Level 3, Incuspaze Oberon WorkHub
                      Oberon Mall, NH Bye Pass, Padivattom,
                      Edappally, Kochi, Kerala 682024
                    </p>
                  </div>
                  <div className="map-contact mt-lg-3 mt-md-3 mt-3 clearfix">
                    <span className="loc-i">
                      <img src="img/email.png" alt="Email Icon" className="img-fluid" />
                    </span>
                    <p className="loc-con clr-ab">
                      <a
                        href="mailto:reachus@turnb.com"
                        className="clr-ab"
                        style={{ textDecoration: 'none' }}
                      >
                        reachus@turnb.com
                      </a>
                    </p>
                  </div>
                  <img
                    src="img/building.png"
                    alt="Building Image"
                    className="img-fluid mt-2 mb-2 d-block text-center m-auto wdth-b"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <div className="map-one mt-lg-5 mt-md-5 mt-3 clearfix">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <img
                  src="img/map-two.png"
                  alt="Map Location Two"
                  className="img-fluid aos-init aos-animate"
                  data-aos="fade-down"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="aos-init aos-animate" data-aos="fade-up">
                  <div className="map-contact mt-lg-4 mt-md-4 mt-3 clearfix">
                    <span className="loc-i">
                      <img src="img/loc.png" alt="Location Icon" className="img-fluid" />
                    </span>
                    <p className="loc-con">
                      RAG BIZ HQ, ADDIYAR Building, Sheikh Zayed Road, Dubai - 237951
                    </p>
                  </div>
                  <div className="map-contact mt-lg-3 mt-md-3 mt-3 clearfix">
                    <span className="loc-i">
                      <img src="img/email.png" alt="Email Icon" className="img-fluid" />
                    </span>
                    <p className="loc-con clr-ab">
                      <a
                        href="mailto:reachus@turnb.com"
                        className="clr-ab"
                        style={{ textDecoration: 'none' }}
                      >
                        reachus@turnb.com
                      </a>
                    </p>
                  </div>
                  <img
                    src="img/building2.png"
                    alt="Building Image"
                    className="img-fluid mt-4 mb-2 d-block text-center m-auto wdth-b2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;

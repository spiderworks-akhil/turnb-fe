import React from 'react';
import Slider from 'react-slick';

const BenefitsSection = () => {
    
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className="container">
      <div className="benefits-sec bg-white pt-lg-5 pt-md-5 pt-3 pb-lg-0 pb-md-0 pb-3 clearfix">
        <div className="text-center position-relative" data-aos="fade-down">
          <h2 className="title-ak2 font-htd ft-wt3 text-center mb-lg-5 mb-md-5 mb-5 pt-lg-4 pt-md-4 pt-2 mt-lg-0 mt-md-0 mt-4 clt"
              data-aos="zoom-in" data-aos-duration="1200">Benefits
          </h2>
        </div>

        <section className="testimonials pt-0 pb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-11 col-md-11 col-12">
                <Slider {...settings}>
                  {/* First Benefit */}
                  <div className="item">
                    <div className="bene-box text-center p-3 mt-lg-5 mt-md-5 mt-4 clearfix">
                      <div className="imgbn clearfix">
                        <img src="img/icons/m1.png" className="img-fluid d-block m-auto" alt="TABT" />
                      </div>
                      <div className="content-ben clearfix">
                        <h5 className="mt-lg-4 mt-md-4 mt-3">TABT</h5>
                        <p className="mt-lg-3">
                          These instructor-led sessions focus on current technologies, product applications,
                          fostering a culture of knowledge sharing and lifelong learning throughout the organization.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Second Benefit */}
                  <div className="item">
                    <div className="bene-box text-center p-3 mt-lg-5 mt-md-5 mt-4 clearfix">
                      <div className="imgbn clearfix">
                        <img src="img/icons/m2.png" className="img-fluid d-block m-auto" alt="Spot Award" />
                      </div>
                      <div className="content-ben clearfix">
                        <h5 className="mt-lg-4 mt-md-4 mt-3">Spot Award</h5>
                        <p className="mt-lg-3">
                          TurnB recognizes exceptional team members with the SPOT Award to boost and encourage
                          others to think out-of-the-box.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Add more slides here, following the same pattern */}
                </Slider>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BenefitsSection;

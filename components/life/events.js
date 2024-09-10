import React from 'react';
import Slider from 'react-slick';
import AOS from 'aos';

const LifeEventsSection = () => {
  // Slick settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    appendDots: dots => (
      <div style={{ bottom: '-30px' }}>
        <ul style={{ margin: '0px' }}>{dots}</ul>
      </div>
    ),
  };

  return (
    <div className="bg-lightgreen pt-lg-5 pt-md-5 pt-3 pb-lg-3 pb-md-3 pb-2 clearfix">
      <div className="container" data-aos="fade-up">
        <div className="text-center position-relative" data-aos="fade-down">
          <h2 className="title-ak2 font-htd ft-wt3 text-center mb-lg-5 mb-md-5 mb-3 pt-lg-4 pt-md-4 pt-2 mt-lg-0 mt-md-0 mt-4 clt">
            Events
          </h2>
        </div>
      </div>
      
      {/* EVENTS SECTION */}
      <section className="testimonials pt-0 pb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11 col-md-11 col-12">
              <Slider {...settings}>
                {/* Event 1 */}
                <div className="item">
                  <div className="shadow-effect text-center">
                    <img src="/img/e1.png" className="img-fluid d-block text-center" alt="Learning Sessions" />
                    <p className="mt-3 mb-0 text-center">Learning Sessions</p>
                  </div>
                </div>
                
                {/* Event 2 */}
                <div className="item">
                  <div className="shadow-effect text-center">
                    <img src="/img/e2.png" className="img-fluid d-block text-center" alt="Marathon" />
                    <p className="mt-3 mb-0 text-center">Marathon</p>
                  </div>
                </div>

                {/* Event 3 */}
                <div className="item">
                  <div className="shadow-effect text-center">
                    <img src="/img/e3.png" className="img-fluid d-block text-center" alt="Medical Test" />
                    <p className="mt-3 mb-0 text-center">Medical Test</p>
                  </div>
                </div>

                {/* Event 4 */}
                <div className="item">
                  <div className="shadow-effect text-center">
                    <img src="/img/e4.png" className="img-fluid d-block text-center" alt="Team Lunch" />
                    <p className="mt-3 mb-0 text-center">Team Lunch</p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LifeEventsSection;

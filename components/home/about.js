// components/AboutSection.js
import React, { useEffect } from 'react';
import AOS from 'aos';

const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-infographic clearfix">
      <section id="about" className="mt-lg-0 mt-md-0 mt-0 pt-0">
        <div className="bg-image-sec clearfix">
          <div className="container">
            <div className="row bg-white p-4 justify-content-center">
              <div className="col-lg-4 col-md-4 col-12">
                <div
                  className="text-center position-relative aos-init aos-animate"
                  data-aos="fade-down"
                >
                  <h1 className="title-akn text-lf mb-lg-4 mb-md-4 mb-3 mt-lg-0 mt-md-0 mt-4">
                    <span className="clr-g">Our <br /> Data-Driven</span>
                    <br />
                    <span className="clr-grn">Promise</span>
                  </h1>
                </div>
              </div>
              <div className="col-lg-8 col-md-8 col-12">
                <div
                  className="text-justify position-relative aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <p className="w-auto mt-0 text-justify mb-2">
                    At TurnB, we understand your business problems and leverage the power of analytics to deliver
                    data-driven solutions using a pioneering hybrid model that blends traditional consulting and advanced
                    analytics. By integrating design thinking with our domain knowledge to generate crucial insights, we
                    assist you in making informed decisions, and unlocking the true potential of your business.
                  </p>
                  <div className="knw-more mt-lg-3 mt-md-3 clearfix">
                    <a href="aboutus.html" className="btn btn-primary kn-mb">Know More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="intro">
                <h1 className="mr-bplong mb-0">Consult D5<sup>TM</sup></h1>
                <p className="text-center" style={{ width: 'auto' }}>
                  The TurnB Way of Solving Business Problems
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-9 col-md-9 col-12">
            <video width="100%" height="100%" className="heithvdo" autoPlay loop controls>
              <source src="/consult.mp4" type="video/mp4" />
              <source src="/consult.ogg" type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

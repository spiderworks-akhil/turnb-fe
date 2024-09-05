// components/ExpertiseSection.js
import React from 'react';

const ExpertiseSection = () => {
  return (
    <section id="" className="text-center mt-lg-1 mt-md-1 mt-1">
      <div className="container aos-init aos-animate" data-aos="fade-up">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="intro mb-2">
              <h1 className="">
                The Expanse of <span className="clr-grn">Our Expertise</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid d-block aos-animate" data-aos="fade-down">
        <a href="our-services.html">
          <img
            src="/img/expansion-n.jpg"
            className="img-fluid d-block text-center m-auto"
            alt="Expansion of Our Expertise"
          />
        </a>
      </div>
    </section>
  );
};

export default ExpertiseSection;

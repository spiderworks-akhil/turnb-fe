import React, { useEffect } from 'react';

const AboutWhoWeAreSection = ({ data }) => {

  return (
    <div className="container">
      <div className="about-cont mt-lg-5 mt-md-5 mt-3 mb-lg-3 mb-md-3 mb-3 clearfix">
        <div className="row p-4 justify-content-center">
          <div className="col-lg-3 col-md-3 col-12">
            <div className="text-center position-relative" data-aos="fade-down">
              <h1 className="title-akn text-lf mb-lg-4 mb-md-4 mb-3 mt-lg-0 mt-md-0 mt-4">
                <span className="clr-g" dangerouslySetInnerHTML={{ __html: data?.content?.title_1 }} />
              </h1>
            </div>
          </div>
          <div className="col-lg-9 col-md-9 col-12">
            <div className="text-justify position-relative" data-aos="fade-up">
              <div className="bg-image-sec why-us-about" dangerouslySetInnerHTML={{ __html: data?.content?.description_1 }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWhoWeAreSection;

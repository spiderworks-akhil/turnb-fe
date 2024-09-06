import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS library

const AboutWhoWeAreSection = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
  }, []); // Empty dependency array to initialize on mount

  return (
    <div className="container">
      <div className="about-cont mt-lg-5 mt-md-5 mt-3 mb-lg-3 mb-md-3 mb-3 clearfix">
        <div className="row p-4 justify-content-center">
          <div className="col-lg-3 col-md-3 col-12">
            <div className="text-center position-relative" data-aos="fade-down">
              <h1 className="title-akn text-lf mb-lg-4 mb-md-4 mb-3 mt-lg-0 mt-md-0 mt-4">
                <span className="clr-g">Who <br />
                  <span className="clr-grn">We Are</span>
                </span>
              </h1>
            </div>
          </div>
          <div className="col-lg-9 col-md-9 col-12">
            <div className="text-justify position-relative" data-aos="fade-up">
              <div className="bg-image-sec">
                <p className="w-auto mt-0 text-justify mb-2">
                  At TurnB, we're more than just a data company. We’re your strategic partners in achieving
                  business excellence through data analytics. Led by our CEO, Rufin, our team includes Analytical
                  Consultants, Chartered Accountants, and Sales Executives, all dedicated to uncovering valuable
                  insights in your data.
                </p>
                <p className="w-auto mt-0 text-justify mb-2">
                  Our belief is straightforward: Every data point has a story, and these stories can shape your business. At TurnB, we don't just deal in numbers; we
                  blend them with empathy. Our journey can start with a pilot program to build your trust, and
                  we're committed to providing ongoing data-driven insights for your success. We're beyond
                  analysts or consultants; we become your trusted partners and advisors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWhoWeAreSection;

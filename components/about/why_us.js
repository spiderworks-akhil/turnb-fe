import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS library

const AboutWhyUsBanner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  return (
    <div className="why-us-banner clearfix">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <h2 className="text-white ft-wt3 mb-3">Why Us</h2>
            <div className="bg-image-sec">
              <p className="text-white mt-0 mb-1">Choose TurnB for Exceptional Data Expertise</p>
              <p className="text-white mb-lg-4 mb-md-4 mb-2 mt-lg-1 mt-md-1 mt-0">
                When you choose TurnB, you're picking a partner who understands the power of data and the value of empathy in business.
              </p>
              <p className="text-white">
                <strong>Here’s why we stand out:</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-3 col-12">
            <div className="box-exp2 clearfix mt-3 pb-3" data-aos="fade-down">
              <div className="rect-box2 text-center clearfix">
                <h3 className="text-center minett pt-lg-4 pt-md-4 pt-2 pb-lg-3 pb-md-3 pb-2 ft-wt">Expertise</h3>
                <p className="mt-0 mb-0 clr-blck font-txt pb-lg-5 pb-md-5 pb-3">
                  Our team combines analytical skills with a consultation approach to give you the best of both worlds.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-12">
            <div className="box-exp2 clearfix mt-3 pb-3" data-aos="fade-up">
              <div className="rect-box2 text-center clearfix">
                <h3 className="text-center minett pt-lg-4 pt-md-4 pt-2 pb-lg-3 pb-md-3 pb-2 ft-wt">Competitive Pricing</h3>
                <p className="mt-0 mb-0 clr-blck font-txt pb-lg-5 pb-md-5 pb-3">
                  We offer competitive prices without compromising quality, ensuring data-driven success is accessible to all businesses.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-12">
            <div className="box-exp2 clearfix mt-3 pb-3" data-aos="fade-up">
              <div className="rect-box2 text-center clearfix">
                <h3 className="text-center minett pt-lg-4 pt-md-4 pt-2 pb-lg-3 pb-md-3 pb-2 ft-wt">Client-Centric Approach</h3>
                <p className="mt-0 mb-0 clr-blck font-txt pb-lg-5 pb-md-5 pb-3">
                  We start with a pilot program to build trust and continue providing data-driven insights to strengthen our partnership.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-12">
            <div className="box-exp2 clearfix mt-3 pb-3" data-aos="fade-up">
              <div className="rect-box2 text-center clearfix">
                <h3 className="text-center minett pt-lg-4 pt-md-4 pt-2 pb-lg-3 pb-md-3 pb-2 ft-wt">Innovation and Understanding</h3>
                <p className="mt-0 mb-0 clr-blck font-txt pb-lg-5 pb-md-5 pb-3">
                  In today's data-driven world, we interpret data to reveal the human stories that matter to your business.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-image-sec">
          <p className="text-white mb-0 mt-lg-4 mt-md-4 mt-3">
            Choose TurnB as your data-driven partner, and let's embark on a journey to unlock the full potential of your business through analytical consulting. Together, we'll shape your business destiny like never before.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutWhyUsBanner;

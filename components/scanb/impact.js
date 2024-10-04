import React from 'react';

const ScanbImpact = ({ data }) => {
  return (
    <div className="container">
      <div className="scanb-growth scanb-impactsec d-block mt-lg-5 mt-md-5 mt-4 p-4 clearfix mb-lg-5 mb-md-5 mb-4">
        <div className="row justify-content-center">
          <div className="col-lg-11 col-md-11 col-12">
            <div className="">
              <h1 className="mb-lg-3 mb-md-3 mb-2">{data?.content?.scanb_section_6_title}</h1>
              <p className="text-center mb-0 mt-1">
                {data?.content?.scanb_section_6_sub_title}              </p>
            </div>
          </div>
        </div>
        <div className="scanb-borgana mt-lg-4 mt-md-4 mt-3 clearfix">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-12">
              <div className="scanb-org clearfix" dangerouslySetInnerHTML={{ __html: data?.content?.scanb_section_6_content_1 }} />
              {/* <h4 className="mt-0 mb-lg-3 mb-md-3 mb-2 text-white" data-aos="fade-up" data-aos-duration="400">
                  On Organizations:
                </h4>
                <div className="text-org clearfix">
                  <div className="clearfix" data-aos="fade-up" data-aos-duration="800">
                    <p className="mt-0 mb-1 text-white text-org">Precise reporting: </p>
                    <p className="mt-0 mb-2 text-orgsub">Clear strategic insights </p>
                  </div>
                  <div className="clearfix" data-aos="fade-up" data-aos-duration="1200">
                    <p className="mt-0 mb-1 text-white text-org">Liberating workforce: </p>
                    <p className="mt-0 mb-2 text-orgsub">Focus on priorities </p>
                  </div>
                  <div className="clearfix" data-aos="fade-up" data-aos-duration="1600">
                    <p className="mt-0 mb-1 text-white text-org">Effective decision-making: </p>
                    <p className="mt-0 mb-2 text-orgsub">Empower with clarity </p>
                  </div>
                  <div className="clearfix" data-aos="fade-up" data-aos-duration="2000">
                    <p className="mt-0 mb-1 text-white text-org">Uplift analytical maturity: </p>
                    <p className="mt-0 mb-0 text-orgsub">Smarter decisions making </p>
                  </div>
                </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>
        <div className="scanb-busi mt-lg-3 mt-md-3 mt-3 clearfix">
          <div className="row justify-content-end">
            <div className="col-lg-5 col-md-5 col-12">
              <div dangerouslySetInnerHTML={{ __html: data?.content?.scanb_section_6_content_2 }} className="scanb-bbusi clearfix" data-aos="fade-up" data-aos-duration="2000" />
                {/* <h4 className="mt-0 mb-lg-3 mb-md-3 mb-2 text-white" data-aos="fade-up" data-aos-duration="400">
                  On Businesses:
                </h4>
                <div className="text-busi clearfix">
                  <div className="clearfix" data-aos="fade-up" data-aos-duration="800">
                    <p className="mt-0 mb-1 text-white text-busi">Reduced labor costs: </p>
                    <p className="mt-0 mb-2 text-busisub">Enhanced employee productivity </p>
                  </div>
                  <div className="clearfix" data-aos="fade-up" data-aos-duration="1200">
                    <p className="mt-0 mb-1 text-white text-busi">Boost sales growth: </p>
                    <p className="mt-0 mb-2 text-busisub">Tapping sales potential </p>
                  </div>
                  <div className="clearfix" data-aos="fade-up" data-aos-duration="1600">
                    <p className="mt-0 mb-1 text-white text-busi">Minimized opportunity loss: </p>
                    <p className="mt-0 mb-1 text-busisub">Optimized stock reordering </p>
                  </div>
                  <div className="clearfix" data-aos="fade-up" data-aos-duration="2000">
                    <p className="mt-0 mb-1 text-white text-busi">Make smart savings:</p>
                    <p className="mt-0 mb-0 text-busisub">Trimming inventory and costs</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScanbImpact;

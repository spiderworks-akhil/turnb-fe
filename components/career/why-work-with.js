import React from 'react';

const WhyWorkWithTurnB = ({data}) => {
  return (
    <div className="container aos-init aos-animate" data-aos="fade-up">
      <div className="bg-whywork mt-lg-5 mt-md-5 mt-3 pt-4 pb-4 clearfix">
        <div className="whytxt d-block m-auto text-center">
          <h3>{data?.content?.about_mid_banner_title}</h3>
        </div>
        <div className="row">
          <div className="col-lg-7 col-md-7 col-12">
            <p className="mt-lg-5 mt-md-5 mt-3 pl_text text-white" dangerouslySetInnerHTML={{__html:data?.content?.about_mid_description}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyWorkWithTurnB;

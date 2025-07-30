import React from 'react';

const ScanbImpact = ({ data }) => {
  return (
    <div className="container">
      <div className="scanb-growth scanb-impactsec d-block mt-lg-5 mt-md-5 mt-4 p-4 clearfix mb-lg-5 mb-md-5 mb-4">
        <div className="row justify-content-center">
          <div className="col-lg-11 col-md-11 col-12">
            <div className="">
              <h2 className="mb-lg-3 mb-md-3 mb-2">{data?.content?.scanb_section_6_title}</h2>
              <p className="text-center mb-0 mt-1">
                {data?.content?.scanb_section_6_sub_title}
              </p>
            </div>
          </div>
        </div>


        <div style={{background:`url(${data?.content?.scanb_section_6_media_id_1?.file_path}) no-repeat`,backgroundSize:'cover'}} className="scanb-borgana mt-lg-4 mt-md-4 mt-3 clearfix">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-12">
              <div className="scanb-org clearfix mt-0 mb-lg-3 mb-md-3 mb-2 text-white text-left" dangerouslySetInnerHTML={{ __html: data?.content?.scanb_section_6_content_1 }}  data-aos="fade-up" data-aos-duration="2000"/>
            </div>
          </div>
        </div>
        <div style={{background:`url(${data?.content?.scanb_section_6_media_id_2?.file_path}) no-repeat`,backgroundSize:'cover'}} className="scanb-busi mt-lg-3 mt-md-3 mt-3 clearfix">
          <div className="row justify-content-end">
            <div className="col-lg-5 col-md-5 col-12">
              <div dangerouslySetInnerHTML={{ __html: data?.content?.scanb_section_6_content_2 }} className="scanb-bbusi  clearfix" data-aos="fade-up" data-aos-duration="2000" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScanbImpact;

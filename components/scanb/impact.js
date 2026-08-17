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
              {/* Statistical Section */}
              <div className="row justify-content-center mt-5">
                <div className="col-lg-10 col-md-11 col-12">
                  <div className="row" data-aos="fade-up" data-aos-duration="1500">
                    <div className="col-md-4 mb-3">
                      <div className="card h-100 statistical-card">
                        <div className="card-body d-flex align-items-center justify-content-center py-4">
                          <span style={{ color: '#038585', fontWeight: 'bold', fontSize: '2rem', marginRight: '15px', lineHeight: '1' }}>{data?.content?.scanb_section_6_count_1}</span>
                          <span style={{ color: '#6c757d', fontSize: '0.95rem', lineHeight: '1.2', fontWeight: '500' }}>{data?.content?.scanb_section_6_label_1}</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div className="card h-100 statistical-card">
                        <div className="card-body d-flex align-items-center justify-content-center py-4">
                          <span style={{ color: '#038585', fontWeight: 'bold', fontSize: '2rem', marginRight: '15px', lineHeight: '1' }}>{data?.content?.scanb_section_6_count_2}</span>
                          <span style={{ color: '#6c757d', fontSize: '0.95rem', lineHeight: '1.2', fontWeight: '500' }}>{data?.content?.scanb_section_6_label_2}</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div className="card h-100 statistical-card">
                        <div className="card-body d-flex align-items-center justify-content-center py-4">
                          <span style={{ color: '#038585', fontWeight: 'bold', fontSize: '2rem', marginRight: '15px', lineHeight: '1' }}>{data?.content?.scanb_section_6_count_3}</span>
                          <span style={{ color: '#6c757d', fontSize: '0.95rem', lineHeight: '1.2', fontWeight: '500' }}>{data?.content?.scanb_section_6_label_3}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div style={{ background: `url(${data?.content?.scanb_section_6_media_id_1?.file_path}) no-repeat`, backgroundSize: 'cover' }} className="scanb-borgana mt-lg-4 mt-md-4 mt-3 clearfix">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-12">
              <div className="scanb-org clearfix mt-0 mb-lg-3 mb-md-3 mb-2 text-white text-left" dangerouslySetInnerHTML={{ __html: data?.content?.scanb_section_6_content_1 }} data-aos="fade-up" data-aos-duration="2000" />
            </div>
          </div>
        </div>
        <div style={{ background: `url(${data?.content?.scanb_section_6_media_id_2?.file_path}) no-repeat`, backgroundSize: 'cover' }} className="scanb-busi mt-lg-3 mt-md-3 mt-3 clearfix">
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

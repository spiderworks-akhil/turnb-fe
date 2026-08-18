import Image from 'next/image';
import React from 'react';

const ScanbAdvance = ({ data }) => {


  return (
    <div className="paralx clearfix">
      <div className="d-block pt-lg-0 pt-md-0 pt-0 position-relative scanb-advance clearfix">
        <div className="container">
          <div className="row justify-content-center scanb-newsection">
            <div className="col-lg-10 col-md-12 col-12">
              <div className="text-center scan-bmoblatp clearfix">
                {/* <h2 dangerouslySetInnerHTML={{ __html: data?.content?.scanb_section_3_title }} className="text-left" /> */}
                <div className="image-subheading row align-items-center justify-content-center w-100 m-0">
                  <div className="col-12 col-md-7 p-0">
                    <Image width={'700'} height={'486'} src="/img/scanb/sample1.png" alt="Mobile Laptop" style={{ paddingTop: '15px', width: '100%', height: 'auto' }} />
                  </div>
                  <div className="col-12 col-md-5 p-4 text-start">
                    <h6 className="text-white mb-3" dangerouslySetInnerHTML={{ __html: data?.content?.scanb_section_3_sub_title }} style={{ position: 'static', width: 'auto', textAlign: 'left' }} />
                    <span className="text-white" dangerouslySetInnerHTML={{ __html: data?.content?.scanb_section_3_short_description }} />
                  </div>
                </div>
                <hr id="image-hrline" />
                <div className="row pt-5">
                  <div className="col-md-6 small-scanb-content disable-aos-mobile" data-aos="fade-right" data-aos-duration="3000">
                    <p className="text-white" dangerouslySetInnerHTML={{ __html: data?.content?.scanb_section_3_text_1 }} />
                    {/* Offering crystal-clear data insights through <br /> visually striking dashboards */}

                    <hr />
                  </div>
                  <div className="col-md-6 small-scanb-content disable-aos-mobile" data-aos="fade-left" data-aos-duration="3000">
                    <p className="text-white" dangerouslySetInnerHTML={{ __html: data?.content?.scanb_section_3_text_2 }} />
                    {/* Boosting efficiency across retail sectors with <br /> cross-functional insights */}
                    <hr />
                  </div>
                  <div className="col-md-6 small-scanb-content disable-aos-mobile" data-aos="fade-right" data-aos-duration="3000">
                    <p className="text-white" dangerouslySetInnerHTML={{ __html: data?.content?.scanb_section_3_text_3 }} />
                    <hr style={{ marginBottom: '10px' }} />
                  </div>
                  <div className="col-md-6 small-scanb-content disable-aos-mobile" data-aos="fade-left" data-aos-duration="3000">
                    <p className="text-white" dangerouslySetInnerHTML={{ __html: data?.content?.scanb_section_3_text_4 }} />
                    <hr style={{ marginBottom: '10px' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScanbAdvance;

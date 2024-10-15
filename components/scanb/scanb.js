import Image from 'next/image';
import React from 'react';

const ScanbAdvance = ({ data }) => {


  return (
    <div className="paralx clearfix">
      <div className="d-block pt-lg-0 pt-md-0 pt-0 position-relative scanb-advance clearfix">
        <div className="container">
          <div className="row justify-content-left scanb-newsection">
            <div className="col-lg-10 col-md-10 col-12">
              <div className="text-center scan-bmoblatp clearfix">
                <h1 dangerouslySetInnerHTML={{ __html: data?.content?.scanb_section_3_title }} className="text-left" />
                <div className="image-subheading">
                  <Image width={'800'} height={'486'} src="/img/scanb/mobile%20laptop.png" alt="Mobile Laptop" style={{ width: '80%' }} />
                  <h6 className="text-white" dangerouslySetInnerHTML={{ __html: data?.content?.scanb_section_3_sub_title }} />
                </div>
                <hr id="image-hrline" />
                <div className="row pt-5">
                  <div className="col-md-6 small-scanb-content" data-aos="fade-right" data-aos-duration="3000">
                    <p className="text-white" dangerouslySetInnerHTML={{ __html: data?.content?.scanb_section_3_text_1 }} />
                    {/* Offering crystal-clear data insights through <br /> visually striking dashboards */}

                    <hr />
                  </div>
                  <div className="col-md-6 small-scanb-content" data-aos="fade-left" data-aos-duration="3000">
                    <p className="text-white" dangerouslySetInnerHTML={{ __html: data?.content?.scanb_section_3_text_2 }} />
                    {/* Boosting efficiency across retail sectors with <br /> cross-functional insights */}
                    <hr />
                  </div>
                  <div className="col-md-6 small-scanb-content" data-aos="fade-right" data-aos-duration="3000">
                    <p className="text-white" dangerouslySetInnerHTML={{ __html: data?.content?.scanb_section_3_text_3 }} />
                    <hr style={{ marginBottom: '10px' }} />
                  </div>
                  <div className="col-md-6 small-scanb-content" data-aos="fade-left" data-aos-duration="3000">
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

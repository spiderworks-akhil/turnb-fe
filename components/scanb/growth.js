import Image from 'next/image';
import React from 'react';

const ScanBGrowth = ({ data }) => {
  return (
    <div className="container">
      <div className="scanb-growth d-block mt-lg-5 mt-md-5 mt-4 p-4 clearfix mb-lg-5 mb-md-5 mb-4">
        <div className="row justify-content-center">
          <div className="col-lg-11 col-md-11 col-12">
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <h1>
                {data?.content?.scanb_section_4_text_3}
              </h1>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-9 col-md-9 col-12">
            <p className="intro-texts text-center mt-lg-3 mt-md-3 mt-3"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <Image
                width={800}
                height={700}
                src={data?.content?.scanb_section_4_media_id_2?.file_path}
                alt={data?.content?.scanb_section_4_media_id_2?.alt_text}
                className="img-fluid m-auto text-center d-block"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScanBGrowth;

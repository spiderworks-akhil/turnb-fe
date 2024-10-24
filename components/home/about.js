// components/AboutSection.js
import React, { useEffect } from 'react';
import Link from 'next/link';

const AboutSection = ({ data }) => {


  return (
    <div className="bg-infographic clearfix">
      <section id="about" className="mt-lg-0 mt-md-0 mt-0 pt-0">
        <div className="bg-image-sec clearfix">
          <div className="container">
            <div className="row bg-white p-4 justify-content-center">
              <div className="col-lg-4 col-md-4 col-12">
                <div
                  className="text-center position-relative aos-init aos-animate"
                  data-aos="fade-down"
                >
                  <h1 className="title-akn text-lf mb-lg-4 mb-md-4 mb-3 mt-lg-0 mt-md-0 mt-4">
                    <span dangerouslySetInnerHTML={{ __html: data?.content?.title_2 }} className="clr-g" />
                    
                  </h1>
                </div>
              </div>
              <div className="col-lg-8 col-md-8 col-12">
                <div
                  className="text-justify position-relative aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <div dangerouslySetInnerHTML={{ __html: data?.content?.description_2 }} className="w-auto mt-0 text-justify mb-2" />
                    {/* {data?.content?.description_2}
                  </p> */}
                  <div className="knw-more mt-lg-3 mt-md-3 clearfix">
                    <Link href={data?.content?.button_url_section_2} className="btn btn-primary kn-mb">{data?.content?.button_text_section_2}</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="intro">
                <h1 className="mr-bplong mb-0">{data?.content?.title_4}</h1>
                <p className="text-center" style={{ width: 'auto' }}>
                  {data?.content?.short_description_4}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-9 col-md-9 col-12">
            <video width="100%" height="100%" className="heithvdo" autoPlay={false} loop controls>
              <source src={data?.content?.home_vedio_media_id?.file_path} type="video/mp4" />
              {/* <source src="/consult.ogg" type="video/ogg" /> */}
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

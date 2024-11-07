// components/ExpertiseSection.js
import Image from 'next/image';
import React from 'react';

const ExpertiseSection = ({ data }) => {
  return (
    <section id="" className="text-center mt-lg-1 mt-md-1 mt-1">
      <div className="container aos-init aos-animate" data-aos="fade-up">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="intro mb-2">
              <h2 className='home-title' dangerouslySetInnerHTML={{ __html: data?.content?.title_5 }} />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid d-block aos-animate" data-aos="fade-down">

        <Image
          width={1000}
          height={800}
          src={data?.content?.index_video_media_id?.file_path}
          className="img-fluid d-block text-center m-auto"
          alt={data?.content?.index_video_media_id?.alt_text}
        />
      </div>
    </section>
  );
};

export default ExpertiseSection;

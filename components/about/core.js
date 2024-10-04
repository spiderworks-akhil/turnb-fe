import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS library
import Image from 'next/image';

const CoreValuesSection = ({ data }) => {

  return (
    <div className="container mt-lg-5 mt-md-5 mt-3 mb-lg-5 mb-md-5 mb-3">
      <div className="text-center position-relative" data-aos="fade-down">
        <h2 className="title-ak2 font-htd ft-wt2 mb-lg-1 mb-md-1 mb-2 mt-lg-4 pt-lg-4 pt-md-4 pt-2 mt-md-4 mt-3">
          <span className="clr-g" dangerouslySetInnerHTML={{ __html: data?.content?.title_4 }} />
          {/* Core <span className="clr-grn">Values</span> */}
        </h2>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-6 col-12">
          <Image
            width={800}
            height={800}
            src={data?.content?.section_4_banner_media_id?.file_path} // Assuming the image is in the public directory
            className="img-fluid d-block text-center m-auto mt-5"
            data-aos="zoom-in"
            alt={data?.content?.section_4_banner_media_id?.alt_text}
          />
        </div>
      </div>
    </div>
  );
};

export default CoreValuesSection;

import Image from 'next/image';
import React from 'react';

const AboutBanner = ({ data }) => {
  return (
    <div className="m-auto d-block text-center mr-topinnerpage" id="carouselExampleIndicators">
      {/* Carousel Images */}
      <Image
        width={1520} height={800}
        alt={data?.content?.about_us_banner_media_id?.alt_text || data?.name}
        className="d-block text-center m-auto img-height img-fluid d-lg-block d-md-block d-none"
        src={data?.content?.about_us_banner_media_id?.file_path}
      />
      <Image
        width={1600}
        height={900}
        src={data?.content?.about_us_mobile_banner_media_id?.file_path}
        alt={data?.content?.about_us_mobile_banner_media_id?.alt_text || data?.name}
        className="d-block w-100 img-fluid d-lg-none d-md-none d-block"
      />
    </div>
  );
};

export default AboutBanner;

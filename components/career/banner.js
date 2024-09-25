import Image from 'next/image';
import React from 'react';

const CareerBanner = ({data}) => {
  return (
    <div className="banner-container">
      <Image
        width={1520} height={714}
        alt={data?.content?.career_banner_media_id?.alt_text || data?.name}
        className="d-block text-center m-auto img-height img-fluid d-lg-block d-md-block d-none"
        src={data?.content?.career_banner_media_id?.file_path}
      />
      <Image
        width={1600} height={900}
        alt={data?.content?.career_mobile_banner_media_id?.alt_text || data?.name}
        className="d-block w-100 img-fluid d-lg-none d-md-none d-block"
        src={data?.content?.career_mobile_banner_media_id?.file_path}
      />
    </div>
  );
};

export default CareerBanner;

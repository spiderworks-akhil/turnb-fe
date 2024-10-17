import Image from 'next/image';
import React from 'react';

const BannerIndustries = ({data}) => {
  // industry_banner_media_id
  // industry_mobile_banner_media_id
  return (
    <div className="banner-container mr-topinnerpage">
      <Image
        alt={data?.content?.industry_banner_media_id?.alt_text || data?.name}
        width={1520}
        height={714}
        src={data?.content?.industry_banner_media_id?.file_path}
        className="d-block text-center m-auto img-height img-fluid d-lg-block d-md-block d-none w-100 abt-banner"
      />
      <Image
        width={960} height={540}
        src={data?.content?.industry_mobile_banner_media_id?.file_path}
        alt={data?.content?.industry_mobile_banner_media_id?.alt_text || data?.name}
        className="d-block img-fluid d-lg-none d-md-none d-block abt-mob-banner"
      />
    </div>
  );
};

export default BannerIndustries;

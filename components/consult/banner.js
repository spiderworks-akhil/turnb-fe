import Image from 'next/image';
import React from 'react';

const ConsultBanner = ({ data }) => {
  return (
    <div className="banner-container mr-topinnerpage">
      <Image
        width={1920} height={1080}
        alt={data?.content?.consult_banner_media_id?.alt_text || data?.name}
        className="d-block text-center m-auto img-height img-fluid d-lg-block d-md-block d-none w-100 abt-banner"
        src={data?.content?.consult_banner_media_id?.file_path}
        // data-aos="fade-in"
      />
      <Image
        width={1600} height={900}
        alt={data?.content?.consult_mobile_banner_media_id?.alt_text || data?.name}
        className="d-block img-fluid d-lg-none d-md-none d-block abt-mob-banner"
        src={data?.content?.consult_mobile_banner_media_id?.file_path}
        // data-aos="fade-in"
      />
      {/* Uncomment if you need carousel caption */}
      {/* <div className="carousel-caption">
            <h5 className="animated bounceInRight text-white text-left" style={{ animationDelay: '1s' }}>
              Data Drives <br /> Business
            </h5>
          </div> */}
    </div>
  );
};

export default ConsultBanner;

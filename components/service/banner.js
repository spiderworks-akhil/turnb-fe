import Image from 'next/image';
import React from 'react';

const ServiceBanner = ({ data }) => {
  return (
    <div className="carousel slide mr-topinnerpage" data-bs-ride="carousel" id="carouselExampleIndicators">
      {/* Uncomment if you need indicators */}
      {/* <div className="carousel-indicators">
        <button aria-label="Slide 1" className="active" data-bs-slide-to="0" data-bs-target="#carouselExampleIndicators" type="button"></button>
        <button aria-label="Slide 2" data-bs-slide-to="1" data-bs-target="#carouselExampleIndicators" type="button"></button>
      </div> */}

      <div className="carousel-inner">
        <div className="carousel-item active">
          <Image
            width={1520} height={714}
            alt={data?.content?.services_banner_media_id?.alt_text || data?.name}
            className="d-block text-center m-auto img-height img-fluid d-lg-block d-md-block d-none"
            src={data?.content?.services_banner_media_id?.file_path}
          />
          <Image
            width={1600} height={900}
            alt={data?.content?.case_study_mobile_banner_media_id?.alt_text || data?.name}
            className="d-block w-100 img-fluid d-lg-none d-md-none d-block"
            src={data?.content?.case_study_mobile_banner_media_id?.file_path}
          />
          {/* Uncomment if you need captions */}
          {/* <div className="carousel-caption">
            <h5 className="animated bounceInRight text-white text-left" style={{ animationDelay: '1s' }}>
              Data Drives <br /> Business
            </h5>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;

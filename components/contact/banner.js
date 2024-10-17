import Image from 'next/image';
import React, { useEffect } from 'react';

const ContactBanner = ({ data }) => {

 

  return (
    // <div className="banner">
    //   <Image
    //   width={1600} height={900}
    //     alt={data?.content?.contact_us_banner_media_id?.alt_text || data?.name}
    //     className="d-block img-fluid d-lg-block d-md-none"
    //     src={data?.content?.contact_us_banner_media_id?.file_path}
    //   />
    //   <Image
    //     src={data?.content?.contact_us_mobile_banner_media_id?.file_path}
    //     alt={data?.content?.contact_us_mobile_banner_media_id?.alt_text || data?.name}
    //     width={1600}
    //     height={900}
    //     className="d-block img-fluid d-lg-none d-md-block"
    //   />
    // </div>

    <div>
      <div class="carousel slide mr-topinnerpage-n" data-bs-ride="carousel" id="carouselExampleIndicators">
        {/* <!-- Uncomment and use the carousel indicators if needed --> */}

        <div class="carousel-inner">

          <div class="carousel-item active" data-aos="fade-up">
            <Image width={1520} height={714} alt={data?.content?.contact_us_banner_media_id?.alt_text || data?.name} class="d-block text-center m-auto img-height img-fluid d-lg-block d-md-block d-none w-100"
              src={data?.content?.contact_us_banner_media_id?.file_path} data-aos="fade-right" />
            <Image width={1600} height={900} alt={data?.content?.contact_us_mobile_banner_media_id?.alt_text || data?.name} class="d-block img-fluid d-lg-none d-md-none d-block abt-mob-banner"
              src={data?.content?.contact_us_mobile_banner_media_id?.file_path} data-aos="fade-left" />
            <div class="carousel-caption">
            </div>
          </div>
          {/* <!-- Add more carousel items here if needed --> */}
        </div>
      </div>

    </div>
  );
};

export default ContactBanner;

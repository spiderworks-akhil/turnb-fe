import React from 'react';

const AboutBanner = () => {
  return (
    <div className="m-auto d-block text-center mr-topinnerpage" id="carouselExampleIndicators">
      {/* Carousel Images */}
      <img
        alt="Desktop Banner"
        className="d-block text-center m-auto img-height img-fluid d-lg-block d-md-block d-none"
        src="img/banners/about-deskbanner.jpg"
      />
      <img
        alt="Mobile Banner"
        className="d-block w-100 img-fluid d-lg-none d-md-none d-block"
        src="img/banners/about-mobbanner.jpg"
      />
    </div>
  );
};

export default AboutBanner;

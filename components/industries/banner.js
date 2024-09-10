import React from 'react';

const BannerIndustries = () => {
  return (
    <div className="banner-container mr-topinnerpage">
      <img
        src="/img/banners/technology-desk.jpg"
        alt="Technology Desk"
        className="d-block text-center m-auto img-height img-fluid d-lg-block d-md-block d-none"
      />
      <img
        src="/img/banners/tech-mob.jpg"
        alt="Tech Mobile"
        className="d-block w-100 img-fluid d-lg-none d-md-none d-block"
      />
    </div>
  );
};

export default BannerIndustries;

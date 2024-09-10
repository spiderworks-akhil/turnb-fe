import React from 'react';

const CareerBanner = () => {
  return (
    <div className="banner-container">
      <img 
        alt="Career Banner" 
        className="d-block text-center m-auto img-height img-fluid d-lg-block d-md-block d-none" 
        src="/img/banners/career-banner.jpg" 
      />
      <img 
        alt="Career Mobile Banner" 
        className="d-block w-100 img-fluid d-lg-none d-md-none d-block" 
        src="/img/banners/career-mobile-banner.jpg" 
      />
    </div>
  );
};

export default CareerBanner;

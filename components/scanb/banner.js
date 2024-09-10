import React from 'react';

const ScanbBanner = () => {
  return (
    <div className="banner-container">
      <div className="desktop-banner">
        <img
          src="/img/banners/Component%203%20(2.html).jpg"
          alt="Desktop Banner"
          className="img-fluid"
        />
        <div className="overlay">
          <a href="video.html" target="_blank" rel="noopener noreferrer">
            <button className="banner-button">Watch the ScanB video</button>
          </a>
          <a href="/img/scanb/brochure/ScanB%20Brochure.pdf" target="_blank" rel="noopener noreferrer">
            <button className="banner-button">Download Brochure</button>
          </a>
        </div>
      </div>
      <img
        src="/img/scanb/banners/MOB_Banner_fINAL.jpg"
        alt="Mobile Banner"
        className="mobile-banner img-fluid"
      />
    </div>
  );
};

export default ScanbBanner;

import React from 'react';

const ConsultBanner = () => {
  return (
    <div className="carousel slide mr-topinnerpage" data-bs-ride="carousel" id="carouselExampleIndicators">
      {/* Uncomment if you need indicators */}
      {/* <div className="carousel-indicators">
        <button aria-label="Slide 1" className="active" data-bs-slide-to="0" data-bs-target="#carouselExampleIndicators" type="button"></button>
        <button aria-label="Slide 2" data-bs-slide-to="1" data-bs-target="#carouselExampleIndicators" type="button"></button>
      </div> */}
      <div className="carousel-inner">
        <div className="carousel-item active" data-aos="fade-in">
          <img 
            alt="..." 
            className="d-block text-center m-auto img-height img-fluid d-lg-block d-md-block d-none" 
            src="/img/banners/consult-D5tm-desktop.jpg" 
            data-aos="fade-in"
          />
          <img 
            alt="..." 
            className="d-block w-100 img-fluid d-lg-none d-md-none d-block" 
            src="/img/banners/consult-D5tm-mobile.jpg" 
            data-aos="fade-in"
          />
          {/* Uncomment if you need carousel caption */}
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

export default ConsultBanner;

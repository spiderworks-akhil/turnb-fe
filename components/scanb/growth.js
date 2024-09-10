import React from 'react';

const ScanBGrowth = () => {
  return (
    <div className="container">
      <div className="scanb-growth d-block mt-lg-5 mt-md-5 mt-4 p-4 clearfix mb-lg-5 mb-md-5 mb-4">
        <div className="row justify-content-center">
          <div className="col-lg-11 col-md-11 col-12">
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <h1>
                ScanB harnesses the potential of a unified retail intelligence platform, offering insights that
                optimize the entire retail ecosystem
              </h1>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-9 col-md-9 col-12">
            <p className="intro-texts text-center mt-lg-3 mt-md-3 mt-3" 
              data-aos="fade-down" 
              data-aos-easing="linear" 
              data-aos-duration="1500"
            >
              <img 
                src="/img/scanb/harness.png" 
                alt="Harness" 
                className="img-fluid m-auto text-center d-block" 
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScanBGrowth;

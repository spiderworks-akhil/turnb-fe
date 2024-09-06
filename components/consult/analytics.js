import React from 'react';

const AnalyticalConsultingSpectrum = () => {
  return (
    <div className="container aos-init aos-animate mb-lg-5 mb-md-5 mb-3" data-aos="fade-up">
      <div className="bg-partwhywork mt-lg-5 mt-md-5 mt-3 clearfix">
        <div className="row justify-content-center">
          <div className="col-lg-9 col-md-9 col-12">
            <div className="text-center p-5 pb-0">
              <h2 className="text-dark ft-wt3 mb-3">Analytical Consulting Spectrum</h2>
              <p className="clr-grn ft-st">
                Our expert team of Analytical Consultants categorize a business problem into problem terrains
                such as Descriptive, Diagnostic, Predictive and Prescriptive.
              </p>
            </div>
          </div>
        </div>
        <div className="d-lg-block d-md-block">
          <div className="mt-lg-0 mt-md-0 mt-0 mb-lg-5 mb-md-5 mb-3 clearfix">
            <video width="100%" height="100%" className="heithvdo" autoPlay loop muted playsInline>
              <source src="/videos/TurnB-Spectrum.mp4" type="video/mp4" />
              <source src="/TurnB-Spectrum.ogg" type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticalConsultingSpectrum;

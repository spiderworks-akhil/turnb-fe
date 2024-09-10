import React from 'react';

const ScanbAdvance = () => {
  return (
    <div className="paralx clearfix">
      <div className="d-block pt-lg-0 pt-md-0 pt-0 position-relative scanb-advance clearfix">
        <div className="container">
          <div className="row justify-content-left scanb-newsection">
            <div className="col-lg-10 col-md-10 col-12">
              <div className="text-center scan-bmoblatp clearfix">
                <h1 className="text-left">
                  Scan<span className="grs">B</span>
                </h1>
                <div className="image-subheading">
                  <img src="/img/scanb/mobile%20laptop.png" alt="Mobile Laptop" style={{ width: '80%' }} />
                  <h6 className="text-white">
                    Advanced Retail BI <br /> for data-driven <br /> decisions that win
                  </h6>
                </div>
                <hr id="image-hrline" />
                <div className="row pt-5">
                  <div className="col-md-6 small-scanb-content" data-aos="fade-right" data-aos-duration="3000">
                    <p className="text-white">
                      Offering crystal-clear data insights through <br /> visually striking dashboards
                    </p>
                    <hr />
                  </div>
                  <div className="col-md-6 small-scanb-content" data-aos="fade-left" data-aos-duration="3000">
                    <p className="text-white">
                      Boosting efficiency across retail sectors with <br /> cross-functional insights
                    </p>
                    <hr />
                  </div>
                  <div className="col-md-6 small-scanb-content" data-aos="fade-right" data-aos-duration="3000">
                    <p className="text-white">
                      Delivering enriched business insights <br /> honed through years of expertise
                    </p>
                    <hr style={{ marginBottom: '10px' }} />
                  </div>
                  <div className="col-md-6 small-scanb-content" data-aos="fade-left" data-aos-duration="3000">
                    <p className="text-white">
                      Fostering democratization by making insights <br /> accessible and understandable to all
                    </p>
                    <hr style={{ marginBottom: '10px' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScanbAdvance;

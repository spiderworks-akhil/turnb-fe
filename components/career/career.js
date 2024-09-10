import React from 'react';

const CareerSection = () => {
  return (
    <div className="career-bg clearfix">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mt-lg-5 mt-md-5 mt-3 mb-lg-4 mb-md-4 mb-3">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">/ Career</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="tab-career">
          <div className="nav-tab-career">
            <nav>
              <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">India</button>
                <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">UAE</button>
              </div>
            </nav>
          </div>

          <div className="tab-content" id="nav-tabContent">
            {/* India Tab Content */}
            <div className="tab-pane fade active show" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
              <div className="row justify-content-center mt-lg-4 mt-md-4 mt-3 mb-lg-5 mb-md-5 mb-4">
                <div className="col-lg-3 col-md-3 col-12">
                  <div className="colb-main b-lg-0 mb-md-0 mb-3 text-center clearfix">
                    <div className="our-colbox clearfix aos-init aos-animate" data-aos="fade-down">
                      <div className="hover-divcol pb-3">
                        <div className="p-3 pb-2">
                          <h3 className="fnt-22">Sales and <br /> Marketing Manager</h3>
                        </div>
                        <div className="learn-more mt-topln d-block text-center mb-3 clearfix">
                          <button className="lrn-b"><a href="/img/pdf/sales-%26-marketing.pdf" className="text-d" target="_blank" download="">Know More</a></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-12">
                  <div className="colb-main text-center mb-lg-4 mb-md-4 mb-3 clearfix">
                    <div className="our-colbox clearfix aos-init aos-animate" data-aos="fade-down">
                      <div className="hover-divcol pb-3">
                        <div className="p-3 pb-2">
                          <h3 className="fnt-22">Jr.Analytics <br /> Consultant</h3>
                        </div>
                        <div className="learn-more mt-topln d-block text-center mb-3 clearfix">
                          <button className="lrn-b"><a href="/img/pdf/Jr_analytics_consultant.pdf" className="text-d" target="_blank" download="">Know More</a></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-12">
                  <div className="colb-main b-lg-0 mb-md-0 mb-3 text-center clearfix">
                    <div className="our-colbox clearfix aos-init aos-animate" data-aos="fade-down">
                      <div className="hover-divcol pb-3">
                        <div className="p-3 pb-2">
                          <h3 className="fnt-22">Analytics <br /> Consultant</h3>
                        </div>
                        <div className="learn-more mt-topln d-block text-center mb-3 clearfix">
                          <button className="lrn-b"><a href="/img/pdf/analytics_consultant.pdf" className="text-d" target="_blank" download="">Know More</a></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-12 col-md-12 col-12">
                  <div className="cantfind pt-pg-5 pt-md-5 pt-4 mt-lg-5 mt-md-5 mt-3 mb-lg-5 mb-md-5 mb-3 text-center clearfix">
                    <h3 className="ft-wt2 mb-lg-3 mb-md-3 mb-2">Can’t find the job you were looking for?</h3>
                    <div className="d-block m-auto text-center">
                      <h4 className="mb-0 pt-3 pb-3">Send your profile to <span className="clr-ab"><a href="mailto:careers@turnb.com" className="clr-ab" style={{ textDecoration: 'none', fontWeight: 'bold' }}>careers@turnb.com</a></span> and we’ll get back to you.</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* UAE Tab Content */}
            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
              <div className="row justify-content-center mt-lg-4 mt-md-4 mt-3 mb-lg-5 mb-md-5 mb-4">
                <div className="col-lg-3 col-md-3 col-12">
                  <div className="colb-main b-lg-0 mb-md-0 mb-3 text-center clearfix">
                    <div className="our-colbox clearfix aos-init aos-animate" data-aos="fade-down">
                      <div className="hover-divcol pb-3">
                        <div className="p-3 pb-2">
                          <h3 className="fnt-22">Sales and <br /> Marketing Manager</h3>
                        </div>
                        <div className="learn-more mt-topln d-block text-center mb-3 clearfix">
                          <button className="lrn-b"><a href="/img/pdf/sales-%26-marketing.pdf" className="text-d" target="_blank" download="">Know More</a></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-12">
                  <div className="colb-main b-lg-0 mb-md-0 mb-3 text-center clearfix">
                    <div className="our-colbox clearfix aos-init aos-animate" data-aos="fade-down">
                      <div className="hover-divcol pb-3">
                        <div className="p-3 pb-2">
                          <h3 className="fnt-22">Analytics <br /> Consultant</h3>
                        </div>
                        <div className="learn-more mt-topln d-block text-center mb-3 clearfix">
                          <button className="lrn-b"><a href="/img/pdf/analytics_consultant.pdf" className="text-d" target="_blank" download="">Know More</a></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-lg-none d-md-none d-block col-lg-3 col-md-3 col-12">
                  <div className="colb-main b-lg-0 mb-md-0 mb-3 text-center clearfix" style={{ visibility: 'hidden' }}>
                    <div className="our-colbox clearfix aos-init aos-animate" data-aos="fade-down">
                      <div className="hover-divcol pb-3">
                        <div className="p-3 pb-2">
                          <h3 className="fnt-22">Analytics <br /> Consultant</h3>
                        </div>
                        <div className="learn-more mt-topln d-block text-center mb-3 clearfix">
                          <button className="lrn-b"><a href="/img/pdf/analytics_consultant.pdf" className="text-d" target="_blank" download="">Know More</a></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-12 col-md-12 col-12 pt-lg-4 pt-md-4 pt-0">
                  <div className="cantfind pt-lg-5 pt-md-5 pt-4 mt-lg-5 mt-md-5 mt-3 mb-lg-5 mb-md-5 mb-3 text-center clearfix">
                    <h3 className="ft-wt2 mb-lg-3 mb-md-3 mb-2">Can’t find the job you were looking for?</h3>
                    <div className="d-block m-auto text-center">
                      <h4 className="mb-0 pt-3 pb-3">Send your profile to <span className="clr-ab"><a href="mailto:reachus@turnb.com" className="clr-ab" style={{ textDecoration: 'none', fontWeight: 'bold' }}>reachus@turnb.com</a></span> and we’ll get back to you.</h4>
                    </div>
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

export default CareerSection;

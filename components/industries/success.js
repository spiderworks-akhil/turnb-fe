import React from 'react';
import Slider from 'react-slick';

const IndustrySuccess = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="container">
      <div className="mt-lg-0 mt-md-0 mt-0 mb-lg-5 mb-md-5 mb-3">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-12 col-12">
            <div className="text-center position-relative aos-init aos-animate" data-aos="fade-down">
              <h1 className="title-ak2 ft-wt2 text-center mb-lg-5 mb-md-5 mb-4 mt-lg-0 mt-md-0 mt-4">
                <span className="text-dark">Data Driven <span className="clr-grn ft-wt3">Success </span></span>
              </h1>
            </div>
          </div>
        </div>
        <section className="testimonials pt-0 pb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-11 col-md-11 col-12">
                <Slider {...settings}>
                  <div className="item">
                    <div className="shadow-effect text-center">
                      <div className="case-box mb-lg-4 mb-md-4 mb-3 clearfix">
                        <div className="img-case">
                          <img src="/img/case-studies/course-em.jpg" className="img-fluid aos-init aos-animate" data-aos="fade-down" alt="Case Study 1" />
                          <div className="title-hover width-tiltb">
                            <h5 className="text-white p-0 m-0">Tech</h5>
                          </div>
                        </div>
                        <div className="prt-git2 aos-init aos-animate" data-aos="fade-up">
                          <h2 className="text-left pt-2 mt-0 pb-lg-2 pb-md-2 pb-2 ft-wtcase2">Course Effectiveness Heatmap&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
                          <p style={{color:'#018381'}} className="text-left mt-1 fnt-15">The client, a fortune 50 company, is involved in providing training to customers through their various associates for evangelizing ...</p>
                          <div className="knw-more text-left pb-lg-3 pb-md-3 pb-2 mt-lg-2 mt-md-2 mt-3 clearfix">
                            <a href="course-effectiveness-heatmap.html" className="btn btn-primary kn-mb">Read More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Repeat for other items */}
                  <div className="item">
                    <div className="case-box mb-lg-4 mb-md-4 mb-3 clearfix">
                      <div className="img-case">
                        <img src="/img/case-studies/helpedlearning.jpg" className="img-fluid aos-init aos-animate" data-aos="fade-down" alt="Case Study 2" />
                        <div className="title-hover with-titleh">
                          <h5 className="text-white p-0 m-0">Tech</h5>
                        </div>
                      </div>
                      <div className="prt-git2 aos-init aos-animate" data-aos="fade-up">
                        <h2 className="text-left pt-2 mt-0 pb-lg-2 pb-md-2 pb-2 ft-wtcase2">Helped a tech learning giant to identify bottlenecks...</h2>
                        <p style={{color:'#018381'}} className="text-left mt-1 fnt-15">Client is a technology giant and the worldwide leader in software, services and solutions. It relies on its partner organizations....</p>
                        <div className="knw-more text-left pb-lg-3 pb-md-3 pb-2 mt-lg-2 mt-md-2 mt-3 clearfix">
                          <a href="helped-a-tech-learning-giant-to-identify.html" className="btn btn-primary kn-mb">Read More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Add remaining items similarly */}
                </Slider>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default IndustrySuccess;

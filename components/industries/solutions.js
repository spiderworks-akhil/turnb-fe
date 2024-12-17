import React from 'react';

const SolutionAreas = ({ data }) => {
  return (
    <section className="text-center mt-5 mb-0 pb-lg-4 pb-md-4 pb-3 pt-3 clearfix">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-12 col-12">
            <div className="text-center position-relative aos-init aos-animate" data-aos="fade-down">
              <h2 className="title-ak2 ft-wt2 text-center mb-lg-2 mb-md-2 mb-2 mt-lg-0 mt-md-0 mt-4">
                <span className="text-dark industries-heading" dangerouslySetInnerHTML={{ __html: data?.content?.title_2 }} />
                {/* <span className="text-dark">Solution <span className="clr-grn ft-wt3">Areas </span></span> */}
              </h2>
            </div>
          </div>
        </div>
        {/* SLIDER */}
        <div className="rtrl mt-lg-5 mt-md-5 mt-4">
          <div className="row justify-content-center">
            {
              data?.content?.industries_process_listing_name?.list?.map((obj, index) => (

                <div key={index} className="col-lg-2 col-md-2 col-12">
                  <div className="box-exp clearfix aos-init mt-5 mb-lg-3 mb-md-3" data-aos="fade-down">
                    <div className="rect-box3 clearfix">
                      <button className="spin circle">
                        <h5>{obj?.title}</h5>
                      </button>
                    </div>
                    <p className="text-center pt-rec d-block mt-lg-3 mt-md-3 mt-2">{obj?.short_description}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionAreas;

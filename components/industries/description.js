import React from 'react';

const RetailSection = ({data}) => {

  return (
    <div className="retail-bg clearfix">
      <div className="container">
        <div className="about-cont2 pt-lg-5 pt-md-5 pt-3 pb-lg-5 pb-md-5 pb-3 clearfix">
          <div className="row p-0 justify-content-center">
            <div className="col-lg-11 col-md-11 col-12">
              <div className="text-center position-relative aos-init aos-animate" data-aos="fade-up">

              <div className="bg-image-sec dark-black" dangerouslySetInnerHTML={{ __html: data?.content?.description_2 }} />

                {/* <div className="bg-image-sec">
                  <p className="text-center w-auto mt-0 text-center mb-2 dark-black">
                    In a rapidly evolving tech landscape, maintaining a competitive edge is imperative. TurnB empowers the
                    industry through analytics solutions that revolutionize product innovation, precise forecasting, risk
                    mitigation, operational efficiency, customer-centric strategies, and AI and ML integration. By
                    decoding market trends, understanding customer behavior, and optimizing resource planning, TurnB
                    drives tech companies forward, ensuring they lead in innovation, efficiency, and customer satisfaction
                    within this dynamic sphere.
                  </p>
                </div> */}
                {/* Uncomment if you need a line */}
                {/* <div className="line-dark mt-3 mb-3"></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetailSection;

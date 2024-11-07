import React from 'react';
import Slider from 'react-slick';
import AOS from 'aos';
import Image from 'next/image';

const LifeEventsSection = ({ data }) => {
  // Slick settings
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Screen width at which this rule applies
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600, // Another breakpoint for smaller screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
    appendDots: dots => (
      <div style={{ bottom: '-30px' }}>
        <ul style={{ margin: '0px' }}>{dots}</ul>
      </div>
    ),
  };

  return (
    <div className="bg-lightgreen pt-lg-5 pt-md-5 pt-3 pb-lg-3 pb-md-3 pb-2 clearfix">
      <div className="container" data-aos="fade-up">
        <div className="text-center position-relative" data-aos="fade-down">
          <h2 className="title-ak2 font-htd ft-wt3 text-center mb-lg-5 mb-md-5 mb-3 pt-lg-4 pt-md-4 pt-2 mt-lg-0 mt-md-0 mt-4 clt">
            {data?.content?.life_at_turnb_section_5_title}
          </h2>
        </div>
      </div>

      {/* EVENTS SECTION */}
      <section className="testimonials pt-0 pb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11 col-md-11 col-12">
              <Slider {...settings}>
                {
                  data?.content?.listing_id_events?.map((obj, index) => (
                    <div key={index} className="item">
                      <div className="shadow-effect text-center">
                        <Image width={350} height={260} src={obj?.media_id?.file_path} className="img-fluid d-block text-center" alt={obj?.media_id?.alt_text} />
                        <p className="mt-3 mb-0 text-center">{obj?.title}</p>
                      </div>
                    </div>
                  ))
                }

              </Slider>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LifeEventsSection;

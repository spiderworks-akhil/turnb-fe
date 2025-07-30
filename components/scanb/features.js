import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ScanbFeatures = ({ data }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,           // <-- Center the active slide
    centerPadding: '0px',       // <-- No extra padding around center
    afterChange: (current) => setActiveSlide(current),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: true,
          centerPadding: '0px',
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '0px',
        },
      },
    ],
  };

  return (
    <div className="container">
      <div className="scanb-growth d-block mt-lg-3 mt-md-3 mt-3 p-4 clearfix mb-lg-5 mb-md-5 mb-4">
        <div className="row justify-content-center">
          <div className="col-lg-11 col-md-11 col-12">
            <h2 className="mb-lg-5 mb-md-5 mb-3">{data?.content?.scanb_section_5_text}</h2>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-12 col-12">
            <section className="scanb-feature-s game-section">
              <Slider {...settings}>
                {data?.content?.listing_id_scanb_feature?.map((obj, index) => (
                  <div key={index} className="d-flex justify-content-center">
                    <div
                      className="item scanb-feature-block"
                      style={{ backgroundImage: `url('${obj?.media_id?.file_path}')` }}
                    >
                      <div className="item-desc text-center">
                        <h3 className="text-white">{obj?.title}</h3>
                        {activeSlide === index && (
                          <p className="text-white">{obj?.short_description}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScanbFeatures;

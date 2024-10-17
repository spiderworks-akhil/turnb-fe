import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FeaturesTest = () => {
  const settings = {
    dots: true,              // Enable dots for navigation
    infinite: true,          // Infinite loop
    speed: 500,              // Transition speed
    slidesToShow: 3,         // Number of slides to show
    slidesToScroll: 1,       // Number of slides to scroll
    autoplay: true,          // Enable autoplay
    autoplaySpeed: 3000,     // Autoplay speed (3 seconds)
    responsive: [            // Responsive breakpoints for different screen sizes
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="my-slider">
      <Slider {...settings}>

          <div className="slider-item">
                <div>
                <h3>01</h3>
                <p>02</p>
                </div>

          </div>

          <div className="slider-item">
                <div>
                <h3>01</h3>
                <p>02</p>
                </div>

          </div>

          <div className="slider-item">
                <div>
                <h3>01</h3>
                <p>02</p>
                </div>

          </div>

          <div className="slider-item">
                <div>
                <h3>01</h3>
                <p>02</p>
                </div>

          </div>
        
      </Slider>
    </div>
  );
};

export default FeaturesTest;

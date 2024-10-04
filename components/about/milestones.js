import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
import 'owl.carousel/dist/assets/owl.carousel.css'; // Owl carousel styles
import 'owl.carousel/dist/assets/owl.theme.default.css'; // Owl theme

const MilestonesSection = ({data}) => {
  useEffect(() => {
    
    // Ensure jQuery and Owl Carousel work only on the client side
    if (typeof window !== 'undefined') {
      const $ = require('jquery'); // Dynamically require jQuery on client-side
      window.jQuery = $; // Assign jQuery to window object
      require('owl.carousel'); // Owl Carousel dependency
      
      $('.carousel-main').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 3,
          },
        },
      });
    }
  }, []);

  return (
    <div className="container mt-lg-5 mt-md-5 mt-3 mb-lg-5 mb-md-5 mb-3">
      <div className="text-center position-relative" data-aos="fade-down">
        <h2 className="title-ak2 font-htd ft-wt2 text-center mb-lg-5 mb-md-5 mb-3 pt-lg-4 pt-md-4 pt-2 mt-lg-0 mt-md-0 mt-4">
          <span className="clr-g">{data?.content?.title_5}</span>
        </h2>
      </div>
      <div className="ak-amenites clearfix">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-12 col-12 col-carousel bg-transparent">
            <div className="owl-carousel carousel-main bg-transparent">
              {/* Start of milestone item */}
              {data?.content?.listing_id_milestone.map((milestone, index) => (
                <div key={index}>
                  <div className="mile-box text-center">
                    <div className="crlce clearfix">
                      <div className="box-clr">
                        <h3 className="text-center text-white">{milestone.title}</h3>
                      </div>
                    </div>
                    <div className="d-block text-center m-auto">
                      <div className="bx-line"></div>
                      <div className="dot-b"></div>
                    </div>
                    <div className='text-black' dangerouslySetInnerHTML={{__html:milestone.short_description}} />
                    {/* <p className="text-center">{milestone.short_description}</p> */}
                  </div>
                </div>
              ))}
              {/* End of milestone item */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MilestonesSection;

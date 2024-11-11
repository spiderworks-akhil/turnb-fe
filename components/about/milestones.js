import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS library
import 'owl.carousel/dist/assets/owl.carousel.css'; // Owl carousel styles
import 'owl.carousel/dist/assets/owl.theme.default.css'; // Owl theme
import 'aos/dist/aos.css'; // AOS styles
import Image from 'next/image';

const MilestonesSection = ({ data, }) => { // Accept a carouselId as prop

  const carouselId = 'milestone'

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const $ = require('jquery');
      window.jQuery = $;
      require('owl.carousel');

      // Initialize Owl Carousel using unique ID
      const owl = $(`#${carouselId}`); // Use ID selector for unique carousel
      owl.owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
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

      // Custom next and prev button controls for the specific carousel
      $(`#${carouselId}-next`).click(() => {
        owl.trigger('next.owl.carousel');
      });

      $(`#${carouselId}-prev`).click(() => {
        owl.trigger('prev.owl.carousel');
      });
    }
  }, [carouselId]); // Dependency on carouselId to initialize each instance independently

  return (
    <div className="container mt-lg-5 mt-md-5 mt-3 mb-lg-5 mb-md-5 mb-3">
      <div className="text-center position-relative" data-aos="fade-down">
        <h2 className="title-ak2 font-htd ft-wt2 text-center mb-lg-5 mb-md-5 mb-3 pt-lg-4 pt-md-4 pt-2 mt-lg-0 mt-md-0 mt-4">
          <span className="clr-g">{data?.content?.title_5}</span>
        </h2>
      </div>
      <div className="ak-amenites clearfix">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-12 col-12 col-carousel bg-transparent d-flex justify-content-center">
            {/* Custom Navigation Arrows with unique IDs */}
            <a id={`${carouselId}-prev`} className="customPrevBtn " style={{ cursor: 'pointer' }}><Image src={'/img/left-arw.jpg'} width={47} height={44} /></a>
            <div id={carouselId} className="owl-carousel carousel-main bg-transparent">
              {data?.content?.listing_id_milestone?.map((milestone, index) => (
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
                    <div
                      className="text-black milestone-div"
                      dangerouslySetInnerHTML={{ __html: milestone.detailed_description }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <a id={`${carouselId}-next`} className="customNextBtn "><Image style={{ cursor: 'pointer' }} src={'/img/right-arw.jpg'} width={47} height={44} /></a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MilestonesSection;

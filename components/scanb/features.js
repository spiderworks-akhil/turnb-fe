import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ScanbFeatures = ({ data }) => {

  console.log(data);


  const settings = {
    dots: true,              // Enable dots for navigation
    infinite: true,          // Infinite loop
    speed: 500,              // Transition speed
    slidesToShow: 3,         // Number of slides to show
    slidesToScroll: 1,       // Number of slides to scroll
    autoplay: true,          // Enable autoplay
    autoplaySpeed: 3000,     // Autoplay speed (3 seconds)
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
        },
      },
    ],
  };

  return (
    <div className="container">
      <div className="scanb-growth d-block mt-lg-3 mt-md-3 mt-3 p-4 clearfix mb-lg-5 mb-md-5 mb-4">
        <div className="row justify-content-center">
          <div className="col-lg-11 col-md-11 col-12">
            <div className="">
              <h1 className="mb-lg-5 mb-md-5 mb-3">{data?.content?.scanb_section_5_text}</h1>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-12 col-12">
            <section className="scanb-feature-s game-section">
              <Slider {...settings}>
                {
                  data?.content?.listing_id_scanb_feature?.map((obj, index) => (
                  <div key={index}>
                      <div className="item scanb-feature-block" style={{ backgroundImage: `url('${obj?.media_id?.file_path}')` }} >
                        <div className="item-desc text-center">
                          <h3 className="text-white">{obj?.title}</h3>
                          <p className='text-white'>{obj?.short_description}</p>
                        </div>
                      </div>
                  </div>
                  ))
                }

                {/* <div className="item" style={{ backgroundImage: 'url(/img/scanb/v3.png)' }}>
                  <div className="item-desc text-center">
                    <h3 className="text-white">Interactive dashboards</h3>
                    <p>Our data dashboards will enable users to drill down the data into specific details, filter data based on different criteria, and view information from different angles.</p>
                  </div>
                </div>
                <div className="item" style={{ backgroundImage: 'url(/img/scanb/v2.png)' }}>
                  <div className="item-desc text-center">
                    <h3 className="text-white">Subscription model</h3>
                    <p>Allows for various tiers or plans, granting flexibility in selecting the service level, starting with a monthly subscription.</p>
                  </div>
                </div>
                <div className="item" style={{ backgroundImage: 'url(/img/scanb/v4.png)' }}>
                  <div className="item-desc text-center">
                    <h3 className="text-white">High-level security</h3>
                    <p>ScanB is bolstered by Microsoft Azure AD security. It operates on authorized IP addresses and offers role-based access management.</p>
                  </div>
                </div>
                <div className="item" style={{ backgroundImage: 'url(/img/scanb/v5.png)' }}>
                  <div className="item-desc text-center">
                    <h3 className="text-white">Powered by Microsoft</h3>
                    <p>Built utilizing Microsoft&apos;s sophisticated Power BI platform for advanced analytics capabilities.</p>
                  </div>
                </div>
                <div className="item" style={{ backgroundImage: 'url(/img/scanb/v7.png)' }}>
                  <div className="item-desc text-center">
                    <h3 className="text-white">Training modules</h3>
                    <p>ScanB possesses training materials which can be used to train and educate users across organizations.</p>
                  </div>
                </div>
                <div className="item" style={{ backgroundImage: 'url(/img/scanb/v6.png)' }}>
                  <div className="item-desc text-center">
                    <h3 className="text-white">Multi-device access</h3>
                    <p>Meetings will become smarter with business insights accessible on mobile and the web app.</p>
                  </div>
                </div>
                <div className="item" style={{ backgroundImage: 'url(/img/scanb/v8.png)' }}>
                  <div className="item-desc text-center">
                    <h3 className="text-white">Change management</h3>
                    <p>Capability to enhance/modify product post-deployment, including creating customized dashboards and metrics upon request.</p>
                  </div>
                </div> */}


              </Slider>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScanbFeatures;

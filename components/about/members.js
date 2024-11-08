import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Image from 'next/image';

const KeyMembersSection = ({ data, team }) => {

  console.log(team);
  

  const carouselId = 'members'

  useEffect(() => {
    AOS.init({ duration: 1000 });

    if (typeof window !== 'undefined') {
      const $ = require('jquery');
      window.jQuery = $;
      require('owl.carousel');

      const owl = $(`#${carouselId}`);

      $('.carousel-main').owlCarousel({
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

      $(`#${carouselId}-next`).click(() => {
        owl.trigger('next.owl.carousel');
      });

      $(`#${carouselId}-prev`).click(() => {
        owl.trigger('prev.owl.carousel');
      });

    }
  }, [carouselId]);


  return (
    <div className="container mt-lg-5 mt-md-5 mt-3">
      <div className="text-center position-relative" data-aos="fade-down">
        <h1 className="title-ak2 font-htd ft-wt2 mb-lg-0 mb-md-0 mb-0 mt-lg-0 mt-md-0 mt-4">
          <span className="clr-g" dangerouslySetInnerHTML={{ __html: data?.content?.title_6 }} />
        </h1>
      </div>

      <div className="container">
        <section className="section-team pt-0 pb-5">
          <div className="ak-amenites clearfix">
            <div className="row justify-content-center">
              <div className="col-lg-12 col-md-12 col-12 col-carousel bg-transparent d-flex justify-content-center">

                <a id={`${carouselId}-prev`} className="customPrevBtn d-flex justify-content-center align-items-center" style={{ cursor: 'pointer' }}><Image src={'/img/left-arw.jpg'} width={47} height={44} /></a>
                <div id={carouselId} className="owl-carousel carousel-main bg-transparent">
                  {team?.data?.map((member, index) => (
                    <div key={index}>
                      <div className="single-person mt-5" data-aos={index % 2 === 0 ? 'fade-up' : 'fade-down'}>
                        <div className="person-image">
                          <Image width={300} height={400} src={member?.featured_image?.file_path} className="img-fluid" alt={member?.featured_image?.alt_text || member.name} />
                        </div>
                        <div className="person-info text-center">
                          <h3 className="full-name clr-grn">{member.name}</h3>
                          <span className="speciality">{member.designation}</span>
                        </div>
                        {
                          member?.linkedin_link &&
                          <div className="social-icons text-center">
                            <a href={member.linkedin_link} target="_blank" rel="noreferrer">
                              <i className="fa fa-linkedin lindd" aria-hidden="true"></i>
                            </a>
                          </div>
                        }
                      </div>
                    </div>
                  ))}
                </div>
                <a id={`${carouselId}-next`} className="customNextBtn d-flex justify-content-center align-items-center" style={{ cursor: 'pointer' }}><Image src={'/img/right-arw.jpg'} width={47} height={44} /></a>

              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default KeyMembersSection;

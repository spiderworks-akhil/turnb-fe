import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const KeyMembersSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });

    if (typeof window !== 'undefined') {
      const $ = require('jquery');
      window.jQuery = $;
      require('owl.carousel');

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

  const teamMembers = [
    {
      name: 'Rufin Alikhan',
      role: 'Founder and CEO',
      img: 'img/team/rufin.png',
      linkedIn: 'https://www.linkedin.com/in/rufin-alikhan-84b0577/',
    },
    {
      name: 'Fathima Sadiq Hassan',
      role: 'Chief Financial Officer',
      img: 'img/team/team2.png',
      linkedIn: 'https://www.linkedin.com/in/fathima-hassan-1407a7103/',
    },
    {
      name: 'Subha V Menon',
      role: 'Vice President, Finance',
      img: 'img/team/team3.png',
      linkedIn: 'https://www.linkedin.com/in/subha-menon-94a91326/',
    },
    {
      name: 'Mahesh Pillai',
      role: 'Vice President, Consulting',
      img: 'img/team/team1.png',
      linkedIn: 'https://www.linkedin.com/in/mahesh-pillai-16045743/',
    },
    {
      name: 'Mohammed Ameer',
      role: 'Vice President, Consulting',
      img: 'img/team/ammer.png',
      linkedIn: 'https://www.linkedin.com/in/mohammed-ameer-ca-42560884/',
    },
    {
      name: 'Ajin Das',
      role: 'Vice President, Consulting',
      img: 'img/team/das.png',
      linkedIn: 'https://www.linkedin.com/in/ajin-das-b9341ba9/',
    },
    {
      name: 'Adil E',
      role: 'Social Media Strategist',
      img: 'img/team/adil.png',
      linkedIn: 'https://www.linkedin.com/in/adil-e-914b59103/',
    },
  ];

  return (
    <div className="container mt-lg-5 mt-md-5 mt-3">
      <div className="text-center position-relative" data-aos="fade-down">
        <h1 className="title-ak2 font-htd ft-wt2 mb-lg-0 mb-md-0 mb-0 mt-lg-0 mt-md-0 mt-4">
          <span className="clr-g">Key <span className="clr-grn">Members</span></span>
        </h1>
      </div>

      <div className="container">
        <section className="section-team pt-0 pb-5">
          <div className="ak-amenites clearfix">
            <div className="row justify-content-center">
              <div className="col-lg-12 col-md-12 col-12 col-carousel bg-transparent">
                <div className="owl-carousel carousel-main bg-transparent">
                  {teamMembers.map((member, index) => (
                    <div key={index}>
                      <div className="single-person mt-5" data-aos={index % 2 === 0 ? 'fade-up' : 'fade-down'}>
                        <div className="person-image">
                          <img src={member.img} className="img-fluid" alt={member.name} />
                        </div>
                        <div className="person-info text-center">
                          <h3 className="full-name clr-grn">{member.name}</h3>
                          <span className="speciality">{member.role}</span>
                        </div>
                        <div className="social-icons text-center">
                          <a href={member.linkedIn} target="_blank" rel="noreferrer">
                            <i className="fa fa-linkedin lindd" aria-hidden="true"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default KeyMembersSection;

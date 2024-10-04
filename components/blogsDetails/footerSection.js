import React, { useEffect } from 'react';
import AOS from 'aos';
import { useRouter } from 'next/router';

const FooterSection = ({data}) => {

  const router = useRouter();
  const pageUrl =
    typeof window !== 'undefined'
      ? window.location.origin + router.asPath
      : '';

  return (
    <div>
      {/* Main Section */}
      {/* <div
        className="container mb-lg-5 mb-md-5 mb-4"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <div className="row justify-content-center">
          <div className="col-lg-11 col-md-11 col-12">
            <div className="heading-blg mt-lg-5 mt-md-5 mt-3 mb-lg-4 mb-md-4 mb-3">
              <h1 className="mb-0 bghedeth text-white">What is Data-Driven Decision-Making?</h1>
            </div>

            <div className="row">
              <div className="col-lg-12 col-md-12 col-12">
                <div className="choice-text">
                  <p className="mt-1 mb-lg-3 mb-md-3 mb-2">
                    Addressing ethical dilemmas in data analytics requires proactive measures aimed at
                    enhancing transparency, accountability, and fairness. Solutions encompass fostering
                    ethical awareness, promoting transparency in algorithmic decision-making, enhancing
                    data governance frameworks, and advocating for individual rights to privacy and control
                    over personal data. By integrating ethical principles into organizational culture and
                    decision-making processes, we can establish a foundation for responsible data analytics practices.
                  </p>

                  <p className="mt-1 mb-lg-3 mb-md-3 mb-2">
                    The future landscape of data analytics is marked by evolving technology and emerging
                    ethical imperatives. Anticipated trends include advancements in machine learning and
                    the proliferation of data sources, alongside persistent challenges related to algorithmic
                    bias, privacy, and accountability. Addressing these challenges will require collaborative
                    efforts among stakeholders to develop and uphold ethical frameworks that safeguard
                    individual rights and promote societal well-being.
                  </p>

                  <p className="mt-1 mb-lg-3 mb-md-3 mb-2">
                    In conclusion, navigating the ethical considerations in data analytics demands a concerted effort to
                    balance innovation with ethical responsibility. By prioritizing transparency,
                    accountability, and fairness, we can harness the potential of data analytics for positive
                    societal impact while mitigating its dark side. As technology continues to evolve, ethical
                    considerations will remain paramount, guiding the ethical evolution of data analytics
                    toward a more equitable and socially responsible future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Share on LinkedIn Section */}
      <div className="container">
        <a
          href={`https://www.linkedin.com/shareArticle?mini=true&amp;url=${pageUrl};title=${data?.slug};summary=${data?.short_description}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-linkedin" style={{ backgroundColor: '#0077b5', color: 'white', padding: '5px' }}></i>
          Share on LinkedIn
        </a>
        <div className="comments"></div>
      </div>
    </div>
  );
};

export default FooterSection;

import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const LifeMiddleSection = () => {
 
    
    const options = {
        dots: true, // Show navigation dots
        infinite: true, // Infinite loop sliding
        speed: 500, // Speed of the transition
        slidesToShow: 1, // Number of slides to show
        slidesToScroll: 1 // Number of slides to scroll at a time
      };

  return (
    <div className="grey-seclife clearfix">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="img-lifet mt-lg-4 mt-md-4 mt-3" data-aos="fade-up">
              <div className="imginner-lfe mb-lg-4 mb-md-4 mb-3">
                <p className="pt-lg-3 pt-md-3 pt-2 pb-lg-0 pb-md-0 pb-0">
                  The TurnB family believes in an <strong className="gr-lfclr">open, non-judgmental</strong> atmosphere where everyone's perspective is valued, and expressing opinions is encouraged. <strong className="gr-lfclr">Empathy</strong> is at our core, just as much as our reliance on data. Before delving into business <strong className="gr-lfclr">problem-solving</strong>, we prioritize integrating you into our family, ensuring your comfort and readiness for the <strong className="gr-lfclr">data-driven journey</strong> ahead.
                </p>

                <p className="pt-lg-0 pt-md-0 pt-0 mt-0 pb-lg-3 pb-md-3 pb-3">
                  Aside from our love for food, we have an insatiable <strong className="gr-lfclr">appetite for knowledge.</strong> Learning something new every day is our shared passion, and we actively promote <strong className="gr-lfclr">continuous learning</strong> to bridge any knowledge gaps. <strong className="gr-lfclr">Curiosity</strong> isn't a danger here; it's our lifeline!
                </p>

                {/* Carousel for images */}
                <Slider {...options}>
                  <div className="item">
                    <Image
                      src="/img/t8.jpg"
                      alt="testimonial 1"
                      className="img-fluid"
                      width={600}
                      height={400}
                    />
                  </div>
                  <div className="item">
                    <Image
                      src="/img/t9.jpg"
                      alt="testimonial 2"
                      className="img-fluid"
                      width={600}
                      height={400}
                    />
                  </div>
                  <div className="item">
                    <Image
                      src="/img/t10.jpg"
                      alt="testimonial 3"
                      className="img-fluid"
                      width={600}
                      height={400}
                    />
                  </div>
                  <div className="item">
                    <Image
                      src="/img/t11.jpg"
                      alt="testimonial 4"
                      className="img-fluid"
                      width={600}
                      height={400}
                    />
                  </div>
                </Slider>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12">
            <div className="cont-lifpad" data-aos="fade-up">

                
              <Slider {...options}>
                  <div className="item">
                    <Image
                      src="/img/t8.jpg"
                      alt="testimonial 1"
                      className="img-fluid"
                      width={600}
                      height={400}
                    />
                  </div>
                  <div className="item">
                    <Image
                      src="/img/t9.jpg"
                      alt="testimonial 2"
                      className="img-fluid"
                      width={600}
                      height={400}
                    />
                  </div>
                  <div className="item">
                    <Image
                      src="/img/t10.jpg"
                      alt="testimonial 3"
                      className="img-fluid"
                      width={600}
                      height={400}
                    />
                  </div>
                  <div className="item">
                    <Image
                      src="/img/t11.jpg"
                      alt="testimonial 4"
                      className="img-fluid"
                      width={600}
                      height={400}
                    />
                  </div>
                </Slider>
              <p data-aos="fade-down">
                But it's not all about work at TurnB. We understand the importance of nurturing <strong className="gr-lfclr">creativity</strong> and fostering a <strong className="gr-lfclr">vibrant environment.</strong> You're welcome to crack jokes (even if they're a bit lame!) and indulge in <strong className="gr-lfclr">our office binge-eating sessions.</strong> For those with a <strong className="gr-lfclr">love for sports,</strong> our sporting events will be a highlight.
              </p>

              <p className="pb-lg-5 pb-md-5 pb-3" data-aos="fade-up">
                This isn't just a dream—it can be your new reality at TurnB. <br />{' '}
                <strong className="gr-lfclr">Are you ready to turn your aspirations into a vibrant experience? Welcome to the TurnB family!</strong>
              </p>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeMiddleSection;

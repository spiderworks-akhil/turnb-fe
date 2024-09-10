import React from 'react';
import Slider from 'react-slick';

const LifeTestimonials = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };


    return (
        <section className="testimonials pt-0 pb-5" data-aos="fade-up">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-9 col-md-9 col-12">
                        <Slider {...settings}>
                            {/* TESTIMONIAL 1 */}
                            <div className="item">
                                <div className="shadow-ef">
                                    <div className="testi-box">
                                        <div className="testi-cont text-center clearfix">
                                            <div className="quoteup">
                                                <img src="/img/quote.png" className="img-fluid" alt="quote" />
                                            </div>
                                            <p>
                                                I've been at TurnB for 8+ years, working on exciting projects and always learning. It's not just a job—it’s a place where I grow, have fun, and celebrate achievements with my team. TurnB is more than a workplace; it's a community that fosters growth and innovation.
                                            </p>
                                            <div className="line-tst m-auto d-block text-center"></div>
                                            <div className="d-block m-auto text-center p-3">
                                                <img src="/img/empexp/mahesh.png" className="img-fluid d-block m-auto text-center" alt="Mahesh" style={{ width: 'auto' }} />
                                            </div>
                                            <h4 className="clt ft-wt3 mt-lg-2 mt-md-2 mt-2 mb-1">Mahesh</h4>
                                            <div className="quotedwn">
                                                <img src="/img/quotedown.png" className="img-fluid" alt="quote down" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="shadow-ef">
                                    <div className="testi-box">
                                        <div className="testi-cont text-center clearfix">
                                            <div className="quoteup">
                                                <img src="/img/quote.png" className="img-fluid" alt="quote" />
                                            </div>
                                            <p>
                                                I've been at TurnB for 8+ years, working on exciting projects and always learning. It's not just a job—it’s a place where I grow, have fun, and celebrate achievements with my team. TurnB is more than a workplace; it's a community that fosters growth and innovation.
                                            </p>
                                            <div className="line-tst m-auto d-block text-center"></div>
                                            <div className="d-block m-auto text-center p-3">
                                                <img src="/img/empexp/mahesh.png" className="img-fluid d-block m-auto text-center" alt="Mahesh" style={{ width: 'auto' }} />
                                            </div>
                                            <h4 className="clt ft-wt3 mt-lg-2 mt-md-2 mt-2 mb-1">Mahesh</h4>
                                            <div className="quotedwn">
                                                <img src="/img/quotedown.png" className="img-fluid" alt="quote down" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* END OF TESTIMONIAL 1 */}

                            {/* Repeat similar structure for other testimonials */}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LifeTestimonials;

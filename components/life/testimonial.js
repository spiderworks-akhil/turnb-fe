import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';

const LifeTestimonials = ({ data }) => {

    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
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
                    <div className="text-center position-relative" data-aos="fade-down">
                        <h2 className="title-ak2 font-htd ft-wt3 text-center mb-lg-5 mb-md-5 mb-5 pt-lg-4 pt-md-4 pt-2 mt-lg-0 mt-md-0 mt-4 clt"
                            data-aos="zoom-in" data-aos-duration="1200">{data?.content?.life_at_turnb_section_4_title}
                        </h2>
                    </div>
                    <div className="col-lg-9 col-md-9 col-12">
                        <Slider {...settings}>
                            {/* TESTIMONIAL 1 */}
                            {
                                data?.content?.listing_id_experience?.map((obj, index) => (
                                    <div key={index} className="item">
                                        <div className="shadow-ef">
                                            <div className="testi-box">
                                                <div className="testi-cont text-center clearfix">
                                                    <div className="quoteup">
                                                        <Image width={100} height={100} src="/img/quote.png" className="img-fluid" alt="quote" />
                                                    </div>
                                                    <p>
                                                        {obj?.short_description}
                                                    </p>
                                                    <div className="line-tst m-auto d-block text-center"></div>
                                                    <div className="d-block m-auto text-center p-3">
                                                        <Image width={100} height={100} src={obj?.media_id?.file_path}className="img-fluid d-block m-auto text-center" alt={obj?.media_id?.alt_text} style={{ width: 'auto' }} />
                                                    </div>
                                                    <h4 className="clt ft-wt3 mt-lg-2 mt-md-2 mt-2 mb-1">{obj?.title}</h4>
                                                    <div className="quotedwn">
                                                        <Image width={100} height={100} src="/img/quotedown.png" className="img-fluid" alt="quote down" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                            {/* <div className="item">
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
                            </div> */}
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

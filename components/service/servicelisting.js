import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS library
import BreadCrumbs from '../common/breadCrumbs';
import Image from 'next/image';



const ServicesSection = ({ data }) => {
    return (
        <>
            <BreadCrumbs secondCrumb={data?.name} />

            <div className="container">
                <div className="about-cont2 mt-lg-3 mt-md-3 mt-2 mb-lg-5 mb-md-5 mb-3 clearfix">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 col-md-12 col-12">
                            <div className="text-center position-relative aos-init aos-animate" data-aos="fade-down">
                                <h1 className="title-ak2 ft-wt2 text-center mb-lg-2 mb-md-2 mb-2 mt-lg-0 mt-md-0 mt-0">
                                    <span className="text-dark home-title" dangerouslySetInnerHTML={{ __html: data?.content?.service_title_1 }} />
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="row p-4 justify-content-center">
                        <div className="col-lg-10 col-md-10 col-12">
                            <div className="text-justify position-relative aos-init aos-animate" data-aos="fade-up">
                                <div className="bg-image-sec">
                                    <p className="w-auto mt-0 text-center mb-2 dark-black">
                                        {data?.content?.service_short_description_1}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="text-center pt-3 mt-lg-1 mt-md-1 mt-1">
                <div className="container">
                    {/* SLIDER */}
                    <div className="carousel slide" data-bs-ride="carousel" id="carouselExampleIndicatorsnew">
                        {/* Uncomment if you need indicators */}
                        {/* <div className="carousel-indicators carousel-indicators-bottom">
              <button aria-label="Slide 1" className="active" data-bs-slide-to="0" data-bs-target="#carouselExampleIndicatorsnew" type="button"></button>
              <button aria-label="Slide 2" data-bs-slide-to="1" data-bs-target="#carouselExampleIndicatorsnew" type="button"></button>
            </div> */}
                        <div className="carousel-inner" style={{ overflow: 'hidden' }}>
                            <div className="carousel-item active">
                                <div className="row">
                                    {
                                        data?.content?.listing_id_service?.map((obj, index) => (
                                            <div key={index} className="col-lg-12 col-md-12 col-12">
                                                <div className="career-box border-non-serices mb-lg-5 mb-md-5 mb-3 clearfix">
                                                    {
                                                        index % 2 == 0 ?

                                                            <div className="row g-0">
                                                                <div className="col-lg-3 col-md-3 col-12 pd-ridser">
                                                                    <Image width={401} height={268} src={obj?.media_id?.file_path} className="img-fluid aos-init aos-animate brradis-one" data-aos="fade-down" alt={obj?.media_id?.alt_text} />
                                                                </div>
                                                                <div className="col-lg-9 col-md-9 col-12 bg-services-box">
                                                                    <div className="pt-lft pt-lg-4 pt-md-4 pt-3 pb-0 text-left clearfix aos-init aos-animate" data-aos="fade-up">
                                                                        <h5 className="clr-grn mt-0 mb-2"><span className="ft-wt2">{obj?.title}</span></h5>
                                                                        <p className="mb-0">{obj?.short_description}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            :
                                                            <div className="row g-0">
                                                                <div className="col-lg-9 col-md-9 col-12 bg-services-box2 pd-ridser">
                                                                    <div className="pt-lg-4 pt-md-4 pt-5 pb-0 pt-lft text-left clearfix aos-init aos-animate" data-aos="fade-up">
                                                                        <h5 className="clr-grn mt-0 mb-2"><span className="ft-wt2">{obj?.title}</span></h5>
                                                                        <p className="mb-0">{obj?.short_description}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-3 col-12 pd-ridser-lft">
                                                                    <Image width={401} height={268} src={obj?.media_id?.file_path} className="img-fluid aos-init aos-animate brradis-two" data-aos="fade-down" alt={obj?.media_id?.alt_text} />
                                                                </div>
                                                            </div>
                                                    }
                                                </div>
                                            </div>
                                        ))
                                    }

                                    {/* <div className="col-lg-12 col-md-12 col-12">
                                        <div className="career-box border-non-serices mb-lg-5 mb-md-5 mb-3 clearfix">
                                            <div className="row">
                                                <div className="col-lg-9 col-md-9 col-12 bg-services-box2 pd-ridser">
                                                    <div className="pt-lg-4 pt-md-4 pt-5 pb-0 pt-lft text-left clearfix aos-init aos-animate" data-aos="fade-up">
                                                        <h5 className="clr-grn mt-0 mb-2"><span className="ft-wt2">Financial Analytics:</span></h5>
                                                        <p className="mb-0">Integrating and scrutinizing multiple datasets to extract valuable and actionable insights that reduce costs, improve profitability and forecast growth of an organization.</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-12 pd-ridser-lft">
                                                    <img src="img/services/s2-n.jpg" className="img-fluid aos-init aos-animate brradis-two" data-aos="fade-down" alt="Financial Analytics" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12 col-12">
                                        <div className="career-box border-non-serices mb-lg-5 mb-md-5 mb-3 clearfix">
                                            <div className="row">
                                                <div className="col-lg-3 col-md-3 col-12 pd-ridser">
                                                    <img src="img/services/s3.jpg" className="img-fluid aos-init aos-animate brradis-one" data-aos="fade-down" alt="Competitive Marketing Analytics" />
                                                </div>
                                                <div className="col-lg-9 col-md-9 col-12 bg-services-box">
                                                    <div className="pt-lg-4 pt-md-4 pt-3 pb-0 pt-lft text-left clearfix aos-init aos-animate" data-aos="fade-up">
                                                        <h5 className="clr-grn mt-0 mb-2"><span className="ft-wt2">Competitive Marketing Analytics:</span></h5>
                                                        <p className="mb-0">Identifying market trends, assessing campaign effectiveness, and refining strategies for superior customer targeting and competitive advantage.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12 col-12">
                                        <div className="career-box border-non-serices mb-lg-5 mb-md-5 mb-3 clearfix">
                                            <div className="row">
                                                <div className="col-lg-9 col-md-9 col-12 bg-services-box2 pd-ridser">
                                                    <div className="pt-lg-4 pt-md-4 pt-3 pb-0 pt-lft text-left clearfix aos-init aos-animate" data-aos="fade-up">
                                                        <h5 className="clr-grn mt-0 mb-2"><span className="ft-wt2">Marketing Analytics:</span></h5>
                                                        <p className="mb-0">Maximizing marketing ROI through data-driven marketing strategies informed by campaign performance analysis, customer behavior, and market trends.</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-12 pd-ridser-lft">
                                                    <img src="img/services/s4.jpg" className="img-fluid aos-init aos-animate brradis-two" data-aos="fade-down" alt="Marketing Analytics" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12 col-12">
                                        <div className="career-box border-non-serices mb-lg-5 mb-md-5 mb-3 clearfix">
                                            <div className="row">
                                                <div className="col-lg-3 col-md-3 col-12 pd-ridser">
                                                    <img src="img/services/s5.jpg" className="img-fluid aos-init aos-animate brradis-one" data-aos="fade-down" alt="Customer Analytics" />
                                                </div>
                                                <div className="col-lg-9 col-md-9 col-12 bg-services-box">
                                                    <div className="pt-lg-4 pt-md-4 pt-3 pb-0 pt-lft text-left clearfix aos-init aos-animate" data-aos="fade-up">
                                                        <h5 className="clr-grn mt-0 mb-2"><span className="ft-wt2">Customer Analytics:</span></h5>
                                                        <p className="mb-0">Understanding customer behaviors and preferences to enhance customer experience, retention, and acquisition strategies.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12 col-12">
                                        <div className="career-box border-non-serices mb-lg-5 mb-md-5 mb-3 clearfix">
                                            <div className="row">
                                                <div className="col-lg-9 col-md-9 col-12 bg-services-box2 pd-ridser">
                                                    <div className="pt-lg-4 pt-md-4 pt-3 pb-0 pt-lft text-left clearfix aos-init aos-animate" data-aos="fade-up">
                                                        <h5 className="clr-grn mt-0 mb-2"><span className="ft-wt2">Retail Analytics:</span></h5>
                                                        <p className="mb-0">Analyzing sales data, customer behavior, and market trends to optimize inventory management, improve store layouts, and enhance sales strategies.</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-12 pd-ridser-lft">
                                                    <img src="img/services/s6.jpg" className="img-fluid aos-init aos-animate brradis-two" data-aos="fade-down" alt="Retail Analytics" />
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServicesSection;

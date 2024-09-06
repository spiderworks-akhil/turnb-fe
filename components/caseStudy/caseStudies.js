// components/BreadcrumbNav.js

import React from 'react';
import Link from 'next/link'; // Import Link for internal navigation
import Image from 'next/image';

const CaseStudiesList = () => {
    return (
        <>
            <div className="career-bg clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-12">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb mt-lg-5 mt-md-5 mt-3 mb-lg-4 mb-md-4 mb-3">
                                    <li className="breadcrumb-item">
                                        <Link href="/" style={{ color: '#016b66', textDecoration: 'none' }}>
                                            Home
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        <Link href="/case-studies" style={{ color: '#016b66', textDecoration: 'none' }}>
                                            Case Studies
                                        </Link>
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <section id="" className="text-center pt-3 mt-lg-1 mt-md-1 mt-1">
                <div className="container">
                    {/* SLIDER */}
                    <div className="carousel slide" data-bs-ride="carousel" id="carouselExampleIndicatorsnew">
                        <div className="carousel-indicators carousel-indicators-bottom">
                            {[...Array(2)].map((_, index) => (
                                <button
                                    key={index}
                                    aria-label={`Slide ${index + 1}`}
                                    className={index === 0 ? 'active' : ''}
                                    data-bs-slide-to={index}
                                    data-bs-target="#carouselExampleIndicatorsnew"
                                    type="button"
                                ></button>
                            ))}
                        </div>

                        <div className="carousel-inner boxcasep" style={{ overflow: 'hidden' }}>
                            {Array.from({ length: 2 }).map((_, carouselIndex) => (
                                <div className={`carousel-item ${carouselIndex === 0 ? 'active' : ''}`} key={carouselIndex}>
                                    <div className="row">
                                        {Array.from({ length: 6 }).map((_, index) => (
                                            <div className="col-lg-4 col-md-4 col-12" key={index}>
                                                <div className="case-box mb-lg-4 mb-md-4 mb-3 clearfix">
                                                    <div className="img-case">
                                                        <Image
                                                            src={`/img/case-studies/${['builtcentive.jpg', 'survey.jpg', 'estimate_current.jpg', 'helpedlearning.jpg', 'created.jpg', 'performedvalidation.jpg', 'createdquartely.jpg', 'ana.jpg', 'opti.jpg', 'desi-ass.jpg', 'pro.jpg', 'unw-g.jpg'][index]}`}
                                                            alt={`Case Study ${index + 1}`}
                                                            className="img-fluid aos-init aos-animate"
                                                            data-aos="fade-down"
                                                            width={500} // Adjust width as necessary
                                                            height={300} // Adjust height as necessary
                                                        />
                                                        <div className="title-hover with-titleh">
                                                            <h5 className="text-white p-0 m-0">
                                                                {['Tech', 'Tech', 'E-learning', 'Tech', 'E-learning', 'Tech', 'E-Learning', 'E-Learning', 'E-Learning', 'E-Learning', 'Tech', 'E-Learning'][index]}
                                                            </h5>
                                                        </div>
                                                    </div>
                                                    <div className="prt-git2 aos-init aos-animate" data-aos="fade-up">
                                                        <h2 className="text-left pt-2 mt-0 pb-lg-2 pb-md-2 pb-2 ft-wtcase2">
                                                            {['Built an Incentive Program Model for a Technology ...', 'Devising Survey Analytics for a Technology Giant to ...', 'Developed a model to estimate the current $ exposure ...', 'Helped a tech learning giant to identify bottlenecks...', 'Created a world-wide heat map view on training...', 'Performed pricing validation analysis...', 'Created Quarterly Newsletters for LT Team', 'Analyzing Attendance Drop: A Case Study Utilizing ...', 'Optimizing Lab Utilization for Cost Efficiency ...', 'Designed a program and modelled a dashboard ...', 'Proactive Session and Attendance Projections...', 'Unveiling Insights: Dashboard to Visualize Survey Data ...'][index]}
                                                        </h2>
                                                        <p className="text-left mt-1 fnt-15">
                                                            {['The client is a Fortune 50 multinational technology giant and the worldwide leader in software, services, and solutions. They have a learning...', 'The client is a technology giant and the worldwide leader in software, services and solutions. A dedicated team within the client’s...', 'Client is a multinational corporation specializing in software, services and productivity solutions.Client offers trainings....', 'Client is a technology giant and the worldwide leader in software, services and solutions. It relies on its partner organizations....', 'Client is a technology giant and the worldwide leader in software, services and solutions. It relies on its partner organizations across globe to...', 'Client is a technology giant and the worldwide leader in software, services and solutions. It relies on its partner organizations across globe to....', 'Client is a leading technology company, dominating the global market with their software, services, and innovative solutions...', 'Client faced inconsistent learner attendance in training sessions, thereby needing insights into participation dynamics...', 'Client faced high lab expenses in large-scale training events. TurnB aimed to optimize costs and enhance...', 'Client is a technology company with associates who help with the sales of clients’ software and services...', 'The client, managing a customer training program with a fixed budget needed proactive forecasting for session ...', 'Multinational corporation providing training on services and products to tech giants through third-party ...'][index]}
                                                        </p>
                                                        <div className="knw-more text-left pb-lg-3 pb-md-3 pb-2 mt-lg-2 mt-md-2 mt-3 clearfix">
                                                            <Link href={`/${['built-an-incentive-program-model.html', 'devising-survey-analytics-for-a-technology.html', 'developed-a-model-to-estimate-the-current.html', 'helped-a-tech-learning-giant-to-identify.html', 'created-a-world-wide-heat-map-view-on-training.html', 'performed-pricing-validation-analysis.html', 'created-quarterly-newsletters-for-LT-team.html', 'analyzing-attendance-drop.html', 'optimizing-lab-utilization-for-cost-efficiency.html', 'designed-a-program-and-modelled-a-dashboard-for-an-associate-program.html', 'proactive-session-and-attendance-projections-with-excel-modelling.html', 'unveiling-insights-dashboard-to-visualize-survey-data.html'][index]}`}>
                                                                <span className="btn btn-primary kn-mb">Read More</span>
                                                            </Link>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CaseStudiesList;

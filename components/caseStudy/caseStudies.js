// components/BreadcrumbNav.js

import React from 'react';
import Link from 'next/link'; // Import Link for internal navigation
import Image from 'next/image';
import BreadCrumbs from '../common/breadCrumbs';

const CaseStudiesList = ({ data, list }) => {

    const slides = Math.ceil(list?.data?.length / 6)

    return (
        <>
            <div className="career-bg clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-12">
                            <BreadCrumbs secondCrumb={data?.name} />
                        </div>
                    </div>
                </div>
            </div>
            <section id="" className="text-center pt-3 mt-lg-1 mt-md-1 mt-1">
                <div className="container">
                    {/* SLIDER */}
                    <div className="carousel slide" data-bs-ride="carousel" id="carouselExampleIndicatorsnew">
                        <div className="carousel-indicators carousel-indicators-bottom">
                            {Array.from({ length: slides }, (_, index) => (
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
                            {Array.from({ length: slides }, (_, carouselIndex) => (
                                <div className={`carousel-item ${carouselIndex === 0 ? 'active' : ''}`} key={carouselIndex}>
                                    <div className="row">
                                        {list?.data?.map((obj, index) => (
                                            Math.floor(index / 6) == carouselIndex &&
                                            <div className="col-lg-4 col-md-4 col-12" key={index}>
                                                <div className="case-box mb-lg-4 mb-md-4 mb-3 clearfix">
                                                    <div className="img-case">
                                                        <Link href={`/case-studies/${obj?.slug}`}>
                                                            <Image
                                                                src={obj?.featured_image?.file_path}
                                                                alt={obj?.featured_image?.alt_text}
                                                                className="img-fluid aos-init aos-animate"
                                                                data-aos="fade-down"
                                                                width={500} // Adjust width as necessary
                                                                height={300} // Adjust height as necessary
                                                            />
                                                        </Link>
                                                        <div className="title-hover with-titleh">
                                                            <h5 className="text-white p-0 m-0">
                                                                {obj?.industry?.name}
                                                            </h5>
                                                        </div>
                                                    </div>
                                                    <div className="prt-git2 aos-init aos-animate" data-aos="fade-up">
                                                        <h2 style={{ height: '67px', overflow: 'hidden' }} className="text-left pt-2 mt-0 pb-lg-2 pb-md-2 pb-2 ft-wtcase2">
                                                            {
                                                                obj?.name?.length > 50 ?
                                                                    obj?.name?.slice(0, 50) + '....' :
                                                                    obj?.name
                                                            }
                                                        </h2>
                                                        <p style={{ height: '51px', overflow: 'hidden' }} className="text-left mt-1 fnt-15">
                                                            {
                                                                obj?.short_description?.length > 90 ?
                                                                    obj?.short_description?.slice(0, 90) + '....' :
                                                                    obj?.short_description
                                                            }
                                                        </p>
                                                        <div className="knw-more text-left pb-lg-3 pb-md-3 pb-2 mt-lg-2 mt-md-2 mt-3 clearfix">
                                                            <Link href={`/case-studies/${obj?.slug}`}>
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

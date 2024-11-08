import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';

// Dynamically import OwlCarousel for SSR
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
})

const IndustrySuccess = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

  const options = {
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  };

  const slides = Math.ceil(data?.case_studies?.length / 3)
  return (

    <>
      <div className="container">
        <div className="mt-lg-0 mt-md-0 mt-0 mb-lg-5 mb-md-5 mb-3">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="text-center position-relative aos-init aos-animate" data-aos="fade-down">
                <h1 className="title-ak2 ft-wt2 text-center mb-lg-5 mb-md-5 mb-4 mt-lg-0 mt-md-0 mt-4">
                  {/* <span className="text-dark">Data Driven <span className="clr-grn ft-wt3">Success </span></span>
                  <span className="text-dark">{data?.content?.title_3}</span> */}
                  {
                    data?.content?.title_3 ?
                      <span className="text-dark industries-heading" dangerouslySetInnerHTML={{ __html: data?.content?.title_3 }} />
                      :
                      <span className="text-dark">Data Driven <span className="clr-grn ft-wt3">Success </span> </span>
                  }


                </h1>
              </div>
            </div>
          </div>
          <section className="testimonials pt-0 pb-5">
            <div className="container">
              <div className="carousel slide" data-bs-ride="carousel" id="carouselExampleIndicatorsnew">
                <div className="carousel-indicators carousel-indicators-bottom">
                  {
                    slides > 1 &&
                    Array.from({ length: slides }, (_, index) => (
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
                      <div className="row justify-content-center">
                        {data?.case_studies?.map((obj, index) => (
                          Math.floor(index / 3) == carouselIndex &&
                          <div className="col-lg-4 col-md-4 col-12" key={index}>
                            <div className="case-box mb-lg-4 mb-md-4 mb-3 clearfix">
                              <div className="img-case">
                                <Image
                                  src={obj?.featured_image?.file_path}
                                  alt={obj?.featured_image?.alt_text}
                                  className="img-fluid aos-init aos-animate"
                                  data-aos="fade-down"
                                  width={500} // Adjust width as necessary
                                  height={300} // Adjust height as necessary
                                />
                                <div className="title-hover with-titleh">
                                  <h5 className="text-white p-0 m-0">
                                    {data?.name}
                                  </h5>
                                </div>
                              </div>
                              <div className="prt-git2 aos-init aos-animate" data-aos="fade-up">
                                <h2 className="text-left pt-2 mt-0 pb-lg-2 pb-md-2 pb-2 ft-wtcase2">
                                  {
                                    obj?.name?.length > 35 ?
                                      obj?.name?.slice(0, 35) + '....' :
                                      obj?.name
                                  }
                                </h2>
                                <p className="text-left mt-1 fnt-15">
                                  {
                                    obj?.short_description?.length > 80 ?
                                      obj?.short_description?.slice(0, 80) + '....' :
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
        </div>
      </div>
      <div className='bg-bluesec bg-bluesec-margnttech clearfix'></div>
    </>
  );
};

export default IndustrySuccess;

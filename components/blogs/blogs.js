import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';

const BlogList = ({ data, list }) => {

  const slides = Math.ceil(list?.data?.length / 3)

  return (
    <div className="container">
      <div className="mt-lg-5 mt-md-5 mt-3 mb-lg-5 mb-md-5 mb-3">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-12 col-12">
            <div className="text-center position-relative" data-aos="fade-down">
              <h1 className="title-ak2 ft-wt2 text-center mb-lg-5 mb-md-5 mb-4 mt-lg-0 mt-md-0 mt-4">
                <span className="text-dark">{data?.title}</span>
              </h1>
            </div>
          </div>
        </div>

        <section className="testimonials pt-0 pb-5">
          <div className="container">
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
                        Math.floor(index / 3) == carouselIndex &&
                        <div className="col-lg-4 col-md-4 col-12" key={index}>
                          <div className="minhtblog-sec case-box mb-lg-4 mb-md-4 mb-3 clearfix">
                            <div className="img-case">
                              <Link href={`/blog/${obj?.slug}`}>
                                <Image
                                  src=
                                  {obj?.featured_image?.file_path}
                                  alt={obj?.featured_image?.alt_text}
                                  className="img-fluid aos-init aos-animate"
                                  data-aos="fade-down"
                                  width={500} // Adjust width as necessary
                                  height={300} // Adjust height as necessary
                                />
                              </Link>
                              <div className="title-hover with-titleh">
                                <h5 className="text-white p-0 m-0">
                                  {data?.name}
                                </h5>
                              </div>
                            </div>
                            <div className="prt-git2 aos-init aos-animate" data-aos="fade-up">
                              <h2 className="text-left pt-2 mt-0 pb-lg-2 pb-md-2 pb-2 ft-wtcase2">
                                {
                                  // obj?.title?.length > 60 ?
                                  //   obj?.title?.slice(0, 60) + '....' :
                                  obj?.title
                                }
                              </h2>

                              <div className="knw-more text-left mt-lg-2 mt-md-2 mt-3 clearfix">
                                <Link href={`/blog/${obj?.slug}`}>
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
            {/* <div className="row justify-content-center">
              <div className="col-lg-11 col-md-11 col-12">
                  <div>
                    <div className="shadow-effect text-center">
                      <div className="case-box minhtblog-sec mb-lg-4 mb-md-4 mb-3 clearfix">
                        <div className="img-case">
                          <Image
                            src="/img/datav.jpg"
                            alt="Data Visualization"
                            className="img-fluid"
                            data-aos="fade-down"
                            width={800}
                            height={500}
                          />
                          <div className="title-hover width-tiltb">
                            <h5 className="text-white p-0 m-0">Blog</h5>
                          </div>
                        </div>
                        <div className="prt-git2" >
                          <h2 className="text-left minhtbloghdg pt-2 mt-0 pb-lg-2 pb-md-2 pb-2 ft-wtcase2">
                            Data Visualization Techniques for Better Insights
                          </h2>
                          <div className="knw-more text-left pb-lg-3 pb-md-3 pb-2 mt-lg-2 mt-md-2 mt-3 clearfix">
                            <Link href="/data-visualization-techniques" className="btn btn-primary kn-mb">
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="shadow-effect text-center">
                      <div className="case-box minhtblog-sec mb-lg-4 mb-md-4 mb-3 clearfix">
                        <div className="img-case">
                          <Image
                            src="/img/makes.jpg"
                            alt="Making Smarter Choices"
                            className="img-fluid"
                            data-aos="fade-down"
                            width={800}
                            height={500}
                          />
                          <div className="title-hover width-tiltb">
                            <h5 className="text-white p-0 m-0">Blog</h5>
                          </div>
                        </div>
                        <div className="prt-git2" data-aos="fade-up">
                          <h2 className="text-left minhtbloghdg pt-2 mt-0 pb-lg-2 pb-md-2 pb-2 ft-wtcase2">
                            Making Smarter Choices: How your Business can Thrive with Data
                          </h2>
                          <div className="knw-more text-left pb-lg-3 pb-md-3 pb-2 mt-lg-2 mt-md-2 mt-3 clearfix">
                            <Link href="/making-smarter-choices" className="btn btn-primary kn-mb">
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div> */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogList;

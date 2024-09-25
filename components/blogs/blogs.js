import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';

const BlogList = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container">
      <div className="mt-lg-5 mt-md-5 mt-3 mb-lg-5 mb-md-5 mb-3">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-12 col-12">
            <div className="text-center position-relative" data-aos="fade-down">
              <h1 className="title-ak2 ft-wt2 text-center mb-lg-5 mb-md-5 mb-4 mt-lg-0 mt-md-0 mt-4">
                <span className="text-dark">Blog</span>
              </h1>
            </div>
          </div>
        </div>

        <section className="testimonials pt-0 pb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-11 col-md-11 col-12">
                <Slider {...settings}>
                  {/* Blog Item 1 */}
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

                  {/* Blog Item 2 */}
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

                  {/* Add more blog items here */}
                </Slider>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogList;

import Image from 'next/image'
import React from 'react'
import Partner from '@/public/img/partner.png'


function FourthSection({ data }) {
    return (
        <>
            {
                (data?.content?.title_3 || data?.content?.description_3) &&
                <div className="container pt-10">
                    <div className="about-cont2 mt-lg-3 mt-md-3 mt-2 mb-lg-5 mb-md-5 mb-3 clearfix">
                        <div className="row justify-content-center">
                            <div className="col-lg-12 col-md-12 col-12">
                                <div className="text-center position-relative aos-init aos-animate" data-aos="fade-down">
                                    <h1 className="title-ak2 ft-wt2 text-center mb-lg-2 mb-md-2 mb-2 mt-lg-0 mt-md-0 mt-0">
                                        <span className="text-dark home-title">
                                            {data?.content?.title_3}
                                        </span>
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="row p-4 justify-content-center">
                            <div className="col-lg-10 col-md-10 col-12">
                                <div className="text-justify position-relative aos-init aos-animate" data-aos="fade-up">
                                    <div className="ser_desc_text" dangerouslySetInnerHTML={{ __html: data?.content?.description_3 }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

            {
                data?.listing_content?.length > 0 &&
                <section className="text-center pt-3 mt-lg-1 mt-md-1 mt-1">
                    <div className="container">
                        {/* SLIDER */}
                        <div className="carousel slide" data-bs-ride="carousel" id="carouselExampleIndicatorsnew">
                            <div className="carousel-inner" style={{ overflow: 'hidden' }}>
                                <div className="carousel-item active">
                                    <div className="row">

                                        <div className="col-lg-12 col-md-12 col-12">
                                            <div className="career-box border-non-serices mb-lg-5 mb-md-5 mb-3 clearfix">

                                                {
                                                    data?.listing_content?.map((obj, index) => (

                                                        <div key={index} className="row g-0 Competitive-Marketing-Analytics-block">
                                                            {
                                                                obj?.media_id?.file_path &&
                                                                <div className="col-lg-3 col-md-3 col-12 pd-ridser">
                                                                    <Image width={401} height={268} src={obj?.media_id?.file_path} className="img-fluid aos-init aos-animate brradis-one" data-aos="fade-down" />
                                                                </div>
                                                            }
                                                            <div className={`${obj?.media_id?.file_path ? "col-lg-9 col-md-9" : "col-lg-12 col-md-12"}col-lg-9 col-md-9 col-12 bg-services-box`}>
                                                                <div className="pt-lft pt-lg-4 pt-md-4 pt-3 pb-0 text-left clearfix aos-init aos-animate" data-aos="fade-up">
                                                                    <h5 className="clr-grn mt-0 mb-2"><span className="ft-wt2">{obj?.title}</span></h5>
                                                                    <div dangerouslySetInnerHTML={{ __html: obj?.detailed_description }} />
                                                                </div>
                                                            </div>
                                                        </div>

                                                    ))
                                                }

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }
        </>
    )
}

export default FourthSection

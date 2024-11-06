import React from 'react'
import BannerPlaceholder from '@/public/img/banners/placeholder.svg'
import Image from 'next/image'

function SerDetBanner({ data }) {
    return (
        <>
            <div className="service-detail-banner">

                <Image src={data?.banner_image?.file_path} width={1000} height={400} alt={data?.banner_image?.alt_text || data?.title}
                    className=' w-full img-responsive' />

            </div>
            {
                (data?.content?.title_1 || data?.content?.description_1) &&
                <div className="container pt-10">
                    <div className="about-cont2 mt-lg-3 mt-md-3 mt-2 mb-lg-5 mb-md-5 mb-3 clearfix">
                        {
                            data?.content?.title_1 &&
                            <div className="row justify-content-center">
                                <div className="col-lg-12 col-md-12 col-12">
                                    <div className="text-center position-relative aos-init aos-animate" data-aos="fade-down">
                                        <h1 className="title-ak2 ft-wt2 text-center mb-lg-2 mb-md-2 mb-2 mt-lg-0 mt-md-0 mt-0">
                                            <span className="text-dark home-title">{data?.content?.title_1}</span>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        }
                        {
                            data?.content?.description_1 &&
                            <div className="row p-4 justify-content-center">
                                <div className="col-lg-10 col-md-10 col-12">
                                    <div className="text-justify position-relative aos-init aos-animate" data-aos="fade-up">
                                        <div className="ser_desc_text" dangerouslySetInnerHTML={{ __html: data?.content?.description_1 }} />
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            }
        </>
    )
}

export default SerDetBanner

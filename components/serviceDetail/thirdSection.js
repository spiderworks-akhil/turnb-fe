import Image from 'next/image'
import React from 'react'
import Partner from '@/public/img/partner.png'


function ThirdSection({ data }) {
    return (
        <div>
            {
                (data?.content?.title_2 || data?.content?.description_2) &&
                <div class="container mt-10">
                    <div class="bg-partner mb-lg-5 mb-md-5 mb-3 p-5 clearfix">
                        <div class="about-cont2 mt-lg-5 mt-md-5 mt-3 mb-lg-5 mb-md-5 mb-3 clearfix">
                            <div class="row justify-content-center">
                                <div className={`${data?.content?.media_id_2?.file_path ? 'col-lg-6 col-md-6' : 'col-lg-12 col-md-12'}col-lg-12 col-md-6 col-12`}>
                                    <div class="position-relative" data-aos="fade-down">
                                        <h2 class="title-ak2 text-dark  text-lf mb-lg-3 mb-md-3 mb-3 mt-lg-0 mt-md-0 mt-4">
                                            {data?.content?.title_2}
                                        </h2>
                                        <div class="boxline-new2 mt-lg-3 mt-md-3 mt-2"></div>
                                        <div class="text-lf position-relative" data-aos="fade-down">
                                            <div class="bg-image-sec" dangerouslySetInnerHTML={{ __html: data?.content?.description_2 }} />
                                        </div>
                                    </div>
                                </div>
                                {
                                    data?.content?.media_id_2?.file_path &&
                                    <div class="col-lg-6 col-md-6 col-12">
                                        <div className="text-lf position-relative" data-aos="fade-down">
                                            {/* <Image width={300} height={279} src={data?.content?.media_id_2?.file_path} alt={data?.content?.media_id_2?.alt_text || 'image'} class="img-responsive imgrit" /> */}
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default ThirdSection

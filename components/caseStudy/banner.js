import Image from 'next/image'
import React from 'react'

function CaseBanner({ data }) {
    return (
        <div>
            <div class="carousel slide mr-topinnerpage-n" data-bs-ride="carousel" id="carouselExampleIndicators">
                {/* <!-- Uncomment and use the carousel indicators if needed --> */}

                <div class="carousel-inner">

                    <div class="carousel-item active" data-aos="fade-up">
                        <Image width={1520} height={714} alt={data?.content?.case_study_banner_media_id?.alt_text || data?.name} class="d-block text-center m-auto img-height img-fluid d-lg-block d-md-block d-none"
                            src={data?.content?.case_study_banner_media_id?.file_path} data-aos="fade-right" />
                        <Image width={960} height={540} alt={data?.content?.case_study_mobile_banner_media_id?.alt_text || data?.name} class="d-block w-100 img-fluid d-lg-none d-md-none d-block"
                            src={data?.content?.case_study_mobile_banner_media_id?.file_path} data-aos="fade-left" />
                        <div class="carousel-caption">
                        </div>
                    </div>
                    {/* <!-- Add more carousel items here if needed --> */}
                </div>
            </div>

        </div>
    )
}

export default CaseBanner

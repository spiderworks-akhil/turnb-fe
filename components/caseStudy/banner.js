import Image from 'next/image'
import React from 'react'

function CaseBanner({ data }) {
    return (
        <div className="banner-container mr-topinnerpage">
            <Image width={1520} height={714} alt={data?.content?.case_study_banner_media_id?.alt_text || data?.name} class="d-block text-center m-auto img-height img-fluid d-lg-block d-md-block d-none w-100 abt-banner"
                src={data?.content?.case_study_banner_media_id?.file_path} />
            <Image width={960} height={540} alt={data?.content?.case_study_mobile_banner_media_id?.alt_text || data?.name} class="d-block img-fluid d-lg-none d-md-none d-block abt-mob-banner"
                src={data?.content?.case_study_mobile_banner_media_id?.file_path} />
        </div>
    )
}

export default CaseBanner

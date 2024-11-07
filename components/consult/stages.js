import Image from 'next/image';
import React from 'react';

const ConsultStages = ({ data }) => {

    return (
        <>
            <div class="container">
                <div class="about-cont2 mt-lg-5 mt-md-5 mt-3 mb-lg-5 mb-md-5 mb-3 clearfix">
                    <div class="row justify-content-center">
                        <div class="col-lg-9 col-md-9 col-12">
                            <div class="text-center position-relative" data-aos="fade-down">
                                <h2 class="title-ak2 ft-wt2 text-center mb-lg-3 mb-md-3 mb-3 mt-lg-0 mt-md-0 mt-4">
                                    <span class="text-dark home-title consult-stage" dangerouslySetInnerHTML={{ __html: data?.content?.consult_title_1 }} />
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div class="row p-4 justify-content-center">
                        <div class="col-lg-8 col-md-8 col-12">
                            <div class="text-justify position-relative" data-aos="fade-up">
                                <div class="bg-image-sec">
                                    <p class="w-auto mt-0 text-center mb-2">
                                        {data?.content?.consult_description_1}
                                    </p>
                                </div>
                                <div class="boxline-new mt-lg-5 mb-5 mt-md-5 mt-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Mobile Image Section --> */}
            <div class="container d-block">
                <div class="row mb-3 mb-5">
                    <div class="col-lg-12 col-md-12 col-12">
                        <Image width={700} height={700} src={data?.content?.consult_section_2_media_id?.file_path} alt={data?.content?.consult_section_2_media_id?.alt_text} className="img-fluid d-block m-auto text-center" />
                    </div>
                </div>
            </div>

            {/* <!-- Consult D5™ Framework Section --> */}
            <div class="container mt-lg-5 mt-md-5 mt-3 mb-lg-5 mb-md-5 mb-3">
                <div class="text-center position-relative" data-aos="fade-down">
                    <h1 class="title-ak2 ft-wt2 mb-lg-5 mb-md-5 mb-3 mt-lg-0 mt-md-0 mt-4">
                        <span class="clr-g">{data?.content?.title_2}</span>
                    </h1>
                </div>

                {
                    data?.content?.listing_id_consult?.map((obj, index) => (
                        <div key={index} class="row justify-content-center mb-lg-5 mb-md-5 mb-4">
                            <div class="col-lg-9 col-md-9 col-12">
                                <div class="cosult-box p-4 clearfix">
                                    <div class="box" data-aos="fade-down">
                                        <button class="spin circle">
                                            <Image width={90} height={71} src={obj?.media_id?.file_path} alt={obj?.media_id?.alt_text} className="img-fluid d-block m-auto text-center" />
                                        </button>
                                    </div>
                                    <div class="dec-text clearfix" data-aos="fade-up">
                                        <h5 class="clr-grn mt-0 mb-2 consult-listing-title" dangerouslySetInnerHTML={{ __html: obj?.title }} />
                                        <p class="mb-0">{obj?.short_description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>

            {/* <!-- Partner Section --> */}
            <div class="container">
                <div class="bg-partner mb-lg-5 mb-md-5 mb-3 p-5 clearfix">
                    <div class="about-cont2 mt-lg-5 mt-md-5 mt-3 mb-lg-5 mb-md-5 mb-3 clearfix">
                        <div class="row justify-content-center">
                            <div class="col-lg-7 col-md-7 col-12">
                                <div class="position-relative" data-aos="fade-down">
                                    <h1 class="title-ak2 text-dark  text-lf mb-lg-3 mb-md-3 mb-3 mt-lg-0 mt-md-0 mt-4">
                                        <span class="clr-g ft-600" dangerouslySetInnerHTML={{ __html: data?.content?.consult_title_3 }} />
                                        {/* <span class="clr-grn">doesn't end with delivery!</span> */}
                                    </h1>
                                    <div class="boxline-new2 mt-lg-3 mt-md-3 mt-2"></div>
                                    <div class="text-lf position-relative" data-aos="fade-down">
                                        <div class="bg-image-sec">
                                            <p class="w-auto mt-0 mb-2">
                                                {data?.content?.consult_short_description_3}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-5 col-md-5 col-12">
                                <div class="text-lf position-relative" data-aos="fade-down">
                                    <Image width={300} height={279} src={data?.content?.consult_section_3_media_id?.file_path} alt={data?.content?.consult_section_3_media_id?.alt_text} class="img-fluid imgrit" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-12">
                            <div class="text-lf justify position-relative" data-aos="fade-up">
                                <div class="parter-list border-ritnew clearfix">
                                    <h4 class="ft-wt3">
                                        <span class="clr-g ft-600" dangerouslySetInnerHTML={{ __html: data?.content?.consult_sub_title_1 }} />
                                    </h4>
                                    <div dangerouslySetInnerHTML={{ __html: data?.content?.consult_description_2 }} />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-12">
                            <div class="text-lf justify position-relative" data-aos="fade-up">
                                <div class="parter-list mr-lfttt clearfix">
                                    <h4 class="ft-wt3">
                                        <span class="clr-g ft-600" dangerouslySetInnerHTML={{ __html: data?.content?.consult_sub_title_2 }} />
                                    </h4>
                                    <div dangerouslySetInnerHTML={{ __html: data?.content?.consult_description_3 }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ConsultStages;
